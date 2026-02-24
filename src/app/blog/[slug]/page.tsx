import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs, blogPosts } from "@/lib/blog-posts";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileSocialBar from "@/components/sections/MobileSocialBar";
import BlogArticle from "@/components/sections/BlogArticle";
import BlogPostJsonLd from "@/components/seo/BlogPostJsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    keywords: [
      "removals Hertfordshire",
      "man with a van tips",
      "moving advice",
      post.category.toLowerCase(),
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      siteName: "Herts Man With A Van",
      locale: "en_GB",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostJsonLd post={post} />
      <Header />
      <main>
        <BlogArticle post={post} />
      </main>
      <Footer />
      <MobileSocialBar />
    </>
  );
}
