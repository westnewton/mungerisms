export default function HomePage() {
  return (
    <main className="hero-section" style={{ maxWidth: 720, margin: "0 auto", padding: "130px 32px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Silhouette background */}
      <img
        src="/CharlieMungerBust.png"
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "clamp(280px, 40vw, 420px)",
          height: "auto",
          opacity: 0.12,
          filter: "invert(1)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content layer */}
      <div style={{ position: "relative", zIndex: 1 }}>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#7A6E60",
          marginBottom: 20,
        }}
      >
        The Collected Wisdom of
      </p>

      <h1
        className="hero-title"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(44px, 8vw, 76px)",
          fontWeight: 300,
          lineHeight: 1.05,
          color: "#2C2416",
          marginBottom: 12,
        }}
      >
        Charlie Munger
      </h1>

      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "2.5px",
          color: "#7A6E60",
          marginBottom: 64,
        }}
      >
        1924 — 2023
      </p>

      {/* Featured Quote */}
      <div
        style={{
          borderTop: "1px solid #D4C9B8",
          borderBottom: "1px solid #D4C9B8",
          padding: "48px 0",
          marginBottom: 100,
        }}
      >
        <p
          className="quote-rotator-text"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(20px, 3.2vw, 28px)",
            fontStyle: "italic",
            lineHeight: 1.55,
            color: "#2C2416",
            maxWidth: 580,
            margin: "0 auto 20px",
          }}
        >
          &ldquo;Spend each day trying to be a little wiser than you were when you woke up.&rdquo;
        </p>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#7A6E60",
          }}
        >
          — Poor Charlie&rsquo;s Almanack
        </p>
      </div>

      {/* Divider */}
      <div style={{ width: 60, height: 1, background: "#C4A76C", margin: "0 auto" }} />

      {/* Editor's Note */}
      <section className="editor-note" style={{ maxWidth: 540, margin: "0 auto", padding: "48px 0 100px", textAlign: "left" }}>
        <h2
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#C4A76C",
            marginBottom: 20,
          }}
        >
          A Note from the Editor
        </h2>

        <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 15, lineHeight: 1.9, color: "#3D3425" }}>
          <p style={{ marginBottom: 20 }}>
            Charlie Munger spent nearly a century collecting wisdom — from books, from mistakes, from
            disciplines most people never think to study. He gave it away freely, in shareholder meetings
            and commencement speeches and offhand remarks that somehow cut deeper than whole libraries on
            the same subject.
          </p>
          <p style={{ marginBottom: 20 }}>
            When he passed in November 2023, I realized how scattered it all was. A quote here, a speech
            transcript there, fragments of a remarkable mind spread across the internet with no single
            place to find it all.
          </p>
          <p style={{ marginBottom: 20 }}>
            Mungerisms is my attempt to fix that — a reference library to collect, organize, and preserve
            everything Charlie taught us about thinking clearly, investing wisely, and living well. The
            quotes, the mental models, the speeches, the life. All in one place.
          </p>
          <p>
            Charlie believed wisdom acquisition was a moral duty. Consider this a small contribution to
            that cause.
          </p>
          <p style={{ marginTop: 40, fontStyle: "italic", color: "#4A3F32", fontSize: 14 }}>
            — Jason Nista, Editor
          </p>
        </div>
      </section>
      </div>
    </main>
  );
}
