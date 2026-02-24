import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: 540, margin: "0 auto", padding: "180px 32px 100px", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#C4A76C",
          marginBottom: 20,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36,
          fontWeight: 300,
          color: "#2C2416",
          marginBottom: 16,
        }}
      >
        All I want to know is where I&rsquo;m going to die so I&rsquo;ll never go there.
      </h1>
      <p
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: 15,
          lineHeight: 1.8,
          color: "#6B5D4F",
          marginBottom: 32,
        }}
      >
        This page doesn&rsquo;t exist. But the wisdom you&rsquo;re looking for is probably on one of these:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
        {[
          { href: "/quotes", label: "Quotes & Mungerisms" },
          { href: "/mental-models", label: "Mental Models" },
          { href: "/speeches", label: "Speeches & Talks" },
          { href: "/books", label: "Books" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="ext-link"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
