import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileSocialBar from "@/components/sections/MobileSocialBar";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Free Removals Quote",
  description:
    "Get in touch with Herts Man With A Van for a free, no-obligation removals quote in Welwyn Garden City, Stevenage, Hatfield, and across Hertfordshire. Call 01438 500156.",
  keywords: [
    "removals quote Hertfordshire",
    "free quote man with a van",
    "contact removals company",
    "removals quote Stevenage",
    "removals quote Welwyn Garden City",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Free Removals Quote | Herts Man With A Van",
    description:
      "Get in touch with Herts Man With A Van for a free, no-obligation removals quote in Welwyn Garden City, Stevenage, Hatfield, and across Hertfordshire.",
    url: "/contact",
    siteName: "Herts Man With A Van",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Free Removals Quote | Herts Man With A Van",
    description:
      "Get a free, no-obligation removals quote. Call 01438 500156 or fill in our online form.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
      <MobileSocialBar />
    </>
  );
}
