import type { Metadata } from "next";
import { QUOTES, QUOTE_CATEGORIES, SITE } from "@/lib/data";
import { quotesPageSchema, breadcrumbSchema } from "@/lib/schema";
import QuotesClient from "./QuotesClient";

export const metadata: Metadata = {
  title: "Charlie Munger Quotes & Mungerisms",
  description:
    "The complete collection of Charlie Munger's most memorable quotes on investing, thinking, wisdom, incentives, and self-improvement. Searchable and organized by theme.",
  openGraph: {
    title: "Charlie Munger Quotes & Mungerisms",
    description:
      "The complete collection of Charlie Munger quotes — on investing, thinking, wisdom, and life. Searchable by theme.",
    url: `${SITE.url}/quotes`,
  },
  alternates: { canonical: `${SITE.url}/quotes` },
};

export default function QuotesPage() {
  const schema = quotesPageSchema(QUOTES);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Quotes", url: `${SITE.url}/quotes` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <QuotesClient quotes={QUOTES} categories={QUOTE_CATEGORIES} />
    </>
  );
}
