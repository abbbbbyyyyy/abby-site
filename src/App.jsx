import { useState } from "react";
import Crux from "./Crux";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #0B0B0F;
    --surface:   #111118;
    --rule:      #1E1E2E;
    --mid:       #5A5A78;
    --white:     #ECEAF5;
    --white-dim: rgba(236,234,245,0.45);
    --white-faint: rgba(236,234,245,0.12);

    --indigo:    #3A3A8C;
    --indigo-bright: #5050B8;
    --violet:    #2E2E6A;
    --violet-bright: #4848A0;
    --slate:     #8888CC;
    --slate-dim: #4A4A88;
    --periwinkle: #A0A0E0;
  }

  html, body { 
    background: var(--bg); 
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .portfolio {
    min-height: 100vh;
    background: var(--bg);
    color: var(--white);
    font-family: 'Space Grotesk', sans-serif;
    overflow-x: hidden;
  }

  /* ── NAV ── */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 40px;
    background: rgba(11,11,15,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--rule);
    z-index: 100;
  }

  .nav-brand {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.04em;
    color: var(--white);
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .nav-brand:hover { opacity: 0.7; }

  .nav-brand em {
    font-style: italic;
    color: var(--slate);
  }

  .nav-links { display: flex; align-items: center; gap: 6px; }

  .nav-link {
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

  .nav-link:hover { color: var(--white); border-color: var(--rule); }
  .nav-link.active {
    color: var(--slate);
    border-color: var(--slate-dim);
    background: rgba(136,136,204,0.06);
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 40px 80px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 10%; right: -20%;
    width: 800px; height: 800px;
    background: radial-gradient(ellipse, rgba(46,46,106,0.25) 0%, transparent 60%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: var(--rule);
  }

  .hero-flag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--slate-dim);
    padding: 5px 12px;
    background: rgba(136,136,204,0.05);
    margin-bottom: 32px;
    width: fit-content;
  }

  .hero-flag-text {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--slate);
  }

  .hero-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.025em;
    margin-bottom: 32px;
    position: relative;
    z-index: 1;
  }

  .hero-headline .line {
    display: block;
  }

  .hero-headline .accent {
    font-style: italic;
    background: linear-gradient(90deg, var(--slate) 0%, var(--periwinkle) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0.02em;
    color: var(--white-dim);
    max-width: 520px;
    line-height: 1.8;
    margin-bottom: 40px;
  }

  .hero-sub strong {
    color: var(--white);
    font-weight: 500;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 14px 28px;
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

  .hero-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .hero-cta:hover { 
    background: var(--indigo-bright); 
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(58,58,140,0.3);
  }
  .hero-cta:hover::before { opacity: 1; }

  .hero-scroll {
    position: absolute;
    bottom: 40px;
    left: 40px;
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

  /* ── SECTIONS ── */
  .section {
    padding: 100px 40px;
    border-bottom: 1px solid var(--rule);
    position: relative;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 48px;
  }

  .section-num {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    color: var(--slate-dim);
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 900;
    color: var(--white);
    letter-spacing: -0.02em;
  }

  /* ── PROJECTS ── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 24px;
  }

  .project-card {
    background: linear-gradient(160deg, rgba(46,46,106,0.2) 0%, rgba(16,16,24,0.95) 100%);
    border: 1px solid rgba(72,72,160,0.2);
    padding: 32px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--violet-bright), var(--indigo-bright));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }

  .project-card:hover {
    transform: translateY(-4px);
    border-color: rgba(72,72,160,0.4);
    box-shadow: 0 16px 48px rgba(46,46,106,0.2);
  }

  .project-card:hover::before {
    transform: scaleX(1);
  }

  .project-tag {
    display: inline-block;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--slate);
    border: 1px solid var(--slate-dim);
    padding: 4px 10px;
    margin-bottom: 16px;
  }

  .project-name {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 900;
    color: var(--white);
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }

  .project-desc {
    font-size: 13px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--white-dim);
    margin-bottom: 20px;
  }

  .project-link {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--periwinkle);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .project-link-arrow {
    transition: transform 0.2s;
  }

  .project-card:hover .project-link-arrow {
    transform: translateX(4px);
  }

  .project-placeholder {
    background: rgba(30,30,46,0.3);
    border: 1px dashed rgba(136,136,204,0.2);
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    text-align: center;
  }

  .placeholder-icon {
    font-size: 32px;
    margin-bottom: 16px;
    opacity: 0.15;
  }

  .placeholder-text {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--mid);
  }

  /* ── ABOUT ── */
  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }

  @media (max-width: 800px) {
    .about-content { grid-template-columns: 1fr; }
  }

  .about-text {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.85;
    color: var(--white-dim);
  }

  .about-text p {
    margin-bottom: 24px;
  }

  .about-text strong {
    color: var(--white);
    font-weight: 500;
  }

  .about-text em {
    font-style: italic;
    color: var(--slate);
  }

  .about-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .about-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background: var(--surface);
    border: 1px solid var(--rule);
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
  }

  .about-link:hover {
    border-color: var(--slate-dim);
    background: rgba(136,136,204,0.04);
  }

  .about-link-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--white);
  }

  .about-link-arrow {
    font-size: 12px;
    color: var(--mid);
    transition: transform 0.2s;
  }

  .about-link:hover .about-link-arrow {
    transform: translateX(4px);
    color: var(--slate);
  }

  .about-signal {
    margin-top: 32px;
    padding: 24px;
    border-left: 2px solid var(--violet-bright);
    background: rgba(46,46,106,0.1);
  }

  .about-signal-text {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-style: italic;
    line-height: 1.6;
    color: var(--white);
  }

  /* ── FOOTER ── */
  .footer {
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--rule);
  }

  .footer-text {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--mid);
  }

  .footer-email {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: var(--slate);
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-email:hover {
    color: var(--periwinkle);
  }

  /* ── CRUX VIEW ── */
  .crux-wrapper {
    min-height: 100vh;
    padding-top: 70px;
  }

  .back-btn {
    position: fixed;
    top: 80px;
    left: 40px;
    z-index: 50;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: rgba(11,11,15,0.9);
    backdrop-filter: blur(8px);
    border: 1px solid var(--rule);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--mid);
    cursor: pointer;
    transition: all 0.2s;
  }

  .back-btn:hover {
    color: var(--white);
    border-color: var(--slate-dim);
  }

  @media (max-width: 600px) {
    .nav { padding: 14px 20px; }
    .hero { padding: 100px 20px 60px; }
    .section { padding: 60px 20px; }
    .footer { padding: 30px 20px; flex-direction: column; gap: 16px; }
    .hero-scroll { display: none; }
    .back-btn { left: 20px; top: 75px; }
  }
`;

export default function App() {
  const [view, setView] = useState("home"); // "home" or "crux"

  if (view === "crux") {
    return (
      <>
        <style>{STYLES}</style>
        <div className="portfolio">
          <nav className="nav">
            <div className="nav-brand" onClick={() => setView("home")}>A<em>S</em></div>
            <div className="nav-links">
              <button className="nav-link" onClick={() => setView("home")}>[← Back]</button>
            </div>
          </nav>
          <div className="crux-wrapper">
            <button className="back-btn" onClick={() => setView("home")}>← Back to portfolio</button>
            <Crux />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{STYLES}</style>
      <div className="portfolio">
        <nav className="nav">
          <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            A<em>S</em>
          </div>
          <div className="nav-links">
            <a className="nav-link" href="#projects">[Projects]</a>
            <a className="nav-link" href="#about">[About]</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-flag">
            <span className="hero-flag-text">Ex-finance, now building</span>
          </div>
          <h1 className="hero-headline">
            <span className="line">Abby</span>
            <span className="line"><span className="accent">Schneider</span></span>
          </h1>
          <p className="hero-sub">
            Six years at Bridgewater and Ray Dalio's Family Office. Left because I wanted 
            to actually build things. Currently at Columbia studying org psych, but honestly 
            I'm more focused on finding the right AI company to join. Happy to pause school for it.
          </p>
          <button className="hero-cta" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            See what I'm building →
          </button>
          <div className="hero-scroll">
            <span className="scroll-pip" />
            Scroll to explore
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card" onClick={() => setView("crux")}>
              <span className="project-tag">Live</span>
              <h3 className="project-name">Crux</h3>
              <p className="project-desc">
                An AI decision analyst that names the real tension in hard choices — fast. 
                Not a framework, not a score. Just clarity when you're stuck.
              </p>
              <span className="project-link">
                Launch Crux <span className="project-link-arrow">→</span>
              </span>
            </div>

            <div className="project-placeholder">
              <span className="placeholder-icon">+</span>
              <span className="placeholder-text">More coming</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2 className="section-title">About</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I worked at <strong>Bridgewater</strong> and <strong>Ray Dalio's Family Office</strong> for 
                six years. Good experience, learned a lot, but finance is all process and no room 
                to try new things. I didn't realize that was the problem until I left.
              </p>
              <p>
                Started a master's at <strong>Columbia</strong> in organizational psychology. 
                Got interested in how AI changes the way people work and make decisions. 
                Started building tools to explore that. Realized I'd rather be doing this 
                full time than writing papers about it.
              </p>
              <p>
                So that's where I'm at. Looking for an AI company doing interesting work. 
                Not picky about the role. Just want to be somewhere good, working on 
                something that matters, with people who give a shit.
              </p>
            </div>
            <div className="about-links">
              <a className="about-link" href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <span className="about-link-label">LinkedIn</span>
                <span className="about-link-arrow">→</span>
              </a>
              <a className="about-link" href="mailto:abby@example.com">
                <span className="about-link-label">Email</span>
                <span className="about-link-arrow">→</span>
              </a>
              <a className="about-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <span className="about-link-label">Resume</span>
                <span className="about-link-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <span className="footer-text">© 2026 Abby Schneider</span>
          <a className="footer-email" href="mailto:abby@example.com">abby@example.com</a>
        </footer>
      </div>
    </>
  );
}
