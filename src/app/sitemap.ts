import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { features } from "@/config/features";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const routes: { path: string; priority: number; changeFrequency: "monthly" | "weekly" | "yearly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products", priority: 0.85, changeFrequency: "weekly" },
    { path: "/approach", priority: 0.8, changeFrequency: "monthly" },
    { path: "/culture", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  ];

  if (features.apps) {
    routes.push({ path: "/apps", priority: 0.7, changeFrequency: "weekly" });
  }

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
