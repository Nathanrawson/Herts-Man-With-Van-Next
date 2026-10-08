export default function SiteJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hertsmanwithavan.com/#business",
    name: "Herts Man With A Van",
    url: "https://www.hertsmanwithavan.com",
    telephone: "07479 645823",
    email: "phil@hertsmanwithavan.com",
    foundingDate: "2017",
    image: "https://www.hertsmanwithavan.com/assets/images/logo.jpg",
    description:
      "Herts Man With A Van is a trusted, fully insured removals company based in Welwyn Garden City, serving Stevenage, Hatfield, Hertford, St Albans, Hitchin, Letchworth, Potters Bar, and all of Hertfordshire.",
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
    areaServed: [
      { "@type": "City", name: "Welwyn Garden City" },
      { "@type": "City", name: "Stevenage" },
      { "@type": "City", name: "Hatfield" },
      { "@type": "City", name: "Hertford" },
      { "@type": "City", name: "St Albans" },
      { "@type": "City", name: "Hitchin" },
      { "@type": "City", name: "Letchworth Garden City" },
      { "@type": "City", name: "Potters Bar" },
      { "@type": "AdministrativeArea", name: "Hertfordshire" },
    ],
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Removals Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "House Removals",
            description:
              "Complete house moves, from single items to full property clearances.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Removals",
            description:
              "Commercial and office relocations with minimal disruption.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Packing Services",
            description:
              "Professional packing using high-quality materials to protect belongings.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Storage Solutions",
            description:
              "Secure short-term and long-term storage options.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Same-Day Removals",
            description:
              "Urgent same-day removal service subject to availability.",
          },
        },
      ],
    },
    memberOf: [
      { "@type": "Organization", name: "Road Haulage Association" },
      { "@type": "Organization", name: "UK House Clearance Association" },
    ],
    sameAs: [
      "https://www.facebook.com/hertsmanwithavan",
      "https://www.tiktok.com/@hertsmanwithavan",
      "https://www.yell.com/biz/herts-man-with-a-van-welwyn-garden-city-10460871/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}
