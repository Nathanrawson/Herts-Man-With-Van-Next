import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileSocialBar from "@/components/sections/MobileSocialBar";
import CTA from "@/components/sections/CTA";
import VideoBlogs from "@/components/sections/VideoBlogs";
import VideoBlogsHero from "@/components/sections/VideoBlogsHero";
import VideoJsonLd from "@/components/seo/VideoJsonLd";

export const metadata: Metadata = {
  title: "Video Blogs | Welwyn Garden City",
  description:
    "Watch helpful videos from Herts Man With A Van covering home moves, office relocations, collections and deliveries and more in Welwyn Garden City and throughout Hertfordshire.",
  keywords: [
    "removals videos Hertfordshire",
    "moving tips Welwyn Garden City",
    "how to load a van",
    "furniture removals video",
    "man with a van video blog",
  ],
  alternates: {
    canonical: "/video-blogs",
  },
  openGraph: {
    title: "Video Blogs | Herts Man With A Van | Welwyn Garden City",
    description:
      "Watch helpful videos covering home moves, office relocations, and removals tips from Herts Man With A Van in Hertfordshire.",
    url: "/video-blogs",
    siteName: "Herts Man With A Van",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Blogs | Herts Man With A Van",
    description:
      "Watch removals videos and moving tips from Herts Man With A Van in Hertfordshire.",
  },
};

export default function VideoBlogsPage() {
  return (
    <>
      <VideoJsonLd />
      <Header />
      <main>
        <VideoBlogsHero />
        <VideoBlogs />
        <CTA />
      </main>
      <Footer />
      <MobileSocialBar />
    </>
  );
}
