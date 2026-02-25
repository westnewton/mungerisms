import type { Metadata } from "next";
import { TIMELINE, SITE } from "@/lib/data";
import { timelinePageSchema, breadcrumbSchema } from "@/lib/schema";

const typeColors: Record<string, string> = {
  life: "#8B7355", education: "#5B7B6F", partnership: "#7B6B8A",
  career: "#6B7B8B", investing: "#8B7B5B", intellectual: "#6B5B4B",
};

export const metadata: Metadata = {
  title: "Charlie Munger Biography & Timeline — 1924 to 2023",
  description:
    "The life of Charlie Munger from Omaha to Berkshire Hathaway. Key events, personal tragedies, the Buffett partnership, and a century of intellectual curiosity.",
  openGraph: {
    title: "Charlie Munger Biography & Timeline",
    description: "Nearly a century of relentless intellectual curiosity — the complete timeline of Charlie Munger's life.",
    url: `${SITE.url}/timeline`,
  },
  alternates: { canonical: `${SITE.url}/timeline` },
};

export default function TimelinePage() {
  const schema = timelinePageSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Timeline", url: `${SITE.url}/timeline` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="section-enter section-padding" style={{ maxWidth: 900, margin: "0 auto", padding: "100px 32px 100px" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#C4A76C", marginBottom: 12 }}>Biography</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300, color: "#2C2416", marginBottom: 12 }}>A Life of Learning</h1>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 15, lineHeight: 1.8, color: "#6B5D4F", maxWidth: 640, marginBottom: 56 }}>
          Nearly a century of relentless intellectual curiosity, from Depression-era Omaha to becoming one of the most respected minds in business and investing.
        </p>
        <ol style={{ listStyle: "none" }}>
          {TIMELINE.map((t, i) => (
            <li key={i} className="timeline-item">
              <span style={{ position: "absolute", left: -88, top: 2, fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 400, color: "#8B7355", width: 48, textAlign: "right" }}>
                {t.year}
              </span>
              <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 14, lineHeight: 1.7, color: "#2C2416" }}>{t.event}</p>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: typeColors[t.type] || "#8B7355", marginTop: 4, display: "inline-block" }}>
                {t.type}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
