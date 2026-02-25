import { useState, useEffect } from "react";

const STYLES = `
  .crux-app {
    min-height: 100vh;
    background: var(--bg);
    color: var(--white);
    font-family: 'Space Grotesk', sans-serif;
    overflow-x: hidden;
  }

  /* ── TICKER ── */
  .ticker-wrap {
    overflow: hidden;
    background: var(--indigo);
    height: 32px;
    display: flex;
    align-items: center;
  }

  .ticker-track {
    display: flex;
    animation: ticker 24s linear infinite;
    white-space: nowrap;
  }

  .ticker-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(237,232,240,0.7);
  }

  .ticker-dot {
    width: 3px; height: 3px;
    border-radius: 50%;
    background: rgba(237,232,240,0.4);
    flex-shrink: 0;
  }

  @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* ── CRUX NAV ── */
  .crux-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 40px;
    border-bottom: 1px solid var(--rule);
  }

  .crux-brand {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 0.04em;
    color: var(--white);
  }

  .crux-brand em {
    font-style: italic;
    color: var(--slate);
  }

  .crux-links { display: flex; align-items: center; gap: 6px; }

  .crux-link {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--mid);
    cursor: pointer;
    background: none;
    border: 1px solid transparent;
    font-family: 'Space Grotesk', sans-serif;
    transition: all 0.2s;
    padding: 7px 14px;
  }

  .crux-link:hover { color: var(--white); border-color: var(--rule); }
  .crux-link.active {
    color: var(--slate);
    border-color: var(--slate-dim);
    background: rgba(136,136,204,0.06);
  }

  /* ── HERO ── */
  .crux-hero {
    padding: 52px 40px 0;
    border-bottom: 1px solid var(--rule);
    position: relative;
    overflow: hidden;
  }

  .crux-hero::before {
    content: '';
    position: absolute;
    top: -60px; left: -80px;
    width: 500px; height: 400px;
    background: radial-gradient(ellipse, rgba(46,46,106,0.35) 0%, transparent 70%);
    pointer-events: none;
  }

  .crux-hero-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 22px;
    position: relative;
  }

  .crux-flag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--slate-dim);
    padding: 5px 12px;
    background: rgba(136,136,204,0.05);
  }

  .crux-flag-text {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--slate);
  }

  .crux-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(62px, 10vw, 118px);
    font-weight: 900;
    line-height: 0.88;
    letter-spacing: -0.025em;
    position: relative;
    z-index: 1;
  }

  .line-1 { display: block; color: var(--white); }
  .line-2 {
    display: block;
    font-style: italic;
    background: linear-gradient(90deg, var(--slate) 0%, var(--periwinkle) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .line-3 { display: block; color: var(--white); }

  .crux-hero-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 24px 0 32px;
    border-top: 1px solid var(--rule);
    margin-top: 32px;
    position: relative;
    z-index: 1;
  }

  .crux-sub {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.03em;
    color: var(--mid);
    max-width: 300px;
    line-height: 1.75;
  }

  .crux-scroll {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mid);
  }

  .scroll-pip {
    width: 28px; height: 1px;
    background: linear-gradient(90deg, var(--indigo-bright), transparent);
  }

  /* ── PAGE ── */
  .crux-page { padding: 0 40px 100px; }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 26px 0 20px;
    border-bottom: 1px solid var(--rule);
    margin-bottom: 30px;
  }

  .section-label { display: flex; align-items: center; gap: 12px; }
  .section-num { font-size: 10px; font-weight: 500; letter-spacing: 0.12em; color: var(--mid); }
  .section-title { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--white); }

  /* ── INPUTS ── */
  .decision-input {
    width: 100%;
    background: none;
    border: none;
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 4vw, 42px);
    font-weight: 700;
    font-style: italic;
    line-height: 1.2;
    color: var(--white);
    outline: none;
    resize: none;
    letter-spacing: -0.01em;
    padding: 24px 0;
    border-bottom: 1px solid var(--rule);
    transition: border-color 0.3s;
  }

  .decision-input:focus { border-bottom-color: var(--slate-dim); }
  .decision-input::placeholder { color: var(--white-faint); }

  .context-row {
    display: flex;
    gap: 16px;
    align-items: baseline;
    padding: 16px 0;
    border-bottom: 1px solid var(--rule);
  }

  .context-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mid);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .context-input {
    flex: 1;
    background: none;
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 13px;
    font-weight: 300;
    color: var(--white-dim);
    outline: none;
    resize: none;
    line-height: 1.7;
  }

  .context-input::placeholder { color: rgba(236,234,245,0.14); }

  .analyze-btn {
    margin-top: 24px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 13px 26px;
    background: var(--indigo);
    color: rgba(237,232,240,0.9);
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
  }

  .analyze-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.06), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .analyze-btn:hover { background: var(--indigo-bright); transform: translateY(-1px); }
  .analyze-btn:hover::before { opacity: 1; }
  .analyze-btn:disabled { opacity: 0.25; cursor: not-allowed; transform: none; }

  .spinner {
    width: 12px; height: 12px;
    border: 1.5px solid rgba(237,232,240,0.2);
    border-top-color: rgba(237,232,240,0.8);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── RESULTS ── */
  .result-section {
    margin-top: 48px;
    animation: fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .result-eyebrow {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--slate);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .result-eyebrow::after { content: ''; flex: 1; height: 1px; background: var(--rule); }

  .result-q {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-style: italic;
    color: rgba(237,232,240,0.3);
    margin-bottom: 28px;
    line-height: 1.45;
  }

  /* Color-tinted columns */
  .analysis-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 10px;
  }

  @media(max-width:560px) { .analysis-cols { grid-template-columns: 1fr; } }

  .col-for {
    background: linear-gradient(160deg, rgba(46,46,106,0.35) 0%, rgba(16,16,24,0.9) 100%);
    border: 1px solid rgba(72,72,160,0.25);
    border-top: 2px solid var(--violet-bright);
    padding: 22px;
  }

  .col-against {
    background: linear-gradient(160deg, rgba(58,58,140,0.28) 0%, rgba(16,16,24,0.9) 100%);
    border: 1px solid rgba(80,80,184,0.2);
    border-top: 2px solid var(--indigo-bright);
    padding: 22px;
  }

  .col-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(237,232,240,0.06);
  }

  .col-title {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .col-for .col-title { color: #7878C0; }
  .col-against .col-title { color: var(--periwinkle); }

  .col-count {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 900;
    line-height: 1;
    opacity: 0.12;
    color: var(--white);
  }

  .pc-item {
    font-size: 13px;
    font-weight: 300;
    line-height: 1.65;
    color: var(--white-dim);
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
  }

  .pc-dash { flex-shrink: 0; font-size: 10px; margin-top: 4px; opacity: 0.25; }

  /* Insight strip */
  .insight-strip {
    border: 1px solid rgba(136,136,204,0.15);
    border-left: 3px solid var(--slate-dim);
    background: rgba(136,136,204,0.04);
    padding: 24px 26px;
    margin-bottom: 10px;
    display: flex;
    gap: 22px;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
  }

  .insight-strip::after {
    content: '"';
    position: absolute;
    right: 16px; top: -16px;
    font-family: 'Playfair Display', serif;
    font-size: 110px;
    font-weight: 900;
    color: rgba(136,136,204,0.05);
    line-height: 1;
    pointer-events: none;
  }

  .insight-kicker {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--slate-dim);
    flex-shrink: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
  }

  .insight-text {
    font-family: 'Playfair Display', serif;
    font-size: clamp(16px, 2.2vw, 22px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.55;
    color: var(--white);
  }

  /* Verdict */
  .verdict-block {
    background: var(--surface);
    border: 1px solid var(--rule);
    padding: 24px;
  }

  .verdict-title {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mid);
    margin-bottom: 18px;
  }

  .choice-btns { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }

  .choice-btn {
    padding: 8px 16px;
    border: 1px solid var(--rule);
    background: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--mid);
    cursor: pointer;
    transition: all 0.15s;
  }

  .choice-btn:hover { border-color: rgba(237,232,240,0.2); color: var(--white); }

  .choice-btn.yes.selected {
    border-color: rgba(72,72,160,0.5);
    color: #7878C0;
    background: rgba(72,72,160,0.1);
  }
  .choice-btn.no.selected {
    border-color: rgba(80,80,184,0.4);
    color: var(--periwinkle);
    background: rgba(80,80,184,0.08);
  }
  .choice-btn.undecided.selected {
    border-color: rgba(136,136,204,0.35);
    color: var(--slate);
    background: rgba(136,136,204,0.06);
  }

  .notes-input {
    width: 100%;
    background: rgba(237,232,240,0.03);
    border: 1px solid var(--rule);
    padding: 12px 14px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 13px;
    font-weight: 300;
    color: var(--white-dim);
    outline: none;
    resize: none;
    min-height: 54px;
    line-height: 1.65;
    margin-bottom: 16px;
    transition: border-color 0.2s;
  }

  .notes-input:focus { border-color: var(--slate-dim); }
  .notes-input::placeholder { color: rgba(236,234,245,0.14); font-style: italic; }

  .save-btn {
    background: none;
    border: 1px solid var(--rule);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--mid);
    cursor: pointer;
    padding: 9px 18px;
    transition: all 0.2s;
  }

  .save-btn:hover { border-color: var(--slate-dim); color: var(--slate); }

  .saved-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #7878C0;
  }

  .error-label {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-style: italic;
    color: var(--periwinkle);
    margin-top: 12px;
  }

  /* ── ARCHIVE ── */
  .archive-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 0 20px;
    border-bottom: 2px solid var(--white);
    margin-bottom: 0;
  }

  .archive-title {
    font-family: 'Playfair Display', serif;
    font-size: 34px;
    font-weight: 900;
    color: var(--white);
    letter-spacing: -0.02em;
  }

  .archive-count {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--slate);
    border: 1px solid rgba(136,136,204,0.25);
    padding: 5px 12px;
    background: rgba(136,136,204,0.05);
  }

  .log-empty {
    padding: 80px 0;
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-style: italic;
    color: rgba(236,234,245,0.08);
  }

  .log-entry {
    border-bottom: 1px solid var(--rule);
    animation: fadeUp 0.3s ease;
  }

  .log-entry-header {
    padding: 20px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 20px;
    transition: opacity 0.15s;
  }

  .log-entry-header:hover { opacity: 0.5; }

  .log-q {
    font-family: 'Playfair Display', serif;
    font-size: 19px;
    font-style: italic;
    font-weight: 400;
    color: var(--white);
    flex: 1;
    line-height: 1.3;
  }

  .log-right { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }

  .log-date {
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(236,234,245,0.18);
  }

  .choice-tag {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 10px;
    border: 1px solid;
  }

  .choice-tag.yes { color: #7878C0; border-color: rgba(107,61,138,0.35); }
  .choice-tag.no { color: var(--periwinkle); border-color: rgba(160,160,224,0.3); }
  .choice-tag.undecided { color: var(--slate); border-color: rgba(196,160,184,0.3); }

  .chevron { font-size: 10px; color: var(--mid); transition: transform 0.2s; }
  .chevron.open { transform: rotate(180deg); }

  .log-body {
    padding: 4px 0 26px;
    animation: fadeUp 0.25s ease;
  }

  .log-mini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 16px; }

  .log-mini-head {
    font-size: 9px; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; margin-bottom: 10px;
  }

  .log-mini-head.for { color: #7878C0; }
  .log-mini-head.against { color: var(--periwinkle); }

  .log-mini-item {
    font-size: 12px; font-weight: 300;
    color: rgba(236,234,245,0.28);
    line-height: 1.65; margin-bottom: 5px;
    padding-left: 12px; position: relative;
  }

  .log-mini-item::before { content: '—'; position: absolute; left: 0; color: var(--rule); font-size: 10px; }

  .log-insight {
    font-family: 'Playfair Display', serif;
    font-size: 14px; font-style: italic;
    color: rgba(236,234,245,0.28);
    line-height: 1.65; margin-bottom: 12px;
    padding: 12px 16px;
    border-left: 2px solid rgba(136,136,204,0.2);
    background: rgba(136,136,204,0.03);
  }

  .log-notes {
    font-size: 12px; font-weight: 300;
    color: rgba(236,234,245,0.18);
    font-style: italic; margin-bottom: 12px;
  }

  .delete-btn {
    background: none; border: none;
    font-size: 9px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
    color: rgba(236,234,245,0.12); cursor: pointer; transition: color 0.15s; padding: 0;
    font-family: 'Space Grotesk', sans-serif;
  }

  .delete-btn:hover { color: var(--periwinkle); }

  @media(max-width: 600px) {
    .crux-nav { padding: 14px 20px; }
    .crux-hero { padding: 36px 20px 0; }
    .crux-page { padding: 0 20px 80px; }
    .log-mini-grid { grid-template-columns: 1fr; }
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

const ITEMS = ["AI Decision Analysis", "Think Clearly", "Crux", "Decide Well", "Know the Tension", "Structure Your Thinking", "AI Decision Analysis", "Think Clearly", "Crux", "Decide Well", "Know the Tension", "Structure Your Thinking"];

export default function Crux() {
  const [tab, setTab] = useState("decide");
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [choice, setChoice] = useState(null);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);
  const [log, setLog] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => { loadLog(); }, []);

  async function loadLog() {
    try { 
      const stored = localStorage.getItem("crux-log");
      if (stored) setLog(JSON.parse(stored)); 
    } catch {}
  }

  async function saveLog(nl) {
    try { 
      localStorage.setItem("crux-log", JSON.stringify(nl)); 
    } catch {}
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

        <div className="ticker-wrap">
          <div className="ticker-track">
            {ITEMS.map((item, i) => <div key={i} className="ticker-item"><span className="ticker-dot" />{item}</div>)}
            {ITEMS.map((item, i) => <div key={`b${i}`} className="ticker-item"><span className="ticker-dot" />{item}</div>)}
          </div>
        </div>

        <div className="crux-nav">
          <div className="crux-brand">Cr<em>u</em>x</div>
          <div className="crux-links">
            <button className={`crux-link ${tab === "decide" ? "active" : ""}`} onClick={() => setTab("decide")}>[Analyze]</button>
            <button className={`crux-link ${tab === "log" ? "active" : ""}`} onClick={() => { setTab("log"); loadLog(); }}>
              [Archive{log.length > 0 ? ` ${log.length}` : ""}]
            </button>
          </div>
        </div>

        <div className="crux-hero">
          <div className="crux-hero-top">
            <div className="crux-flag"><span className="crux-flag-text">AI Decision Analysis — 2026</span></div>
          </div>
          <div className="crux-headline">
            <span className="line-1">The</span>
            <span className="line-2">Decisive</span>
            <span className="line-3">Point.</span>
          </div>
          <div className="crux-hero-bottom">
            <div className="crux-sub">Name the real tension. Decide. Move on. No frameworks, no scores — just clarity when you're stuck.</div>
            <div className="crux-scroll"><span className="scroll-pip" />Scroll to analyze</div>
          </div>
        </div>

        <div className="crux-page">
          {tab === "decide" && (
            <div>
              <div className="section-header">
                <div className="section-label">
                  <span className="section-num">01 /</span>
                  <span className="section-title">New Analysis</span>
                </div>
              </div>

              <textarea className="decision-input" placeholder="State your decision..." value={question} onChange={e => setQuestion(e.target.value)} rows={2} />

              <div className="context-row">
                <span className="context-label">Context</span>
                <textarea className="context-input" placeholder="Stakes, constraints, what you already know..." value={context} onChange={e => setContext(e.target.value)} rows={2} />
              </div>

              <button className="analyze-btn" onClick={analyze} disabled={loading || !question.trim()}>
                {loading ? <><span className="spinner" />Analyzing</> : "[Analyze →]"}
              </button>

              {error && <div className="error-label">{error}</div>}

              {result && (
                <div className="result-section">
                  <div className="result-eyebrow">Analysis complete</div>
                  <div className="result-q">"{result.question}"</div>

                  <div className="analysis-cols">
                    <div className="col-for">
                      <div className="col-head">
                        <div className="col-title">For it</div>
                        <div className="col-count">{result.pros.length}</div>
                      </div>
                      {result.pros.map((p,i) => <div key={i} className="pc-item"><span className="pc-dash">—</span><span>{p}</span></div>)}
                    </div>
                    <div className="col-against">
                      <div className="col-head">
                        <div className="col-title">Against it</div>
                        <div className="col-count">{result.cons.length}</div>
                      </div>
                      {result.cons.map((c,i) => <div key={i} className="pc-item"><span className="pc-dash">—</span><span>{c}</span></div>)}
                    </div>
                  </div>

                  {result.insight && (
                    <div className="insight-strip">
                      <div className="insight-kicker">Real tension</div>
                      <div className="insight-text">{result.insight}</div>
                    </div>
                  )}

                  <div className="verdict-block">
                    <div className="verdict-title">[Your verdict]</div>
                    <div className="choice-btns">
                      {["yes","no","undecided"].map(c => (
                        <button key={c} className={`choice-btn ${c} ${choice === c ? "selected" : ""}`} onClick={() => setChoice(c)}>
                          [{choiceLabel(c)}]
                        </button>
                      ))}
                    </div>
                    <textarea className="notes-input" placeholder="Notes on your reasoning..." value={notes} onChange={e => setNotes(e.target.value)} />
                    {saved
                      ? <div className="saved-label">[Saved →]</div>
                      : <button className="save-btn" onClick={handleSave}>[Save to archive →]</button>
                    }
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "log" && (
            <div>
              <div className="archive-header">
                <div className="archive-title">Archive</div>
                <div className="archive-count">{log.length} logged</div>
              </div>
              {log.length === 0
                ? <div className="log-empty">Nothing archived yet.</div>
                : log.map(entry => (
                  <div key={entry.id} className="log-entry">
                    <div className="log-entry-header" onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}>
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
                            {entry.pros.map((p,i) => <div key={i} className="log-mini-item">{p}</div>)}
                          </div>
                          <div>
                            <div className="log-mini-head against">Against</div>
                            {entry.cons.map((c,i) => <div key={i} className="log-mini-item">{c}</div>)}
                          </div>
                        </div>
                        {entry.insight && <div className="log-insight">"{entry.insight}"</div>}
                        {entry.notes && <div className="log-notes">Notes: "{entry.notes}"</div>}
                        <button className="delete-btn" onClick={() => del(entry.id)}>[Remove entry]</button>
                      </div>
                    )}
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
}
