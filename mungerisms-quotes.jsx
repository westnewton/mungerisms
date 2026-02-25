import { useState, useEffect, useCallback } from "react";

const QUOTES = [
  { text: "Invert, always invert.", source: "Various speeches", category: "Thinking" },
  { text: "Spend each day trying to be a little wiser than you were when you woke up.", source: "Poor Charlie's Almanack", category: "Self-Improvement" },
  { text: "The best thing a human being can do is to help another human being know more.", source: "USC Law Commencement, 2007", category: "Wisdom" },
  { text: "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.", source: "Wesco Financial Annual Meeting", category: "Thinking" },
  { text: "Knowing what you don't know is more useful than being brilliant.", source: "Poor Charlie's Almanack", category: "Wisdom" },
  { text: "The big money is not in the buying and selling, but in the waiting.", source: "Berkshire Hathaway Annual Meeting", category: "Investing" },
  { text: "I never allow myself to have an opinion on anything that I don't know the other side's argument better than they do.", source: "Various", category: "Thinking" },
  { text: "Take a simple idea and take it seriously.", source: "Various speeches", category: "Wisdom" },
  { text: "I constantly see people rise in life who are not the smartest, sometimes not even the most diligent, but they are learning machines.", source: "USC Law Commencement, 2007", category: "Self-Improvement" },
  { text: "All I want to know is where I'm going to die so I'll never go there.", source: "Various", category: "Thinking" },
  { text: "Show me the incentive and I will show you the outcome.", source: "Various speeches", category: "Incentives" },
  { text: "The safest way to try to get what you want is to try to deserve what you want.", source: "USC Law Commencement, 2007", category: "Wisdom" },
  { text: "You must know the big ideas in the big disciplines, and use them routinely — all of them, not just a few.", source: "USC Business School, 1994", category: "Mental Models" },
  { text: "Mimicking the herd invites regression to the mean.", source: "Various", category: "Investing" },
  { text: "You don't have to be brilliant, only a little bit wiser than the other guys, on average, for a long, long time.", source: "Poor Charlie's Almanack", category: "Investing" },
  { text: "Wisdom acquisition is a moral duty.", source: "Poor Charlie's Almanack", category: "Self-Improvement" },
  { text: "The iron rule of nature is: you get what you reward for. If you want ants to come, you put sugar on the floor.", source: "Psychology of Human Misjudgment", category: "Incentives" },
  { text: "In my whole life, I have known no wise people who didn't read all the time — none, zero.", source: "Poor Charlie's Almanack", category: "Self-Improvement" },
  { text: "Acknowledging what you don't know is the dawning of wisdom.", source: "Various", category: "Wisdom" },
  { text: "The desire to get rich fast is pretty dangerous.", source: "Various", category: "Investing" },
  { text: "People calculate too much and think too little.", source: "Various", category: "Thinking" },
  { text: "If you want to guarantee misery, be unreliable.", source: "USC Law Commencement, 2007", category: "Wisdom" },
  { text: "We have a passion for keeping things simple.", source: "Wesco Financial Annual Meeting", category: "Investing" },
  { text: "It's not supposed to be easy. Anyone who finds it easy is stupid.", source: "Various", category: "Wisdom" },
];

const CATEGORIES = ["All", ...new Set(QUOTES.map(q => q.category))];

function App() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [quoteCount, setQuoteCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const generateQuote = useCallback(() => {
    setIsRevealing(true);
    setCopied(false);
    
    // Brief suspense before reveal
    setTimeout(() => {
      let next;
      do {
        next = Math.floor(Math.random() * QUOTES.length);
      } while (next === currentQuote && QUOTES.length > 1);
      
      setCurrentQuote(next);
      setHasGenerated(true);
      setQuoteCount(prev => prev + 1);
      setIsRevealing(false);
    }, 600);
  }, [currentQuote]);

  const copyQuote = () => {
    if (currentQuote === null) return;
    const q = QUOTES[currentQuote];
    navigator.clipboard.writeText(`"${q.text}" — Charlie Munger`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredQuotes = QUOTES.filter(q => {
    const matchCat = filter === "All" || q.category === filter;
    const matchSearch = !search || q.text.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{
      fontFamily: "'Libre Baskerville', 'Georgia', serif",
      background: "#FAF7F2",
      color: "#2C2416",
      minHeight: "100vh",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@300;400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::selection {
          background: #C4A76C;
          color: #FAF7F2;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .quote-reveal {
          animation: fadeInUp 0.5s ease-out both;
        }

        .thinking-dots span {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C4A76C;
          margin: 0 3px;
          animation: pulse 1.2s ease-in-out infinite;
        }
        .thinking-dots span:nth-child(2) { animation-delay: 0.2s; }
        .thinking-dots span:nth-child(3) { animation-delay: 0.4s; }

        .generate-btn {
          background: #2C2416;
          color: #FAF7F2;
          border: none;
          padding: 16px 40px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .generate-btn:hover {
          background: #3D3425;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(44, 36, 22, 0.15);
        }
        .generate-btn:active {
          transform: translateY(0);
        }
        .generate-btn:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .action-btn {
          background: none;
          border: 1px solid #D4C9B8;
          padding: 8px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #6B5D4F;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .action-btn:hover {
          border-color: #C4A76C;
          color: #2C2416;
        }

        .category-btn {
          background: none;
          border: 1px solid #D4C9B8;
          padding: 6px 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #6B5D4F;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .category-btn:hover, .category-btn.active {
          background: #2C2416;
          color: #FAF7F2;
          border-color: #2C2416;
        }

        .library-toggle {
          background: none;
          border: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #8B7355;
          cursor: pointer;
          padding: 12px 0;
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .library-toggle:hover {
          color: #2C2416;
        }

        .quote-card {
          background: #FFFFFF;
          border: 1px solid #E8E0D4;
          padding: 24px 28px;
          transition: all 0.3s ease;
          cursor: default;
        }
        .quote-card:hover {
          border-color: #C4A76C;
          box-shadow: 0 2px 12px rgba(139, 115, 85, 0.06);
        }

        .search-input {
          background: #FFFFFF;
          border: 1px solid #D4C9B8;
          padding: 10px 16px;
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          color: #2C2416;
          width: 100%;
          max-width: 320px;
          outline: none;
          transition: border-color 0.25s ease;
        }
        .search-input:focus {
          border-color: #C4A76C;
        }
        .search-input::placeholder {
          color: #B5A898;
        }

        .oracle-container {
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 48px 0;
        }

        .share-tooltip {
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 1px;
          color: #C4A76C;
          white-space: nowrap;
        }
      `}</style>

      {/* Oracle Section — The Hero */}
      <main style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "80px 32px 0",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#C4A76C",
          marginBottom: 12,
        }}>
          The Munger Oracle
        </p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 300,
          color: "#2C2416",
          marginBottom: 8,
        }}>
          Wisdom on Demand
        </h1>

        <p style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: 14,
          color: "#6B5D4F",
          marginBottom: 48,
          lineHeight: 1.7,
        }}>
          Ask Charlie for guidance. Each click delivers a pearl of wisdom<br />
          from nearly a century of clear thinking.
        </p>

        {/* The Oracle */}
        <div style={{
          borderTop: "1px solid #D4C9B8",
          borderBottom: "1px solid #D4C9B8",
          margin: "0 auto",
          maxWidth: 600,
        }}>
          <div className="oracle-container">
            {!hasGenerated && !isRevealing && (
              <div style={{ animation: "fadeInUp 0.5s ease-out" }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "#B5A898",
                  marginBottom: 8,
                }}>
                  "What would Charlie say?"
                </p>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "#D4C9B8",
                  letterSpacing: "1px",
                }}>
                  Press the button below to find out
                </p>
              </div>
            )}

            {isRevealing && (
              <div className="thinking-dots">
                <span />
                <span />
                <span />
              </div>
            )}

            {hasGenerated && !isRevealing && currentQuote !== null && (
              <div className="quote-reveal" key={quoteCount}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(20px, 3.5vw, 28px)",
                  fontStyle: "italic",
                  lineHeight: 1.55,
                  color: "#2C2416",
                  maxWidth: 540,
                  margin: "0 auto 20px",
                }}>
                  "{QUOTES[currentQuote].text}"
                </p>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#B5A898",
                  marginBottom: 4,
                }}>
                  — {QUOTES[currentQuote].source}
                </p>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#C4A76C",
                  background: "rgba(196,167,108,0.08)",
                  padding: "2px 10px",
                  display: "inline-block",
                  marginTop: 8,
                }}>
                  {QUOTES[currentQuote].category}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Generate Button */}
        <div style={{ marginTop: 32, marginBottom: 16 }}>
          <button
            className="generate-btn"
            onClick={generateQuote}
            disabled={isRevealing}
          >
            {!hasGenerated ? "Seek Wisdom" : "Another One"}
          </button>
        </div>

        {/* Action buttons — only show after first generate */}
        {hasGenerated && !isRevealing && (
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginBottom: 16,
            animation: "fadeInUp 0.4s ease-out 0.2s both",
            position: "relative",
          }}>
            <button className="action-btn" onClick={copyQuote}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
        )}

        {/* Counter */}
        {quoteCount > 0 && (
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#D4C9B8",
            letterSpacing: "1px",
            marginTop: 8,
            marginBottom: 64,
          }}>
            {quoteCount} {quoteCount === 1 ? "wisdom" : "wisdoms"} dispensed
          </p>
        )}

        {/* Divider */}
        <div style={{
          width: 60,
          height: 1,
          background: "#C4A76C",
          margin: "0 auto",
          marginTop: hasGenerated ? 0 : 64,
        }} />

        {/* Library Toggle */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 32,
          marginBottom: showLibrary ? 32 : 80,
        }}>
          <button
            className="library-toggle"
            onClick={() => setShowLibrary(!showLibrary)}
          >
            <span style={{
              display: "inline-block",
              transition: "transform 0.3s ease",
              transform: showLibrary ? "rotate(90deg)" : "rotate(0deg)",
            }}>
              →
            </span>
            {showLibrary ? "Hide Full Library" : `Browse All ${QUOTES.length} Quotes`}
          </button>
        </div>

        {/* Full Library */}
        {showLibrary && (
          <div style={{
            textAlign: "left",
            maxWidth: 720,
            margin: "0 auto",
            paddingBottom: 80,
            animation: "fadeInUp 0.4s ease-out",
          }}>
            {/* Filters */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
              marginBottom: 20,
            }}>
              <input
                className="search-input"
                placeholder="Search quotes..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 24,
            }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`category-btn ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#B5A898",
              marginBottom: 16,
              letterSpacing: "1px",
            }}>
              {filteredQuotes.length} quote{filteredQuotes.length !== 1 ? "s" : ""}
            </p>

            {/* Quote Cards */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}>
              {filteredQuotes.map((q, i) => (
                <div key={i} className="quote-card">
                  <p style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "#2C2416",
                    marginBottom: 12,
                  }}>
                    "{q.text}"
                  </p>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 8,
                  }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#C4A76C",
                      background: "rgba(196,167,108,0.08)",
                      padding: "2px 8px",
                    }}>
                      {q.category}
                    </span>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9,
                      color: "#B5A898",
                    }}>
                      {q.source}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #E8E0D4",
        padding: "32px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "1.5px",
          color: "#B5A898",
        }}>
          Mungerisms.com
        </p>
      </footer>
    </div>
  );
}

export default App;
