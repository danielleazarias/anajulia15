import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { eventConfig } from "@/config/event";
import ButterflyCursor from "@/components/ButterflyCursor";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LoadingScreen from "@/components/LoadingScreen";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Analytics } from "@vercel/analytics/next";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(eventConfig.site.url),
  title: eventConfig.site.title,
  description: eventConfig.site.description,
  keywords: [
    "15 anos",
    "debutante",
    "convite digital",
    "Ana Júlia",
    "festa de quinze anos",
  ],
  authors: [{ name: eventConfig.debutante.fullName }],
  openGraph: {
    title: eventConfig.site.title,
    description: eventConfig.site.description,
    url: eventConfig.site.url,
    siteName: eventConfig.site.title,
    locale: eventConfig.site.locale,
    type: "website",
    images: [
      {
        url: eventConfig.hero.backgroundImage,
        width: 1200,
        height: 630,
        alt: eventConfig.site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: eventConfig.site.title,
    description: eventConfig.site.description,
    images: [eventConfig.hero.backgroundImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icons/favicon.svg",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: eventConfig.site.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="butterfly-cursor relative">
        <LoadingScreen />
        <ParticlesBackground />
        <ButterflyCursor />
        {children}
        <ScrollToTopButton />
        <Analytics />
      </body>
    </html>
  );
}
