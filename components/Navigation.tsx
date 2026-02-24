"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Quotes", href: "/quotes" },
  { label: "Mental Models", href: "/mental-models" },
  { label: "Timeline", href: "/timeline" },
  { label: "Speeches", href: "/speeches" },
  { label: "Books", href: "/books" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(250,247,242,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E8E0D4",
      }}
    >
      <nav
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "14px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 600,
              color: "#2C2416",
              letterSpacing: "-0.3px",
            }}
          >
            Mungerisms
          </span>
        </Link>

        <div
          className="nav-items"
          style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
