import type { MetadataRoute } from "next";
import { medicalCityLinks } from "./medical-cities";
import { routePages } from "./route-data";

const siteUrl = "https://taxidumole.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/guide`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hopitaux`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/destinations`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/savoie`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/ville`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/trajet`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...medicalCityLinks.map((city) => ({
      url: `${siteUrl}${city.href}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...routePages.map((route) => ({
      url: `${siteUrl}/trajet/${route.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.74,
    })),
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cgu`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
