'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Quotes', href: '/quotes' },
  { label: 'Mental Models', href: '/mental-models' },
  { label: 'Cognitive Biases', href: '/cognitive-biases' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Speeches', href: '/speeches' },
  { label: 'Books', href: '/books' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
            Mungerisms
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger button */}
          <button
            className={`hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="mobile-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile slide-out menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <Link
            href="/"
            className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${pathname === item.href ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <p>Mungerisms.com</p>
          <p className="mobile-menu-tagline">The wisdom of Charlie Munger</p>
        </div>
      </div>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(250, 247, 242, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #E8E0D4;
        }

        .header-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: #2C2416;
          text-decoration: none;
          letter-spacing: -0.3px;
          flex-shrink: 0;
        }

        /* ── Desktop Nav ── */
        .desktop-nav {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .nav-link {
          color: #6B5D4F;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 300;
          padding: 6px 0;
          position: relative;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #2C2416;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #C4A76C;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          margin-right: -8px;
          z-index: 200;
          width: 40px;
          height: 40px;
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #2C2416;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(4.5px, 4.5px);
        }

        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(4.5px, -4.5px);
        }

        /* ── Mobile Overlay ── */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(44, 36, 22, 0.3);
          z-index: 150;
          animation: fadeIn 0.2s ease;
        }

        /* ── Mobile Menu ── */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          max-width: 80vw;
          height: 100vh;
          height: 100dvh;
          background: #FAF7F2;
          z-index: 160;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-left: 1px solid #E8E0D4;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 80px 32px 32px;
          gap: 0;
        }

        .mobile-nav-link {
          color: #6B5D4F;
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          font-weight: 300;
          padding: 16px 0;
          border-bottom: 1px solid #E8E0D4;
          transition: color 0.2s ease;
        }

        .mobile-nav-link:first-child {
          border-top: 1px solid #E8E0D4;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #2C2416;
        }

        .mobile-nav-link.active {
          position: relative;
        }

        .mobile-nav-link.active::before {
          content: '';
          position: absolute;
          left: -32px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 16px;
          background: #C4A76C;
        }

        .mobile-menu-footer {
          padding: 24px 32px;
          border-top: 1px solid #E8E0D4;
        }

        .mobile-menu-footer p {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          color: #B5A898;
        }

        .mobile-menu-tagline {
          margin-top: 4px;
          font-style: italic;
          font-family: 'Libre Baskerville', serif !important;
          letter-spacing: 0 !important;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ── Responsive breakpoints ── */

        /* Hide hamburger on desktop, show nav */
        @media (min-width: 901px) {
          .hamburger {
            display: none !important;
          }
          .mobile-menu,
          .mobile-overlay {
            display: none !important;
          }
        }

        /* Show hamburger on tablet/mobile, hide desktop nav */
        @media (max-width: 900px) {
          .hamburger {
            display: flex;
          }
          .desktop-nav {
            display: none;
          }
        }

        /* Adjust header padding on small screens */
        @media (max-width: 480px) {
          .header-inner {
            padding: 14px 16px;
          }
          .logo {
            font-size: 20px;
          }
          .mobile-nav {
            padding: 72px 24px 24px;
          }
          .mobile-nav-link.active::before {
            left: -24px;
          }
          .mobile-menu-footer {
            padding: 20px 24px;
          }
        }
      `}</style>
    </>
  );
}
