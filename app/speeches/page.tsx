import type { Metadata } from "next";
import { SPEECHES, SITE } from "@/lib/data";
import { speechesPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Charlie Munger Speeches — Watch & Read His Greatest Talks",
  description:
    "Watch Charlie Munger's most influential speeches on YouTube — including The Psychology of Human Misjudgment, the USC Commencement, and Elementary Worldly Wisdom. Includes transcript links.",
  openGraph: {
    title: "Charlie Munger Speeches & Talks",
    description: "Watch and read Charlie Munger's most influential speeches — each a masterclass in multidisciplinary thinking.",
    url: `${SITE.url}/speeches`,
  },
  alternates: { canonical: `${SITE.url}/speeches` },
};

export default function SpeechesPage() {
  const schema = speechesPageSchema(SPEECHES);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Speeches", url: `${SITE.url}/speeches` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="section-enter" style={{ maxWidth: 800, margin: "0 auto", padding: "100px 32px 100px" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#C4A76C", marginBottom: 12 }}>Archive</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300, color: "#2C2416", marginBottom: 12 }}>Speeches &amp; Talks</h1>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 15, lineHeight: 1.8, color: "#6B5D4F", maxWidth: 640, marginBottom: 48 }}>
          The most influential public addresses — each a masterclass in multidisciplinary thinking. Watch them, read the transcripts, and return to them often.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {SPEECHES.map((s) => (
            <article key={s.slug} className="card" style={{ padding: 32 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 8, flexWrap: "wrap" }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, color: "#2C2416" }}>{s.title}</h2>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#B5A898" }}>{s.year}</span>
              </div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C4A76C", marginBottom: 12 }}>{s.venue}</p>
              <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, lineHeight: 1.8, color: "#6B5D4F", marginBottom: 20 }}>{s.description}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {s.youtube && (
                  <a href={s.youtube} target="_blank" rel="noopener noreferrer" className="ext-link" aria-label={`Watch ${s.title} on YouTube`}>
                    ▶ Watch on YouTube
                  </a>
                )}
                {s.transcript && (
                  <a href={s.transcript} target="_blank" rel="noopener noreferrer" className="ext-link" aria-label={`Read transcript of ${s.title}`}>
                    Read Transcript
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
