import { useState } from "react";
import PulsingPill from "./PulsingPill";
import { canMakeApiCall, recordApiCall } from "./rateLimit";

const STYLES = `
  .crux-app {
    min-height: 100vh;
    color: var(--dark-text);
    font-family: 'Inter', -apple-system, sans-serif;
  }

  .crux-hero {
    text-align: center;
    padding: 8px 48px 48px;
    position: relative;
  }

  .crux-hero-label {
    display: inline-block;
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 28px;
    padding: 8px 20px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(232, 224, 208, 0.1);
    border-radius: 100px;
    backdrop-filter: blur(10px);
  }

  .crux-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 900;
    font-size: clamp(64px, 14vw, 180px);
    text-transform: uppercase;
    color: var(--dark-text);
    line-height: 0.9;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  .crux-title-sub {
    font-family: 'Cormorant Garant', serif;
    font-style: italic;
    font-weight: 400;
    font-size: clamp(20px, 3vw, 32px);
    color: var(--dark-text-dim);
    margin-bottom: 28px;
    line-height: 1.3;
  }

  .crux-subtitle {
    max-width: 440px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--dark-text-dim);
  }

  /* Form */
  .crux-form {
    max-width: 640px;
    margin: 0 auto;
    padding: 64px 48px 120px;
  }

  .form-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 28px;
  }

  .decision-input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
    font-family: 'Instrument Serif', serif;
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.3;
    color: var(--dark-text);
    outline: none;
    resize: none;
    padding: 20px 0;
    transition: border-color 0.3s;
  }

  .decision-input:focus { border-bottom-color: var(--accent); }
  .decision-input::placeholder { color: var(--dark-text-faint); }

  .context-row {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 20px 0;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
  }

  .context-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark-text-dim);
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
    color: var(--dark-text-dim);
    outline: none;
    resize: none;
    line-height: 1.7;
  }

  .context-input::placeholder { color: var(--dark-text-faint); }

  .analyze-btn {
    margin-top: 32px;
    padding: 16px 32px;
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dark-bg);
    background: var(--dark-text);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
  }

  .analyze-btn span { position: relative; z-index: 1; }

  .analyze-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4); }
  .analyze-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; box-shadow: none; }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid rgba(232, 224, 208, 0.3);
    border-top-color: var(--dark-bg);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    position: relative;
    z-index: 1;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .error-text {
    font-family: 'Cormorant Garant', serif;
    font-size: 15px;
    font-style: italic;
    color: #e55;
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
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .result-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(232, 224, 208, 0.12), transparent);
  }

  .result-question {
    font-family: 'Instrument Serif', serif;
    font-size: 20px;
    font-style: italic;
    color: var(--dark-text-faint);
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
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 224, 208, 0.08);
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
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.6;
  }

  .analysis-card.against-card::before {
    background: linear-gradient(90deg, transparent, var(--dark-text-dim), transparent);
    opacity: 0.3;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(232, 224, 208, 0.08);
  }

  .card-title {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .for-card .card-title { color: var(--accent); }
  .against-card .card-title { color: var(--dark-text-dim); }

  .card-count {
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    font-weight: 400;
    color: var(--dark-text);
    opacity: 0.1;
  }

  .point-item {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--dark-text-dim);
    margin-bottom: 10px;
    display: flex;
    gap: 12px;
  }

  .point-dash {
    flex-shrink: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.5;
    margin-top: 9px;
  }

  /* Insight */
  .insight-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 24px;
    padding: 28px 28px 28px 30px;
    position: relative;
    overflow: hidden;
  }

  .insight-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--accent), var(--accent-light));
    border-radius: 1px;
  }

  .insight-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .insight-text {
    font-family: 'Cormorant Garant', serif;
    font-size: clamp(17px, 2.2vw, 22px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    color: var(--dark-text);
  }

  @media(max-width: 600px) {
    .crux-hero { padding: 16px 24px 36px; }
    .crux-form { padding: 40px 24px 80px; }
    .analysis-grid { grid-template-columns: 1fr; }
    .analysis-card, .insight-card { padding: 24px; border-radius: 16px; }
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
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const hover = onHover || (() => {});

  async function analyze() {
    if (!question.trim()) return;
    if (!canMakeApiCall()) {
      setError("Daily limit reached — come back tomorrow.");
      return;
    }
    setLoading(true); setResult(null); setError(null);
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
      recordApiCall();
      setResult({ question: question.trim(), ...parseAnalysis(data.text) });
    } catch { setError("Something went wrong. Try again."); }
    finally { setLoading(false); }
  }

  return (
    <>
      <style>{STYLES}</style>
      <div className="crux-app">

        <div className="crux-hero">
          <PulsingPill className="crux-hero-label" style={{ display: 'inline-block' }}>[DECISION TOOL]</PulsingPill>
          <h1 className="crux-title">CRUX</h1>
          <div className="crux-title-sub">the decisive point.</div>
          <p className="crux-subtitle">
            I tell it what I'm stuck on, it finds the tension I'm dancing around.
          </p>
        </div>

        <div className="crux-form">
          <div className="form-label">[NEW ANALYSIS]</div>

          <textarea
            className="decision-input"
            placeholder="State your decision..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
            rows={2}
          />

          <div className="context-row">
            <span className="context-label">[Context]</span>
            <textarea
              className="context-input"
              placeholder="Stakes, constraints, what you already know..."
              value={context}
              onChange={e => setContext(e.target.value)}
              rows={2}
            />
          </div>

          <PulsingPill
            as="button"
            className="analyze-btn"
            onClick={analyze}
            disabled={loading || !question.trim()}
            onMouseEnter={() => hover(true)}
            onMouseLeave={() => hover(false)}
          >
            {loading
              ? <><span className="spinner" /><span>Analyzing...</span></>
              : <span>Analyze &rarr;</span>
            }
          </PulsingPill>

          {error && <div className="error-text">{error}</div>}

          {result && (
            <div className="result-section">
              <div className="result-label">[ANALYSIS COMPLETE]</div>
              <div className="result-question">&ldquo;{result.question}&rdquo;</div>

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
                  <div className="insight-label">[REAL TENSION]</div>
                  <div className="insight-text">{result.insight}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
