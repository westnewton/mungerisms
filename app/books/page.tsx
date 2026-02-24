import type { Metadata } from "next";
import { BOOKS, BOOK_CATEGORIES, SITE } from "@/lib/data";
import { booksPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Charlie Munger Books — Essential Reading List",
  description:
    "Books by Charlie Munger, about Charlie Munger, and recommended by Charlie Munger. Including Poor Charlie's Almanack, Damn Right!, Seeking Wisdom, Influence, and more.",
  openGraph: {
    title: "Charlie Munger Books — Essential Reading List",
    description: "The definitive reading list: books by, about, and beloved by Charlie Munger.",
    url: `${SITE.url}/books`,
  },
  alternates: { canonical: `${SITE.url}/books` },
};

export default function BooksPage() {
  const schema = booksPageSchema(BOOKS);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Books", url: `${SITE.url}/books` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="section-enter" style={{ maxWidth: 800, margin: "0 auto", padding: "100px 32px 100px" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#C4A76C", marginBottom: 12 }}>Library</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300, color: "#2C2416", marginBottom: 12 }}>Books</h1>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 15, lineHeight: 1.8, color: "#6B5D4F", maxWidth: 640, marginBottom: 48 }}>
          Books by Munger, about Munger, and beloved by Munger. A man who read all day, every day, and believed that anyone who doesn&rsquo;t is operating with a severe handicap.
        </p>

        {Object.entries(BOOK_CATEGORIES).map(([catKey, catLabel]) => {
          const catBooks = BOOKS.filter((b) => b.category === catKey);
          if (catBooks.length === 0) return null;
          return (
            <section key={catKey} style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#B5A898",
                  marginBottom: 16,
                  paddingBottom: 8,
                  borderBottom: "1px solid #E8E0D4",
                }}
              >
                {catLabel}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {catBooks.map((b) => (
                  <article key={b.slug} className="card" style={{ padding: "28px 32px" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 500, color: "#2C2416", marginBottom: 2 }}>
                      {b.title}
                    </h3>
                    {b.subtitle && (
                      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, fontStyle: "italic", color: "#8B7355", marginBottom: 8 }}>
                        {b.subtitle}
                      </p>
                    )}
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "1px", color: "#B5A898", marginBottom: 12 }}>
                      {b.author} · {b.year}
                    </p>
                    <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, lineHeight: 1.8, color: "#6B5D4F", marginBottom: 16 }}>
                      {b.description}
                    </p>
                    <a
                      href={b.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ext-link"
                      aria-label={`View ${b.title} on Amazon`}
                    >
                      View on Amazon →
                    </a>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
