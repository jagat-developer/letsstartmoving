import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/site-data";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://letsstartmoving.ca").replace(/\/$/, "");

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/get-a-quote", changeFrequency: "monthly", priority: 0.9 },
  { path: "/video-quote", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...servicePages.map((service) => ({
      url: `${baseUrl}/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: service.slug.endsWith("-services") ? 0.8 : 0.7,
    })),
  ];
}
