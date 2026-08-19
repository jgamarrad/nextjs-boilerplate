import type { MetadataRoute } from "next";

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

  return occasionPages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority,
  }));
}
