import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileSocialBar from "@/components/sections/MobileSocialBar";
import CTA from "@/components/sections/CTA";
import BlogHero from "@/components/sections/BlogHero";
import BlogList from "@/components/sections/BlogList";

export const metadata: Metadata = {
  title: "Blog | Moving Tips & Advice",
  description:
    "Practical moving guides, packing tips, waste disposal advice, and local Hertfordshire knowledge from Herts Man With A Van. Expert advice to make your move stress-free.",
  keywords: [
    "moving tips Hertfordshire",
    "packing guide house move",
    "how to move home",
    "furniture disposal Hertfordshire",
    "council bulky waste collection",
    "removals blog",
    "man with a van tips",
    "moving with pets",
    "choosing a removals company",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Moving Tips & Advice | Herts Man With A Van",
    description:
      "Practical moving guides, packing tips, and local Hertfordshire knowledge from Herts Man With A Van.",
    url: "/blog",
    siteName: "Herts Man With A Van",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Moving Tips & Advice | Herts Man With A Van",
    description:
      "Expert moving guides and packing tips to make your Hertfordshire move stress-free.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <BlogList />
        <CTA />
      </main>
      <Footer />
      <MobileSocialBar />
    </>
  );
}
