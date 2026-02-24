import type { BlogPost } from "@/lib/blog-posts";

interface BlogPostJsonLdProps {
  post: BlogPost;
}

export default function BlogPostJsonLd({ post }: BlogPostJsonLdProps) {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.hertsmanwithavan.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Herts Man With A Van",
      url: "https://www.hertsmanwithavan.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Herts Man With A Van",
      logo: {
        "@type": "ImageObject",
        url: "https://www.hertsmanwithavan.com/assets/images/logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.hertsmanwithavan.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.content
      .map((s) => s.body.split(/\s+/).length)
      .reduce((a, b) => a + b, 0),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hertsmanwithavan.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.hertsmanwithavan.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.hertsmanwithavan.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
