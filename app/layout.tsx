import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";
import { websiteSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Mungerisms — The Collected Wisdom of Charlie Munger",
    template: "%s | Mungerisms",
  },
  description: SITE.description,
  keywords: [
    "Charlie Munger",
    "Munger quotes",
    "mental models",
    "Berkshire Hathaway",
    "Warren Buffett",
    "investing wisdom",
    "Poor Charlie's Almanack",
    "psychology of human misjudgment",
    "latticework of mental models",
    "value investing",
  ],
  authors: [{ name: "Mungerisms" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Mungerisms — The Collected Wisdom of Charlie Munger",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mungerisms — The Collected Wisdom of Charlie Munger",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
