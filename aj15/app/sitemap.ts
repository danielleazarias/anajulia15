import type { MetadataRoute } from "next";
import { eventConfig } from "@/config/event";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: eventConfig.site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
