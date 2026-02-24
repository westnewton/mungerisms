"use client";

import { useState } from "react";
import type { Quote } from "@/lib/data";

export default function QuotesClient({
  quotes,
  categories,
}: {
  quotes: Quote[];
  categories: string[];
}) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = quotes.filter((q) => {
    const matchCat = filter === "All" || q.category === filter;
    const matchSearch = !search || q.text.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="section-enter" style={{ maxWidth: 1000, margin: "0 auto", padding: "100px 32px 100px" }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#C4A76C", marginBottom: 12 }}>
        Collection
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300, color: "#2C2416", marginBottom: 24 }}>
        Quotes &amp; Mungerisms
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginBottom: 24 }}>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#B5A898", fontSize: 14 }}>⌕</span>
          <input
            className="search-input"
            placeholder="Search quotes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search quotes"
          />
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }} role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button key={cat} className={`category-btn ${filter === cat ? "active" : ""}`} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#B5A898", marginBottom: 24 }}>
        {filtered.length} quote{filtered.length !== 1 ? "s" : ""}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
        {filtered.map((q, i) => (
          <blockquote key={i} className="card" style={{ padding: "28px 32px", position: "relative" }}>
            <span style={{ position: "absolute", top: 12, left: 16, fontFamily: "'Cormorant Garamond', serif", fontSize: 48, color: "#D4C9B8", lineHeight: 1 }}>&ldquo;</span>
            <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 15, lineHeight: 1.75, color: "#2C2416", paddingLeft: 24, marginBottom: 16 }}>
              {q.text}
            </p>
            <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: 24, flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: "#C4A76C", background: "rgba(196,167,108,0.08)", padding: "3px 10px" }}>
                {q.category}
              </span>
              <cite style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#B5A898", fontStyle: "normal" }}>
                {q.source}
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
