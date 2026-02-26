import { useState, useEffect, useRef, useCallback } from "react";
import { canMakeApiCall, recordApiCall } from "./rateLimit";

const TOTAL_TIME = 12;

const STYLES = `
  .gc {
    min-height: 100vh;
    background: #0a0a0a;
    color: #00ff41;
    font-family: 'Space Mono', monospace;
    position: relative;
    overflow: hidden;
    padding: 80px 24px 48px;
  }

  /* CRT scanlines */
  .gc::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    );
    pointer-events: none;
    z-index: 10;
  }

  /* CRT vignette */
  .gc::after {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.6) 100%);
    pointer-events: none;
    z-index: 10;
  }

  .gc-inner {
    max-width: 680px;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    text-align: center;
  }

  /* Blinking cursor */
  @keyframes gcBlink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .gc-cursor {
    animation: gcBlink 1s step-end infinite;
  }

  /* Loading dots */
  @keyframes gcDots {
    0% { content: '.'; }
    33% { content: '..'; }
    66% { content: '...'; }
  }

  .gc-dots::after {
    content: '.';
    animation: gcDots 1.5s step-end infinite;
  }

  /* ── INTRO ── */
  .gc-bracket {
    font-size: 12px;
    letter-spacing: 0.3em;
    color: rgba(0, 255, 65, 0.4);
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .gc-title {
    font-family: 'Space Mono', monospace;
    font-size: clamp(36px, 8vw, 64px);
    font-weight: 700;
    color: #00ff41;
    line-height: 1.1;
    margin-bottom: 16px;
    text-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  }

  .gc-tagline {
    font-size: 17px;
    color: rgba(0, 255, 65, 0.6);
    margin-bottom: 40px;
    font-style: italic;
  }

  .gc-desc {
    font-size: 15px;
    line-height: 1.8;
    color: rgba(0, 255, 65, 0.55);
    margin-bottom: 48px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  .gc-desc p {
    margin-bottom: 16px;
  }

  .gc-begin {
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    font-weight: 700;
    color: #0a0a0a;
    background: #00ff41;
    border: none;
    padding: 16px 40px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.2s;
  }

  .gc-begin:hover {
    background: #33ff66;
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
  }

  /* ── LOADING ── */
  .gc-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
  }

  .gc-loading-text {
    font-size: 14px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(0, 255, 65, 0.7);
  }

  /* ── PLAYING ── */
  .gc-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(0, 255, 65, 0.5);
  }

  .gc-progress-bar {
    width: 100%;
    height: 2px;
    background: rgba(0, 255, 65, 0.1);
    margin-bottom: 48px;
    border-radius: 1px;
    overflow: hidden;
  }

  .gc-progress-fill {
    height: 100%;
    background: #00ff41;
    transition: width 0.3s ease;
  }

  .gc-scenario {
    font-size: clamp(18px, 4vw, 24px);
    line-height: 1.6;
    color: #00ff41;
    margin-bottom: 40px;
    text-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
  }

  .gc-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
    align-items: center;
  }

  .gc-option {
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    text-align: center;
    padding: 16px 20px;
    width: 100%;
    background: rgba(0, 255, 65, 0.04);
    border: 1px solid rgba(0, 255, 65, 0.15);
    color: rgba(0, 255, 65, 0.7);
    cursor: pointer;
    transition: all 0.15s;
    line-height: 1.5;
  }

  .gc-option:hover {
    background: rgba(0, 255, 65, 0.1);
    border-color: #00ff41;
    color: #00ff41;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.1);
  }

  .gc-option-label {
    color: #00ff41;
    font-weight: 700;
    margin-right: 8px;
  }

  /* Timer */
  .gc-timer {
    margin-bottom: 8px;
  }

  .gc-timer-bar-wrap {
    width: 100%;
    height: 6px;
    background: rgba(0, 255, 65, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .gc-timer-bar {
    height: 100%;
    border-radius: 3px;
    transition: width 0.1s linear;
  }

  .gc-timer-text {
    font-size: 11px;
    letter-spacing: 0.15em;
    text-align: center;
  }

  /* ── TRANSITION ── */
  @keyframes gcFlash {
    0% { opacity: 0; }
    10% { opacity: 0.15; }
    100% { opacity: 0; }
  }

  .gc-flash {
    position: fixed;
    inset: 0;
    background: #00ff41;
    pointer-events: none;
    z-index: 20;
    animation: gcFlash 0.3s ease-out;
  }

  /* ── RESULTS ── */
  .gc-results {
    min-height: 60vh;
  }

  .gc-result-label {
    font-size: 12px;
    letter-spacing: 0.3em;
    color: rgba(0, 255, 65, 0.4);
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .gc-profile {
    font-size: clamp(28px, 6vw, 48px);
    font-weight: 700;
    color: #00ff41;
    margin-bottom: 32px;
    text-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
    line-height: 1.2;
  }

  .gc-result-section {
    margin-bottom: 32px;
  }

  .gc-result-heading {
    font-size: 11px;
    letter-spacing: 0.25em;
    color: rgba(0, 255, 65, 0.4);
    text-transform: uppercase;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 255, 65, 0.1);
  }

  .gc-result-text {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(0, 255, 65, 0.8);
  }

  .gc-result-list {
    list-style: none;
    padding: 0;
  }

  .gc-result-list li {
    font-size: 13px;
    line-height: 1.7;
    color: rgba(0, 255, 65, 0.7);
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 255, 65, 0.05);
  }

  .gc-result-list li::before {
    content: '> ';
    color: #00ff41;
  }

  .gc-blind-spot {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(0, 255, 65, 0.6);
    font-style: italic;
    padding: 20px;
    border-left: none;
    border-top: 1px solid rgba(0, 255, 65, 0.15);
    border-bottom: 1px solid rgba(0, 255, 65, 0.15);
    background: rgba(0, 255, 65, 0.02);
  }

  .gc-restart {
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    font-weight: 700;
    color: #0a0a0a;
    background: #00ff41;
    border: none;
    padding: 14px 32px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 40px;
    transition: all 0.2s;
  }

  .gc-restart:hover {
    background: #33ff66;
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
  }

  /* ── MOBILE ── */
  @media (max-width: 600px) {
    .gc { padding: 72px 16px 32px; }
    .gc-title { font-size: 32px; }
    .gc-scenario { font-size: 17px; }
    .gc-option { padding: 14px 16px; font-size: 13px; min-height: 48px; }
    .gc-profile { font-size: 28px; }
  }
`;

function parseResults(text) {
  const profile = text.match(/PROFILE:\s*(.+)/)?.[1]?.trim() || "Unknown";
  const summary = text.match(/SUMMARY:\s*([\s\S]*?)(?=\nPATTERNS:)/)?.[1]?.trim() || "";
  const patternsBlock = text.match(/PATTERNS:\s*([\s\S]*?)(?=\nBLIND SPOT:)/)?.[1]?.trim() || "";
  const patterns = patternsBlock
    .split('\n')
    .map(l => l.replace(/^-\s*/, '').trim())
    .filter(Boolean);
  const blindSpot = text.match(/BLIND SPOT:\s*([\s\S]*)/)?.[1]?.trim() || "";
  return { profile, summary, patterns, blindSpot };
}

export default function GutCheck() {
  const [phase, setPhase] = useState("intro");
  const [scenarios, setScenarios] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [results, setResults] = useState(null);
  const [showFlash, setShowFlash] = useState(false);
  const [error, setError] = useState(null);
  const timerRef = useRef(null);
  const advancingRef = useRef(false);

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Start timer when playing
  useEffect(() => {
    if (phase !== "playing") return;
    setTimeLeft(TOTAL_TIME);
    advancingRef.current = false;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const next = Math.round((prev - 0.1) * 10) / 10;
        if (next <= 0) {
          clearInterval(timerRef.current);
          return 0;
        }
        return next;
      });
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, currentIndex]);

  // Handle timeout
  useEffect(() => {
    if (phase !== "playing" || timeLeft > 0 || advancingRef.current) return;
    advancingRef.current = true;

    const current = scenarios[currentIndex];
    const newResponse = {
      scenario: current.scenario,
      options: current.options,
      chosenOption: null,
      chosenLabel: null,
      timeLeft: 0,
      timedOut: true,
    };

    advance(newResponse);
  }, [timeLeft, phase]);

  const advance = useCallback((newResponse) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const newResponses = [...responses, newResponse];
    setResponses(newResponses);
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 300);

    if (newResponses.length >= scenarios.length) {
      setTimeout(() => {
        setPhase("analyzing");
        analyzeResponses(newResponses);
      }, 400);
    } else {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 400);
    }
  }, [responses, scenarios]);

  const handleSelect = useCallback((optionKey) => {
    if (advancingRef.current) return;
    advancingRef.current = true;

    const current = scenarios[currentIndex];
    const newResponse = {
      scenario: current.scenario,
      options: current.options,
      chosenOption: optionKey,
      chosenLabel: current.options[optionKey],
      timeLeft,
      timedOut: false,
    };

    advance(newResponse);
  }, [scenarios, currentIndex, timeLeft, advance]);

  const startGame = async () => {
    if (!canMakeApiCall()) {
      setError("Daily limit reached — come back tomorrow.");
      return;
    }
    setPhase("loading");
    setError(null);
    try {
      const res = await fetch("/api/gutcheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "generate" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate");
      recordApiCall();
      setScenarios(data.scenarios);
      setCurrentIndex(0);
      setResponses([]);
      setPhase("playing");
    } catch (err) {
      setError(err.message);
      setPhase("intro");
    }
  };

  const analyzeResponses = async (allResponses) => {
    if (!canMakeApiCall()) {
      setError("Daily limit reached — come back tomorrow.");
      setPhase("results");
      setResults({ profile: "LIMIT REACHED", summary: "Daily limit reached — come back tomorrow.", patterns: [], blindSpot: "" });
      return;
    }
    try {
      const res = await fetch("/api/gutcheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "analyze", responses: allResponses }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to analyze");
      recordApiCall();
      setResults(parseResults(data.text));
      setPhase("results");
    } catch (err) {
      setError(err.message);
      setPhase("results");
      setResults({ profile: "ERROR", summary: err.message, patterns: [], blindSpot: "" });
    }
  };

  const restart = () => {
    setPhase("intro");
    setScenarios([]);
    setCurrentIndex(0);
    setResponses([]);
    setResults(null);
    setError(null);
  };

  // Timer color
  const timerPct = timeLeft / TOTAL_TIME;
  const timerColor = timerPct > 0.5 ? "#00ff41" : timerPct > 0.25 ? "#ffcc00" : "#ff3333";

  return (
    <>
      <style>{STYLES}</style>
      <div className="gc">
        {showFlash && <div className="gc-flash" />}
        <div className="gc-inner">

          {/* ── INTRO ── */}
          {phase === "intro" && (
            <>
              <div className="gc-bracket">[GUT CHECK]</div>
              <h1 className="gc-title">
                GUT CHECK<span className="gc-cursor">_</span>
              </h1>
              <p className="gc-tagline">A personality test disguised as a game.</p>
              <div className="gc-desc">
                <p>
                  10 scenarios. 12 seconds each. No time to overthink —
                  just react. Your gut knows things your brain won't admit.
                </p>
                <p>
                  When you're done, an AI psychologist analyzes your
                  snap decisions using real behavioral frameworks. It's
                  uncomfortably accurate.
                </p>
              </div>
              {error && (
                <p style={{ color: "#ff3333", fontSize: 13, marginBottom: 24 }}>
                  ERROR: {error}
                </p>
              )}
              <button className="gc-begin" onClick={startGame}>
                {">"} BEGIN<span className="gc-cursor">_</span>
              </button>
            </>
          )}

          {/* ── LOADING ── */}
          {phase === "loading" && (
            <div className="gc-loading">
              <p className="gc-loading-text">
                GENERATING SCENARIOS<span className="gc-dots" />
              </p>
            </div>
          )}

          {/* ── PLAYING ── */}
          {phase === "playing" && scenarios[currentIndex] && (
            <>
              <div className="gc-header">
                <span>{">"} SCENARIO {String(currentIndex + 1).padStart(2, '0')}/{String(scenarios.length).padStart(2, '0')}</span>
              </div>
              <div className="gc-progress-bar">
                <div
                  className="gc-progress-fill"
                  style={{ width: `${((currentIndex) / scenarios.length) * 100}%` }}
                />
              </div>

              <div className="gc-timer">
                <div className="gc-timer-bar-wrap">
                  <div
                    className="gc-timer-bar"
                    style={{
                      width: `${timerPct * 100}%`,
                      background: timerColor,
                      boxShadow: `0 0 8px ${timerColor}`,
                    }}
                  />
                </div>
                <div className="gc-timer-text" style={{ color: timerColor }}>
                  {timeLeft.toFixed(1)}s
                </div>
              </div>

              <div className="gc-scenario">
                {scenarios[currentIndex].scenario}<span className="gc-cursor">_</span>
              </div>

              <div className="gc-options">
                {["A", "B", "C", "D"].map(key => (
                  <button
                    key={key}
                    className="gc-option"
                    onClick={() => handleSelect(key)}
                  >
                    <span className="gc-option-label">[{key}]</span>
                    {scenarios[currentIndex].options[key]}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── ANALYZING ── */}
          {phase === "analyzing" && (
            <div className="gc-loading">
              <p className="gc-loading-text">
                ANALYZING RESPONSE PATTERNS<span className="gc-dots" />
              </p>
            </div>
          )}

          {/* ── RESULTS ── */}
          {phase === "results" && results && (
            <div className="gc-results">
              <div className="gc-result-label">[ANALYSIS COMPLETE]</div>
              <div className="gc-profile">
                {results.profile}<span className="gc-cursor">_</span>
              </div>

              <div className="gc-result-section">
                <div className="gc-result-heading">// Summary</div>
                <p className="gc-result-text">{results.summary}</p>
              </div>

              <div className="gc-result-section">
                <div className="gc-result-heading">// Patterns</div>
                <ul className="gc-result-list">
                  {results.patterns.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="gc-result-section">
                <div className="gc-result-heading">// Blind Spot</div>
                <div className="gc-blind-spot">{results.blindSpot}</div>
              </div>

              <button className="gc-restart" onClick={restart}>
                {">"} RUN AGAIN<span className="gc-cursor">_</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
