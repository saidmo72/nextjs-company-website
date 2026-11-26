import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextjs-company-website.vercel.app";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/leistungen`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projekte`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      priority: 0.3,
    },
  ];
}