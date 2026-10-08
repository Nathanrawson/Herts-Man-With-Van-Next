import type { Location } from "@/lib/locations";

interface LocationJsonLdProps {
  location: Location;
}

export default function LocationJsonLd({ location }: LocationJsonLdProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.hertsmanwithavan.com/removals/${location.slug}#business`,
    name: "Herts Man With A Van",
    url: `https://www.hertsmanwithavan.com/removals/${location.slug}`,
    telephone: "07479 645823",
    email: "phil@hertsmanwithavan.com",
    image:
      "https://www.hertsmanwithavan.com/assets/images/logo.jpg",
    description: location.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "134 Oakdale",
      addressLocality: "Welwyn Garden City",
      addressRegion: "Hertfordshire",
      postalCode: "AL8 7QX",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.81641929999999,
      longitude: -0.2087044,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    memberOf: [
      {
        "@type": "Organization",
        name: "Road Haulage Association",
      },
      {
        "@type": "Organization",
        name: "UK House Clearance Association",
      },
    ],
    sameAs: [
      "https://www.facebook.com/hertsmanwithavan",
      "https://www.tiktok.com/@hertsmanwithavan",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        name: "Service Areas",
        item: "https://www.hertsmanwithavan.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Removals in ${location.name}`,
        item: `https://www.hertsmanwithavan.com/removals/${location.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
