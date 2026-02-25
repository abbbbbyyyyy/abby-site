import { useState, useEffect } from "react";
import LiquidText from "./LiquidText";

const STYLES = `
  .crux-app {
    min-height: 100vh;
    color: var(--text);
    font-family: 'Inter', -apple-system, sans-serif;
  }

  .crux-hero {
    text-align: center;
    padding: 60px 48px 48px;
    position: relative;
  }

  .crux-hero-label {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 28px;
    padding: 8px 20px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    backdrop-filter: blur(10px);
  }

  .crux-title {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(48px, 8vw, 80px);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
  }

  .liquid-word-wrap { display: inline-block; }
  .liquid-word { color: var(--text); font-style: italic; }

  .crux-subtitle {
    max-width: 440px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--text-dim);
  }

  .crux-tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 36px;
  }

  .crux-tab {
    padding: 10px 24px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dim);
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    backdrop-filter: blur(10px);
  }

  .crux-tab:hover { border-color: var(--purple); color: var(--text); }
  .crux-tab.active {
    background: linear-gradient(135deg, var(--purple) 0%, var(--indigo) 100%);
    color: white;
    border-color: transparent;
  }

  /* Form */
  .crux-form {
    max-width: 640px;
    margin: 0 auto;
    padding: 56px 48px 120px;
  }

  .form-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 28px;
  }

  .decision-input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid var(--glass-border);
    font-family: 'Instrument Serif', serif;
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.3;
    color: var(--text);
    outline: none;
    resize: none;
    padding: 20px 0;
    transition: border-color 0.3s;
  }

  .decision-input:focus { border-bottom-color: var(--purple); }
  .decision-input::placeholder { color: var(--text-faint); }

  .context-row {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 20px 0;
    border-bottom: 1px solid var(--glass-border);
  }

  .context-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
    white-space: nowrap;
    flex-shrink: 0;
    padding-top: 4px;
  }

  .context-input {
    flex: 1;
    background: none;
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: var(--text-dim);
    outline: none;
    resize: none;
    line-height: 1.7;
  }

  .context-input::placeholder { color: var(--text-faint); }

  .analyze-btn {
    margin-top: 32px;
    padding: 16px 32px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background: linear-gradient(135deg, var(--purple) 0%, var(--indigo) 100%);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
  }

  .analyze-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--indigo) 0%, var(--purple) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .analyze-btn span { position: relative; z-index: 1; }

  .analyze-btn:hover { transform: translateY(-2px); box-shadow: 0 20px 40px var(--glow); }
  .analyze-btn:hover::before { opacity: 1; }
  .analyze-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; box-shadow: none; }
  .analyze-btn:disabled::before { display: none; }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid rgba(255,255,255,0.2);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    position: relative;
    z-index: 1;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .error-text {
    font-family: 'Instrument Serif', serif;
    font-size: 15px;
    font-style: italic;
    color: #f87171;
    margin-top: 16px;
  }

  /* Results */
  .result-section {
    margin-top: 56px;
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .result-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .result-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--glass-border), transparent);
  }

  .result-question {
    font-family: 'Instrument Serif', serif;
    font-size: 20px;
    font-style: italic;
    color: var(--text-faint);
    margin-bottom: 32px;
    line-height: 1.5;
  }

  .analysis-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  @media(max-width: 560px) { .analysis-grid { grid-template-columns: 1fr; } }

  .analysis-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 28px;
    position: relative;
    overflow: hidden;
  }

  .analysis-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
  }

  .analysis-card.for-card::before {
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
    opacity: 0.6;
  }

  .analysis-card.against-card::before {
    background: linear-gradient(90deg, transparent, var(--blue), transparent);
    opacity: 0.6;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--glass-border);
  }

  .card-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .for-card .card-title { color: var(--purple); }
  .against-card .card-title { color: var(--blue); }

  .card-count {
    font-family: 'Instrument Serif', serif;
    font-size: 28px;
    font-weight: 400;
    color: var(--text);
    opacity: 0.1;
  }

  .point-item {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--text-dim);
    margin-bottom: 10px;
    display: flex;
    gap: 12px;
  }

  .point-dash {
    flex-shrink: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--purple);
    opacity: 0.5;
    margin-top: 9px;
  }

  /* Insight */
  .insight-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 28px 28px 28px 30px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }

  .insight-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--purple), var(--violet));
    border-radius: 1px;
  }

  .insight-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 12px;
  }

  .insight-text {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(17px, 2.2vw, 22px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    color: var(--text);
  }

  /* Verdict */
  .verdict-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 28px;
  }

  .verdict-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 20px;
  }

  .choice-btns { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }

  .choice-btn {
    padding: 10px 20px;
    border: 1px solid var(--glass-border);
    background: var(--glass);
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dim);
    cursor: pointer;
    border-radius: 100px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .choice-btn:hover { border-color: var(--purple); color: var(--text); }

  .choice-btn.yes.selected {
    background: linear-gradient(135deg, var(--purple), var(--indigo));
    color: white;
    border-color: transparent;
  }
  .choice-btn.no.selected {
    background: linear-gradient(135deg, var(--blue), var(--indigo));
    color: white;
    border-color: transparent;
  }
  .choice-btn.undecided.selected {
    background: var(--glass);
    color: var(--violet);
    border-color: var(--violet);
  }

  .notes-input {
    width: 100%;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 16px 20px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--text-dim);
    outline: none;
    resize: none;
    min-height: 56px;
    line-height: 1.7;
    margin-bottom: 20px;
    transition: border-color 0.3s;
  }

  .notes-input:focus { border-color: var(--purple); }
  .notes-input::placeholder { color: var(--text-faint); font-style: italic; }

  .save-btn {
    padding: 12px 24px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .save-btn:hover {
    border-color: var(--purple);
    color: var(--text);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
  }

  .saved-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--purple);
  }

  /* Archive */
  .archive-section {
    max-width: 640px;
    margin: 0 auto;
    padding: 56px 48px 120px;
  }

  .archive-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--glass-border);
  }

  .archive-title {
    font-family: 'Instrument Serif', serif;
    font-size: 32px;
    font-weight: 400;
    color: var(--text);
  }

  .archive-count {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-dim);
    padding: 6px 16px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    backdrop-filter: blur(10px);
  }

  .log-empty {
    padding: 80px 0;
    text-align: center;
    font-family: 'Instrument Serif', serif;
    font-size: 22px;
    font-style: italic;
    color: var(--text-faint);
  }

  .log-entry {
    border-bottom: 1px solid var(--glass-border);
    animation: fadeUp 0.3s ease;
  }

  .log-entry-header {
    padding: 24px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    transition: opacity 0.2s;
  }

  .log-entry-header:hover { opacity: 0.6; }

  .log-q {
    font-family: 'Instrument Serif', serif;
    font-size: 19px;
    font-style: italic;
    color: var(--text);
    flex: 1;
    line-height: 1.4;
  }

  .log-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

  .log-date {
    font-size: 12px;
    color: var(--text-faint);
  }

  .choice-tag {
    font-size: 11px;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 100px;
    border: 1px solid;
  }

  .choice-tag.yes { color: var(--purple); border-color: rgba(139, 92, 246, 0.3); background: rgba(139, 92, 246, 0.08); }
  .choice-tag.no { color: var(--blue); border-color: rgba(59, 130, 246, 0.3); background: rgba(59, 130, 246, 0.08); }
  .choice-tag.undecided { color: var(--violet); border-color: rgba(167, 139, 250, 0.3); background: rgba(167, 139, 250, 0.08); }

  .chevron {
    font-size: 12px;
    color: var(--text-faint);
    transition: transform 0.2s;
  }
  .chevron.open { transform: rotate(180deg); }

  .log-body {
    padding: 0 0 28px;
    animation: fadeUp 0.25s ease;
  }

  .log-mini-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 16px;
  }

  .log-mini-head {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .log-mini-head.for { color: var(--purple); }
  .log-mini-head.against { color: var(--blue); }

  .log-mini-item {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-faint);
    line-height: 1.7;
    margin-bottom: 6px;
    padding-left: 14px;
    position: relative;
  }

  .log-mini-item::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 9px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--purple);
    opacity: 0.4;
  }

  .log-insight {
    font-family: 'Instrument Serif', serif;
    font-size: 15px;
    font-style: italic;
    color: var(--text-faint);
    line-height: 1.7;
    margin-bottom: 12px;
    padding: 14px 18px;
    border-left: 2px solid rgba(139, 92, 246, 0.3);
    background: rgba(139, 92, 246, 0.03);
    border-radius: 0 12px 12px 0;
  }

  .log-notes {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-faint);
    font-style: italic;
    margin-bottom: 12px;
  }

  .delete-btn {
    background: none;
    border: none;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-faint);
    cursor: pointer;
    transition: color 0.2s;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  .delete-btn:hover { color: #f87171; }

  @media(max-width: 600px) {
    .crux-hero { padding: 40px 24px 32px; }
    .crux-form, .archive-section { padding: 36px 24px 80px; }
    .analysis-grid { grid-template-columns: 1fr; }
    .log-mini-grid { grid-template-columns: 1fr; }
    .analysis-card, .insight-card, .verdict-card { padding: 24px; border-radius: 16px; }
  }
`;

function parseAnalysis(text) {
  const pros = [], cons = [];
  let insight = "";
  const prosMatch = text.match(/pros[:\s]*\n?([\s\S]*?)(?=cons[:\s]|insight[:\s]|$)/i);
  const consMatch = text.match(/cons[:\s]*\n?([\s\S]*?)(?=insight[:\s]|$)/i);
  const insightMatch = text.match(/insight[:\s]*\n?([\s\S]*?)$/i);
  if (prosMatch) prosMatch[1].split('\n').forEach(l => { const c = l.replace(/^[-•*\d.]+\s*/, '').trim(); if (c) pros.push(c); });
  if (consMatch) consMatch[1].split('\n').forEach(l => { const c = l.replace(/^[-•*\d.]+\s*/, '').trim(); if (c) cons.push(c); });
  if (insightMatch) insight = insightMatch[1].trim();
  return { pros: pros.slice(0, 5), cons: cons.slice(0, 5), insight };
}

export default function Crux({ onHover }) {
  const [tab, setTab] = useState("decide");
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [choice, setChoice] = useState(null);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);
  const [log, setLog] = useState(() => {
    try {
      const stored = localStorage.getItem("crux-log");
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });
  const [expanded, setExpanded] = useState(null);

  const hover = onHover || (() => {});

  function refreshLog() {
    try {
      const stored = localStorage.getItem("crux-log");
      if (stored) setLog(JSON.parse(stored));
    } catch {}
  }

  function saveLog(nl) {
    try { localStorage.setItem("crux-log", JSON.stringify(nl)); } catch {}
  }

  async function analyze() {
    if (!question.trim()) return;
    setLoading(true); setResult(null); setError(null); setChoice(null); setNotes(""); setSaved(false);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.trim(),
          context: context.trim()
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setResult({ question: question.trim(), ...parseAnalysis(data.text) });
    } catch { setError("Something went wrong. Try again."); }
    finally { setLoading(false); }
  }

  async function handleSave() {
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      question: result.question, pros: result.pros, cons: result.cons,
      insight: result.insight, choice: choice || "undecided", notes: notes.trim()
    };
    const nl = [entry, ...log];
    setLog(nl); await saveLog(nl); setSaved(true);
  }

  async function del(id) {
    const nl = log.filter(e => e.id !== id);
    setLog(nl); await saveLog(nl);
    if (expanded === id) setExpanded(null);
  }

  const choiceLabel = c => ({ yes: "Going for it", no: "Passing", undecided: "Still deciding" }[c] || c);
  const tagClass = c => ({ yes: "yes", no: "no" }[c] || "undecided");

  return (
    <>
      <style>{STYLES}</style>
      <div className="crux-app">

        <div className="crux-hero">
          <div className="crux-hero-label">AI Decision Analysis</div>
          <h1 className="crux-title">
            The <span className="liquid-word-wrap"><LiquidText text="decisive" className="liquid-word" /></span> point.
          </h1>
          <p className="crux-subtitle">
            Name the real tension. Decide. Move on. No frameworks, no scores, just clarity when you're stuck.
          </p>
          <div className="crux-tabs">
            <button
              className={`crux-tab ${tab === "decide" ? "active" : ""}`}
              onClick={() => setTab("decide")}
              onMouseEnter={() => hover(true)}
              onMouseLeave={() => hover(false)}
            >
              Analyze
            </button>
            <button
              className={`crux-tab ${tab === "log" ? "active" : ""}`}
              onClick={() => { setTab("log"); refreshLog(); }}
              onMouseEnter={() => hover(true)}
              onMouseLeave={() => hover(false)}
            >
              Archive{log.length > 0 ? ` (${log.length})` : ""}
            </button>
          </div>
        </div>

        {tab === "decide" && (
          <div className="crux-form">
            <div className="form-label">New Analysis</div>

            <textarea
              className="decision-input"
              placeholder="State your decision..."
              value={question}
              onChange={e => setQuestion(e.target.value)}
              rows={2}
            />

            <div className="context-row">
              <span className="context-label">Context</span>
              <textarea
                className="context-input"
                placeholder="Stakes, constraints, what you already know..."
                value={context}
                onChange={e => setContext(e.target.value)}
                rows={2}
              />
            </div>

            <button
              className="analyze-btn"
              onClick={analyze}
              disabled={loading || !question.trim()}
              onMouseEnter={() => hover(true)}
              onMouseLeave={() => hover(false)}
            >
              {loading
                ? <><span className="spinner" /><span>Analyzing...</span></>
                : <span>Analyze →</span>
              }
            </button>

            {error && <div className="error-text">{error}</div>}

            {result && (
              <div className="result-section">
                <div className="result-label">Analysis complete</div>
                <div className="result-question">"{result.question}"</div>

                <div className="analysis-grid">
                  <div className="analysis-card for-card">
                    <div className="card-header">
                      <div className="card-title">For it</div>
                      <div className="card-count">{result.pros.length}</div>
                    </div>
                    {result.pros.map((p, i) => (
                      <div key={i} className="point-item">
                        <span className="point-dash" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="analysis-card against-card">
                    <div className="card-header">
                      <div className="card-title">Against it</div>
                      <div className="card-count">{result.cons.length}</div>
                    </div>
                    {result.cons.map((c, i) => (
                      <div key={i} className="point-item">
                        <span className="point-dash" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {result.insight && (
                  <div className="insight-card">
                    <div className="insight-label">Real tension</div>
                    <div className="insight-text">{result.insight}</div>
                  </div>
                )}

                <div className="verdict-card">
                  <div className="verdict-title">Your verdict</div>
                  <div className="choice-btns">
                    {["yes", "no", "undecided"].map(c => (
                      <button
                        key={c}
                        className={`choice-btn ${c} ${choice === c ? "selected" : ""}`}
                        onClick={() => setChoice(c)}
                        onMouseEnter={() => hover(true)}
                        onMouseLeave={() => hover(false)}
                      >
                        {choiceLabel(c)}
                      </button>
                    ))}
                  </div>
                  <textarea
                    className="notes-input"
                    placeholder="Notes on your reasoning..."
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  />
                  {saved
                    ? <div className="saved-label">Saved to archive ✓</div>
                    : <button
                        className="save-btn"
                        onClick={handleSave}
                        onMouseEnter={() => hover(true)}
                        onMouseLeave={() => hover(false)}
                      >
                        Save to archive →
                      </button>
                  }
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "log" && (
          <div className="archive-section">
            <div className="archive-header">
              <div className="archive-title">Archive</div>
              <div className="archive-count">{log.length} logged</div>
            </div>
            {log.length === 0
              ? <div className="log-empty">Nothing archived yet.</div>
              : log.map(entry => (
                <div key={entry.id} className="log-entry">
                  <div
                    className="log-entry-header"
                    onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}
                  >
                    <div className="log-q">"{entry.question}"</div>
                    <div className="log-right">
                      <span className="log-date">{entry.date}</span>
                      <span className={`choice-tag ${tagClass(entry.choice)}`}>{choiceLabel(entry.choice)}</span>
                      <span className={`chevron ${expanded === entry.id ? "open" : ""}`}>▾</span>
                    </div>
                  </div>
                  {expanded === entry.id && (
                    <div className="log-body">
                      <div className="log-mini-grid">
                        <div>
                          <div className="log-mini-head for">For</div>
                          {entry.pros.map((p, i) => <div key={i} className="log-mini-item">{p}</div>)}
                        </div>
                        <div>
                          <div className="log-mini-head against">Against</div>
                          {entry.cons.map((c, i) => <div key={i} className="log-mini-item">{c}</div>)}
                        </div>
                      </div>
                      {entry.insight && <div className="log-insight">"{entry.insight}"</div>}
                      {entry.notes && <div className="log-notes">Notes: "{entry.notes}"</div>}
                      <button
                        className="delete-btn"
                        onClick={() => del(entry.id)}
                        onMouseEnter={() => hover(true)}
                        onMouseLeave={() => hover(false)}
                      >
                        Remove entry
                      </button>
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        )}
      </div>
    </>
  );
}
