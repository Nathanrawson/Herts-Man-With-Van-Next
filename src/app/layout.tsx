import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
import SiteJsonLd from "@/components/seo/SiteJsonLd";

const bodyFont = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const headingFont = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hertsmanwithavan.com"),
  title: {
    default:
      "Herts Man With A Van | Reliable & Insured Removals in Hertfordshire",
    template: "%s | Herts Man With A Van",
  },
  description:
    "Trusted, fully insured removals company based in Welwyn Garden City serving Stevenage, Hatfield, Hertford, St Albans, Hitchin, and all of Hertfordshire. House moves, office relocations & same-day service.",
  keywords: [
    "man with a van Hertfordshire",
    "removals Hertfordshire",
    "man and van near me",
    "removals Welwyn Garden City",
    "removals Stevenage",
    "removals Hatfield",
    "removals Hertford",
    "removals St Albans",
    "removals Hitchin",
    "house removals Hertfordshire",
    "office removals Hertfordshire",
    "insured removals",
    "same day removals",
    "man with a van near me",
    "cheap removals Hertfordshire",
    "Herts Man With A Van",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Herts Man With A Van | Reliable & Insured Removals in Hertfordshire",
    description:
      "Trusted, fully insured removals company serving Stevenage, Welwyn Garden City, Hatfield, Hertford, St Albans & all of Hertfordshire.",
    url: "/",
    siteName: "Herts Man With A Van",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Herts Man With A Van — Removals in Hertfordshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herts Man With A Van | Removals Across Hertfordshire",
    description:
      "Fully insured removals in Welwyn Garden City, Stevenage, Hatfield, St Albans & across Hertfordshire.",
    images: ["/assets/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
