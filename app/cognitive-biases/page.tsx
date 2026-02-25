import type { Metadata } from "next";
import { COGNITIVE_BIASES, SITE } from "@/lib/data";
import { cognitiveBiasesPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Charlie Munger's 25 Cognitive Biases — The Psychology of Human Misjudgment",
  description:
    "The complete list of 25 cognitive biases from Charlie Munger's Psychology of Human Misjudgment. Each tendency explained with Munger's own words and examples.",
  openGraph: {
    title: "Charlie Munger's 25 Cognitive Biases",
    description: "The 25 standard causes of human misjudgment — Munger's complete framework for understanding how the brain misleads us.",
    url: `${SITE.url}/cognitive-biases`,
  },
  alternates: { canonical: `${SITE.url}/cognitive-biases` },
};

export default function CognitiveBiasesPage() {
  const schema = cognitiveBiasesPageSchema(COGNITIVE_BIASES);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Cognitive Biases", url: `${SITE.url}/cognitive-biases` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="section-enter section-padding" style={{ maxWidth: 800, margin: "0 auto", padding: "100px 32px 100px" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#C4A76C", marginBottom: 12 }}>Psychology</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300, color: "#2C2416", marginBottom: 12 }}>25 Cognitive Biases</h1>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 15, lineHeight: 1.8, color: "#6B5D4F", maxWidth: 640, marginBottom: 48 }}>
          From &ldquo;The Psychology of Human Misjudgment&rdquo; — Munger&rsquo;s magnum opus cataloging the 25 standard causes of human misjudgment. He first delivered this as a talk at Harvard in 1995, then extensively revised it for Poor Charlie&rsquo;s Almanack. These are the tendencies that mislead us all.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {COGNITIVE_BIASES.map((b) => (
            <article key={b.slug} className="card" style={{ padding: "28px 32px" }}>
              <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700, color: "#C4A76C", minWidth: 24 }}>
                  {b.number}.
                </span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 500, color: "#2C2416" }}>
                  {b.name}
                </h2>
              </div>
              <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, lineHeight: 1.8, color: "#6B5D4F", marginBottom: b.mungerQuote ? 16 : 0, paddingLeft: 40 }}>
                {b.description}
              </p>
              {b.mungerQuote && (
                <blockquote style={{ borderLeft: "2px solid #C4A76C", paddingLeft: 20, marginLeft: 40, marginTop: 0 }}>
                  <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, lineHeight: 1.8, fontStyle: "italic", color: "#8B7355" }}>
                    &ldquo;{b.mungerQuote}&rdquo;
                  </p>
                </blockquote>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
