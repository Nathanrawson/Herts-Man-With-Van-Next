import { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileSocialBar from "@/components/sections/MobileSocialBar";
import ServiceAreasContent from "@/components/sections/ServiceAreasContent";

export const metadata: Metadata = {
  title: "Service Areas | Removals Across Hertfordshire",
  description:
    "Herts Man With A Van provides fully insured removals across Hertfordshire including Stevenage, Welwyn Garden City, Hatfield, Hertford, St Albans, Hitchin, Letchworth, and Potters Bar.",
  keywords: [
    "removals Hertfordshire",
    "man with a van Hertfordshire",
    "Hertfordshire removals company",
    "removals near me Hertfordshire",
    "house removals Hertfordshire",
    "office removals Hertfordshire",
    "man and van near me",
    "removals Stevenage",
    "removals Welwyn Garden City",
    "removals Hatfield",
    "removals Hertford",
    "removals St Albans",
    "removals Hitchin",
    "removals Letchworth",
    "removals Potters Bar",
  ],
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title:
      "Service Areas | Removals Across Hertfordshire | Herts Man With A Van",
    description:
      "Fully insured removals across Hertfordshire — Stevenage, Welwyn Garden City, Hatfield, Hertford, St Albans, and more.",
    url: "/service-areas",
    siteName: "Herts Man With A Van",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Removals Across Hertfordshire | Herts Man With A Van",
    description:
      "Fully insured removals across Hertfordshire — Stevenage, Welwyn Garden City, Hatfield, Hertford, St Albans, and more.",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceAreasContent />
      </main>
      <Footer />
      <MobileSocialBar />
    </>
  );
}
