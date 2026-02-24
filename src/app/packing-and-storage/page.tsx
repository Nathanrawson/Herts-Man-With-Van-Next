import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileSocialBar from "@/components/sections/MobileSocialBar";
import StorageHero from "@/components/sections/StorageHero";
import {
  StorageSolutions,
  PackingServices,
  IntegratedService,
  StorageTestimonials,
  StorageCTA,
} from "@/components/sections/StorageSections";

export const metadata: Metadata = {
  title: "Packing & Storage Services | Hertfordshire",
  description:
    "Secure packing & storage solutions in Welwyn Garden City, Stevenage, and across Hertfordshire. Professional packing, safe storage, and flexible short & long-term options.",
  keywords: [
    "packing service Hertfordshire",
    "storage Welwyn Garden City",
    "packing and storage near me",
    "secure storage Hertfordshire",
    "removals storage Stevenage",
    "packing service near me",
  ],
  alternates: {
    canonical: "/packing-and-storage",
  },
  openGraph: {
    title: "Packing & Storage Services | Herts Man With A Van | Hertfordshire",
    description:
      "Secure packing & storage solutions in Welwyn Garden City, Stevenage, and across Hertfordshire. Professional packing, safe storage, and flexible options.",
    url: "/packing-and-storage",
    siteName: "Herts Man With A Van",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packing & Storage Services | Herts Man With A Van",
    description:
      "Professional packing & secure storage across Hertfordshire. Short and long-term options available.",
  },
};

export default function PackingAndStoragePage() {
  return (
    <>
      <Header />
      <main>
        <StorageHero />
        <StorageSolutions />
        <PackingServices />
        <IntegratedService />
        <StorageTestimonials />
        <StorageCTA />
      </main>
      <Footer />
      <MobileSocialBar />
    </>
  );
}
