export default function VideoJsonLd() {
  const videos = [
    {
      name: "Hertfordshire Removals",
      description:
        "See Herts Man With A Van in action — professional removals across Hertfordshire.",
      embedUrl: "https://player.vimeo.com/video/973078253?h=0732dc0f55",
      contentUrl: "https://vimeo.com/973078253",
    },
    {
      name: "Moving Large Furniture",
      description:
        "Watch how we safely move large furniture items during a house removal.",
      embedUrl: "https://player.vimeo.com/video/973109689?h=39f0a33cf0",
      contentUrl: "https://vimeo.com/973109689",
    },
    {
      name: "Loading The Van",
      description:
        "Tips and techniques for efficiently loading a removal van for safe transport.",
      embedUrl: "https://player.vimeo.com/video/973140682?h=4e71e2371c",
      contentUrl: "https://vimeo.com/973140682",
    },
  ];

  const videoListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Herts Man With A Van Video Blogs",
    itemListElement: videos.map((video, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: video.name,
        description: video.description,
        thumbnailUrl:
          "https://www.hertsmanwithavan.com/assets/images/hero-bg.jpg",
        uploadDate: "2024-07-01",
        embedUrl: video.embedUrl,
        contentUrl: video.contentUrl,
        publisher: {
          "@type": "Organization",
          name: "Herts Man With A Van",
          logo: {
            "@type": "ImageObject",
            url: "https://www.hertsmanwithavan.com/assets/images/logo.jpg",
          },
        },
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
        name: "Video Blogs",
        item: "https://www.hertsmanwithavan.com/video-blogs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoListSchema),
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
