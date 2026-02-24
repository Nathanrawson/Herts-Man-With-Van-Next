import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locations,
  getLocationBySlug,
  getAllLocationSlugs,
} from "@/lib/locations";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileSocialBar from "@/components/sections/MobileSocialBar";
import LocationHero from "@/components/sections/LocationHero";
import LocationContent from "@/components/sections/LocationContent";
import LocationFAQ from "@/components/sections/LocationFAQ";
import LocationCTA from "@/components/sections/LocationCTA";
import LocationJsonLd from "@/components/seo/LocationJsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: { absolute: location.metaTitle },
    description: location.metaDescription,
    keywords: [
      `removals ${location.name}`,
      `man with a van ${location.name}`,
      `man and van ${location.name}`,
      `house removals ${location.name}`,
      `office removals ${location.name}`,
      `${location.name} removals company`,
      `removals ${location.county}`,
      `cheap removals ${location.name}`,
      `insured removals ${location.name}`,
      `same day removals ${location.name}`,
      ...location.postcodeAreas.map((pc) => `removals ${pc}`),
    ],
    alternates: {
      canonical: `/removals/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `/removals/${location.slug}`,
      siteName: "Herts Man With A Van",
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  // Get other locations for internal linking
  const otherLocations = locations.filter((l) => l.slug !== slug);

  return (
    <>
      <LocationJsonLd location={location} />
      <Header />
      <main>
        <LocationHero location={location} />
        <LocationContent location={location} otherLocations={otherLocations} />
        <LocationFAQ location={location} />
        <LocationCTA location={location} />
      </main>
      <Footer />
      <MobileSocialBar />
    </>
  );
}
