"use client";

import { useState, useCallback, useRef } from "react";
import type { Quote } from "@/lib/data";

export default function QuotesClient({
  quotes,
  categories,
}: {
  quotes: Quote[];
  categories: string[];
}) {
  const [oracleQuote, setOracleQuote] = useState<Quote | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const lastIndex = useRef(-1);

  const consult = useCallback(() => {
    setIsThinking(true);
    setHasRevealed(false);

    // Pick a random quote, avoiding the same one twice in a row
    let idx: number;
    do {
      idx = Math.floor(Math.random() * quotes.length);
    } while (idx === lastIndex.current && quotes.length > 1);
    lastIndex.current = idx;

    setTimeout(() => {
      setOracleQuote(quotes[idx]);
      setIsThinking(false);
      setHasRevealed(true);
    }, 1400);
  }, [quotes]);

  const filtered = quotes.filter((q) => {
    const matchCat = filter === "All" || q.category === filter;
    const matchSearch =
      !search || q.text.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="section-enter">
      {/* ── Oracle Hero ── */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 32px 80px",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#C4A76C",
            marginBottom: 16,
          }}
        >
          The Oracle
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 300,
            color: "#2C2416",
            marginBottom: 12,
            lineHeight: 1.2,
          }}
        >
          Munger Oracle
        </h1>
        <p
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 15,
            color: "#6B5D4F",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 480,
          }}
        >
          Seek a fragment of wisdom from Charlie Munger&rsquo;s collected
          remarks.
        </p>

        <button className="oracle-btn" onClick={consult} disabled={isThinking}>
          {isThinking ? "Consulting…" : hasRevealed ? "Ask Again" : "Consult the Oracle"}
        </button>

        {/* Suspense / Reveal area */}
        <div
          style={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 48,
            width: "100%",
          }}
        >
          {isThinking && (
            <div className="oracle-thinking" style={{ display: "flex", gap: 8 }}>
              <span className="oracle-dot" />
              <span className="oracle-dot" />
              <span className="oracle-dot" />
            </div>
          )}

          {!isThinking && oracleQuote && (
            <div className="oracle-quote-enter" style={{ width: "100%" }}>
              <div className="oracle-line" style={{ marginBottom: 32 }} />
              <blockquote style={{ padding: "0 16px" }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 56,
                    color: "#D4C9B8",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: -8,
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    lineHeight: 1.8,
                    color: "#2C2416",
                    marginBottom: 20,
                  }}
                >
                  {oracleQuote.text}
                </p>
                <footer
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#C4A76C",
                      background: "rgba(196,167,108,0.08)",
                      padding: "3px 10px",
                    }}
                  >
                    {oracleQuote.category}
                  </span>
                  <cite
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: "#B5A898",
                      fontStyle: "normal",
                    }}
                  >
                    {oracleQuote.source}
                  </cite>
                </footer>
              </blockquote>
            </div>
          )}
        </div>
      </section>

      {/* ── Divider ── */}
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div style={{ height: 1, background: "#E8E0D4" }} />
      </div>

      {/* ── Library Toggle ── */}
      <section
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "48px 32px 100px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: libraryOpen ? 48 : 0 }}>
          <button
            className={`library-toggle ${libraryOpen ? "open" : ""}`}
            onClick={() => setLibraryOpen(!libraryOpen)}
            aria-expanded={libraryOpen}
          >
            Browse Full Library ({quotes.length})
            <span className="chevron">▼</span>
          </button>
        </div>

        {libraryOpen && (
          <div className="section-enter">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#C4A76C",
                marginBottom: 12,
              }}
            >
              Collection
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(26px, 4vw, 36px)",
                fontWeight: 300,
                color: "#2C2416",
                marginBottom: 24,
              }}
            >
              Quotes &amp; Mungerisms
            </h2>

            {/* Search + Filters */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#B5A898",
                    fontSize: 14,
                  }}
                >
                  ⌕
                </span>
                <input
                  className="search-input"
                  placeholder="Search quotes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search quotes"
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 32,
              }}
              role="group"
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#B5A898",
                marginBottom: 24,
              }}
            >
              {filtered.length} quote{filtered.length !== 1 ? "s" : ""}
            </p>

            {/* Quote Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 20,
              }}
            >
              {filtered.map((q, i) => (
                <blockquote
                  key={i}
                  className="card"
                  style={{ padding: "28px 32px", position: "relative" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 16,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 48,
                      color: "#D4C9B8",
                      lineHeight: 1,
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "#2C2416",
                      paddingLeft: 24,
                      marginBottom: 16,
                    }}
                  >
                    {q.text}
                  </p>
                  <footer
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingLeft: 24,
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "#C4A76C",
                        background: "rgba(196,167,108,0.08)",
                        padding: "3px 10px",
                      }}
                    >
                      {q.category}
                    </span>
                    <cite
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#B5A898",
                        fontStyle: "normal",
                      }}
                    >
                      {q.source}
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
