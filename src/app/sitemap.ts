import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "monthly" | "weekly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/who-we-are/", priority: 0.8, changeFrequency: "yearly" },
    { path: "/ourbrands/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/careers/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact-us/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
