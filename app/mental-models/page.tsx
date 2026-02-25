import type { Metadata } from "next";
import { MENTAL_MODELS, SITE } from "@/lib/data";
import { mentalModelsPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Charlie Munger's Mental Models — The Latticework of Worldly Wisdom",
  description:
    "The latticework of mental models Charlie Munger used to make better decisions — from inversion and circle of competence to the lollapalooza effect. Drawn from mathematics, psychology, economics, and engineering.",
  openGraph: {
    title: "Charlie Munger's Mental Models",
    description: "The mental models framework that made Charlie Munger one of the greatest thinkers in investing and business.",
    url: `${SITE.url}/mental-models`,
  },
  alternates: { canonical: `${SITE.url}/mental-models` },
};

export default function MentalModelsPage() {
  const schema = mentalModelsPageSchema(MENTAL_MODELS);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Mental Models", url: `${SITE.url}/mental-models` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="section-enter section-padding" style={{ maxWidth: 1000, margin: "0 auto", padding: "100px 32px 100px" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#C4A76C", marginBottom: 12 }}>Latticework</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300, color: "#2C2416", marginBottom: 12 }}>Mental Models</h1>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 15, lineHeight: 1.8, color: "#6B5D4F", maxWidth: 640, marginBottom: 48 }}>
          Munger believed in building a &ldquo;latticework of mental models&rdquo; — drawing from multiple disciplines to make better decisions. He argued that 80–90 important models carry about 90% of the freight in making you worldly-wise. These are the frameworks he returned to most often.
        </p>
        <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {MENTAL_MODELS.map((m) => (
            <article key={m.slug} className="card" style={{ padding: 32 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, color: "#2C2416", marginBottom: 4 }}>{m.name}</h2>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C4A76C" }}>{m.discipline}</span>
              <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, lineHeight: 1.8, color: "#6B5D4F", marginTop: 16 }}>{m.description}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
