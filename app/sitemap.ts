import type { MetadataRoute } from "next";
import { productos } from "@/lib/catalog";

const siteUrl = "https://sv.lallamadelamor.pe";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const occasionPages = [
    { path: "/inicio", priority: 1 },
    { path: "/cumpleanos", priority: 0.9 },
    { path: "/aniversario", priority: 0.9 },
    { path: "/san_valentin", priority: 0.9 },
    { path: "/mama", priority: 0.8 },
    { path: "/papa", priority: 0.8 },
    { path: "/ocasion_especial", priority: 0.8 },
  ];

  const occasionEntries = occasionPages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority,
  }));

  // Una URL por producto (fichas /regalo/[slug])
  const productEntries = productos.map((p) => ({
    url: `${siteUrl}/regalo/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...occasionEntries, ...productEntries];
}
