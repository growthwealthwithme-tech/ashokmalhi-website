import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ashokmalhi.pro/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
