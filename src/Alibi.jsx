import { useState, useRef } from "react";


const THREAT_LABELS = ["MINIMAL", "LOW", "MODERATE", "ELEVATED", "CRITICAL"];
const PLAUSIBILITY = [15, 35, 65, 85, 97];

const STYLES = `
  .memo {
    min-height: 100vh;
    background: #f4f1eb;
    color: #1a1a1a;
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 16px;
    line-height: 1.7;
    padding: 48px;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  /* Paper texture */
  .memo::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    opacity: 0.4;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='0.4' intercept='0.3'/%3E%3CfeFuncG type='linear' slope='0.4' intercept='0.3'/%3E%3CfeFuncB type='linear' slope='0.4' intercept='0.3'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    mix-blend-mode: multiply;
  }

  .memo > * { position: relative; z-index: 2; }

  /* ═══ CLASSIFIED STAMP ═══ */
  .memo-stamp {
    position: absolute;
    top: 60px;
    right: 48px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 0.25em;
    color: #c0392b;
    border: 3px solid #c0392b;
    padding: 6px 20px;
    transform: rotate(-6deg);
    opacity: 0.7;
    z-index: 3;
    user-select: none;
  }

  /* ═══ MEMO HEADER ═══ */
  .memo-header {
    border-bottom: 2px solid #1a1a1a;
    padding-bottom: 24px;
    margin-bottom: 32px;
  }

  .memo-org {
    font-size: 13px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 4px;
  }

  .memo-title {
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 2px;
    color: #1a1a1a;
  }

  .memo-subtitle {
    font-size: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #888;
  }

  /* ═══ MEMO FIELDS ═══ */
  .memo-fields {
    margin-bottom: 32px;
  }

  .memo-field {
    display: flex;
    gap: 0;
    padding: 8px 0;
    border-bottom: 1px solid #d5d0c8;
  }

  .memo-field-key {
    font-weight: 700;
    text-transform: uppercase;
    min-width: 140px;
    flex-shrink: 0;
    font-size: 15px;
    letter-spacing: 0.05em;
  }

  .memo-field-val {
    color: #444;
  }

  .memo-redacted {
    background: #1a1a1a;
    color: #1a1a1a;
    padding: 0 6px;
    user-select: none;
  }

  /* ═══ BODY TEXT ═══ */
  .memo-body {
    margin-bottom: 40px;
    color: #444;
  }

  .memo-body p {
    margin-bottom: 12px;
  }

  /* ═══ FORM — like a fill-in-the-blank ═══ */
  .memo-section-rule {
    border: none;
    border-top: 1px solid #1a1a1a;
    margin: 32px 0 24px;
  }

  .memo-section-label {
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  .memo-input-wrap {
    position: relative;
    margin-bottom: 4px;
  }

  .memo-input-label {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #888;
    margin-bottom: 4px;
  }

  .memo-input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #1a1a1a;
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 19px;
    line-height: 1.5;
    color: #1a1a1a;
    outline: none;
    resize: none;
    padding: 10px 0;
  }

  .memo-input::placeholder { color: #bbb; }

  .memo-btn {
    margin-top: 24px;
    padding: 12px 28px;
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #f4f1eb;
    background: #1a1a1a;
    border: 2px solid #1a1a1a;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .memo-btn:hover { background: #333; border-color: #333; }
  .memo-btn:disabled { opacity: 0.3; cursor: not-allowed; }

  .memo-spinner {
    width: 12px; height: 12px;
    border: 2px solid rgba(244, 241, 235, 0.4);
    border-top-color: #f4f1eb;
    border-radius: 50%;
    animation: memo-spin 0.7s linear infinite;
  }
  @keyframes memo-spin { to { transform: rotate(360deg); } }

  .memo-error {
    font-size: 14px;
    color: #c0392b;
    margin-top: 12px;
  }

  /* ═══ RESULTS — DOSSIER SECTION ═══ */
  .memo-dossier {
    animation: memo-fadeIn 0.4s ease;
  }

  @keyframes memo-fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .memo-dossier-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .memo-dossier-stamp {
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.15em;
    color: #c0392b;
    border: 1.5px solid #c0392b;
    padding: 2px 8px;
    transform: rotate(-1.5deg);
    display: inline-block;
  }

  .memo-subject-line {
    padding: 10px 0 20px;
    border-bottom: 1px solid #d5d0c8;
    margin-bottom: 24px;
    color: #444;
    font-style: italic;
    font-size: 17px;
  }

  /* Threat level */
  .memo-threat-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 28px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .memo-threat-key {
    font-weight: 700;
    color: #1a1a1a;
    flex-shrink: 0;
  }

  .memo-threat-bar {
    display: flex;
    gap: 2px;
  }

  .memo-threat-seg {
    width: 28px;
    height: 10px;
    background: #e0dbd3;
  }

  .memo-threat-seg.active-1 { background: #aaa; }
  .memo-threat-seg.active-2 { background: #888; }
  .memo-threat-seg.active-3 { background: #8B7D3C; }
  .memo-threat-seg.active-4 { background: #c0784b; }
  .memo-threat-seg.active-5 { background: #c0392b; }

  .memo-threat-val {
    font-weight: 700;
    color: #c0392b;
  }

  /* ═══ LEVEL ENTRIES ═══ */
  .memo-level {
    margin-bottom: 0;
    padding: 20px 0;
    border-bottom: 1px solid #d5d0c8;
    opacity: 0;
    animation: memo-typeIn 0.3s ease forwards;
    animation-delay: calc(var(--i) * 0.15s);
  }

  .memo-level:last-child { border-bottom: none; }

  @keyframes memo-typeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .memo-level-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 10px;
  }

  .memo-level-num {
    font-weight: 700;
    font-size: 24px;
    color: #1a1a1a;
    opacity: 0.2;
    min-width: 28px;
  }

  .memo-level-name {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a1a1a;
  }

  .memo-level-badge {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 2px 6px;
    border: 1px solid;
    margin-left: auto;
    flex-shrink: 0;
  }

  .memo-level-text {
    font-size: 15px;
    color: #444;
    padding-left: 44px;
    line-height: 1.8;
  }

  /* Plausibility */
  .memo-plaus {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 44px;
    margin-top: 12px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #888;
  }

  .memo-plaus-track {
    width: 100px;
    height: 5px;
    background: #e0dbd3;
  }

  .memo-plaus-fill {
    height: 100%;
    background: #1a1a1a;
    transition: width 0.5s ease;
    transition-delay: calc(var(--i) * 0.15s + 0.2s);
  }

  /* Footer */
  .memo-footer {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 2px solid #1a1a1a;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #aaa;
    display: flex;
    justify-content: space-between;
  }

  /* ═══ MOBILE ═══ */
  @media (max-width: 600px) {
    .memo { padding: 32px 20px; }
    .memo-stamp { top: 36px; right: 20px; font-size: 14px; padding: 4px 14px; }
    .memo-title { font-size: 24px; }
    .memo-field { flex-direction: column; gap: 0; }
    .memo-field-key { min-width: 0; }
    .memo-level-text { padding-left: 0; }
    .memo-plaus { padding-left: 0; }
    .memo-level-header { flex-wrap: wrap; gap: 8px; }
    .memo-level-badge { margin-left: 0; }
    .memo-footer { flex-direction: column; gap: 4px; }
    .memo-dossier-header { flex-direction: column; gap: 8px; }
  }
`;

function parseAlibi(text) {
  const levels = [];
  const regex = /LEVEL\s+(\d+)\s*[—\-]+\s*(.+?)\n([\s\S]*?)(?=LEVEL\s+\d|$)/gi;
  let match;
  while ((match = regex.exec(text)) !== null) {
    levels.push({
      num: parseInt(match[1], 10),
      name: match[2].trim(),
      excuse: match[3].trim(),
    });
  }
  return levels;
}

const BADGE_COLORS = ["#aaa", "#888", "#8B7D3C", "#c0784b", "#c0392b"];

export default function Alibi() {
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fileNo = useRef(`ALB-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`);

  async function generate() {
    if (!event.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/alibi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: event.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      const levels = parseAlibi(data.text);
      if (levels.length === 0) throw new Error("Couldn't parse response");
      setResult({ event: event.trim(), levels });
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <style>{STYLES}</style>
      <div className="memo">
        <div className="memo-stamp">CLASSIFIED</div>

        {/* Header */}
        <div className="memo-header">
          <div className="memo-org">Alibi Division — Internal Use Only</div>
          <h1 className="memo-title">What's Your Alibi?</h1>
          <div className="memo-subtitle">Excuse Generation Protocol v2.0</div>
        </div>

        {/* Memo fields */}
        <div className="memo-fields">
          <div className="memo-field">
            <span className="memo-field-key">Date:</span>
            <span className="memo-field-val">{today}</span>
          </div>
          <div className="memo-field">
            <span className="memo-field-key">File No.:</span>
            <span className="memo-field-val">{fileNo.current}</span>
          </div>
          <div className="memo-field">
            <span className="memo-field-key">To:</span>
            <span className="memo-field-val"><span className="memo-redacted">REDACTED</span></span>
          </div>
          <div className="memo-field">
            <span className="memo-field-key">From:</span>
            <span className="memo-field-val">Alibi Division, Excuse Architecture Dept.</span>
          </div>
          <div className="memo-field">
            <span className="memo-field-key">Re:</span>
            <span className="memo-field-val">Request for Plausible Deniability</span>
          </div>
          <div className="memo-field">
            <span className="memo-field-key">Clearance:</span>
            <span className="memo-field-val">Level 5 — Eyes Only</span>
          </div>
        </div>

        {/* Body */}
        <div className="memo-body">
          <p>
            Per your request, this office has been tasked with generating a series
            of alibis at escalating levels of commitment. Enter the event below
            and this department will produce five (5) options ranging from barely
            plausible to operationally airtight.
          </p>
        </div>

        {/* Form */}
        <hr className="memo-section-rule" />
        <div className="memo-section-label">Section A — Subject Event</div>

        <div className="memo-input-wrap">
          <div className="memo-input-label">Describe the event to be avoided:</div>
          <textarea
            className="memo-input"
            placeholder="My cousin's gender reveal party..."
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            rows={2}
          />
        </div>

        <button
          className="memo-btn"
          onClick={generate}
          disabled={loading || !event.trim()}
        >
          {loading ? (
            <>
              <span className="memo-spinner" />
              <span>Fabricating...</span>
            </>
          ) : (
            <span>Compile Dossier &rarr;</span>
          )}
        </button>

        {error && <div className="memo-error">[ERROR] {error}</div>}

        {/* Results */}
        {result && (
          <>
            <hr className="memo-section-rule" />
            <div className="memo-dossier">
              <div className="memo-dossier-header">
                <div className="memo-section-label">Section B — Generated Alibis</div>
                <span className="memo-dossier-stamp">CONFIDENTIAL</span>
              </div>

              <div className="memo-subject-line">
                RE: &ldquo;{result.event}&rdquo;
              </div>

              {/* Threat level */}
              <div className="memo-threat-row">
                <span className="memo-threat-key">Max Threat:</span>
                <div className="memo-threat-bar">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`memo-threat-seg${i <= result.levels.length ? ` active-${i}` : ""}`}
                    />
                  ))}
                </div>
                <span className="memo-threat-val">
                  {THREAT_LABELS[result.levels.length - 1]}
                </span>
              </div>

              {/* Level entries */}
              {result.levels.map((level) => {
                const idx = level.num - 1;
                const plaus = PLAUSIBILITY[idx] || 50;
                const badgeColor = BADGE_COLORS[idx];
                return (
                  <div
                    key={level.num}
                    className="memo-level"
                    style={{ "--i": level.num }}
                  >
                    <div className="memo-level-header">
                      <span className="memo-level-num">
                        {String(level.num).padStart(2, "0")}
                      </span>
                      <span className="memo-level-name">{level.name}</span>
                      <span
                        className="memo-level-badge"
                        style={{ color: badgeColor, borderColor: badgeColor }}
                      >
                        {THREAT_LABELS[idx]}
                      </span>
                    </div>
                    <div className="memo-level-text">{level.excuse}</div>
                    <div className="memo-plaus">
                      <span>Plausibility</span>
                      <div className="memo-plaus-track">
                        <div
                          className="memo-plaus-fill"
                          style={{ width: `${plaus}%`, "--i": level.num }}
                        />
                      </div>
                      <span>{plaus}%</span>
                    </div>
                  </div>
                );
              })}

              <div className="memo-footer">
                <span>This document is automatically declassified after 24 hours.</span>
                <span>{fileNo.current}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
