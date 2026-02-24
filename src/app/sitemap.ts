import type { MetadataRoute } from "next";
import { getAllLocationSlugs } from "@/lib/locations";
import { getAllBlogSlugs } from "@/lib/blog-posts";

const BASE_URL = "https://www.hertsmanwithavan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationSlugs = getAllLocationSlugs();
  const blogSlugs = getAllBlogSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/packing-and-storage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/video-blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/removals/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages, ...blogPages];
}
