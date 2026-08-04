import type { MetadataRoute } from "next";
import { eventConfig } from "@/config/event";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: eventConfig.site.title,
    short_name: `${eventConfig.debutante.firstName} 15 Anos`,
    description: eventConfig.site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FBFCFE",
    theme_color: eventConfig.site.themeColor,
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
