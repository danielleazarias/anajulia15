import type { MetadataRoute } from "next";
import { eventConfig } from "@/config/event";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${eventConfig.site.url}/sitemap.xml`,
  };
}
