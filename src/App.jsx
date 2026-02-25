import { useState, useEffect, useRef } from "react";
import Crux from "./Crux";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #050508;
    --bg-light: #0a0a0f;
    --text: #e8e8f0;
    --text-dim: #8888a0;
    --text-faint: #444460;
    --purple: #8b5cf6;
    --blue: #3b82f6;
    --indigo: #6366f1;
    --violet: #a78bfa;
    --glow: rgba(139, 92, 246, 0.4);
    --glass: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
  }

  html { background: var(--bg); scroll-behavior: smooth; }
  body { background: var(--bg); overflow-x: hidden; }

  ::selection { background: var(--purple); color: white; }

  .portfolio {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', -apple-system, sans-serif;
    overflow-x: hidden;
  }

  /* Cursor trail */
  .cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 1px solid var(--purple);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease, width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
    transform: translate(-50%, -50%);
  }

  .cursor.hovering {
    width: 50px;
    height: 50px;
    border-color: var(--violet);
    background: rgba(139, 92, 246, 0.1);
  }

  .cursor-dot {
    position: fixed;
    width: 6px;
    height: 6px;
    background: var(--purple);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transform: translate(-50%, -50%);
  }

  /* Ambient glow */
  .ambient-glow {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.06) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  /* Nav */
  .nav {
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 32px;
    display: flex;
    align-items: center;
    gap: 48px;
    z-index: 100;
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
  }

  .nav-name {
    font-family: 'Instrument Serif', serif;
    font-size: 16px;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .nav-links { display: flex; gap: 32px; }

  .nav-link {
    font-size: 13px;
    font-weight: 400;
    color: var(--text-dim);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-link:hover { color: var(--text); }

  /* Hero */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 120px 48px;
    position: relative;
  }

  .hero-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 32px;
    padding: 8px 20px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    backdrop-filter: blur(10px);
    opacity: 0;
    animation: fadeUp 1s ease 0.2s forwards;
  }

  .hero-title {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(64px, 12vw, 150px);
    font-weight: 400;
    line-height: 0.9;
    letter-spacing: -0.04em;
    margin-bottom: 40px;
  }

  .hero-title .line { display: block; overflow: hidden; }

  .hero-title .line-inner {
    display: block;
    transform: translateY(100%);
    animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .hero-title .line:nth-child(1) .line-inner { animation-delay: 0.3s; }
  .hero-title .line:nth-child(2) .line-inner { animation-delay: 0.4s; }

  /* Glass text effect */
  .glass-text {
    background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 50%, var(--violet) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
  }

  .glass-text::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 50%, var(--violet) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: blur(30px);
    opacity: 0.5;
    z-index: -1;
  }

  @keyframes slideUp { to { transform: translateY(0); } }
  @keyframes fadeUp { to { opacity: 1; } }

  .hero-intro {
    max-width: 500px;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--text-dim);
    opacity: 0;
    animation: fadeUp 1s ease 0.7s forwards;
  }

  .hero-cta {
    margin-top: 48px;
    padding: 16px 32px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background: linear-gradient(135deg, var(--purple) 0%, var(--indigo) 100%);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeUp 1s ease 0.9s forwards;
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .hero-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--indigo) 0%, var(--purple) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .hero-cta span { position: relative; z-index: 1; }

  .hero-cta:hover { transform: translateY(-2px); box-shadow: 0 20px 40px var(--glow); }
  .hero-cta:hover::before { opacity: 1; }

  .scroll-indicator {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0;
    animation: fadeUp 1s ease 1.2s forwards;
  }

  .scroll-indicator span {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-faint);
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--purple), transparent);
    animation: scrollPulse 2s ease infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  /* Sections */
  .section {
    padding: 160px 48px;
    position: relative;
  }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 64px;
  }

  /* About */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }

  @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; gap: 48px; } }

  .about-text p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.9;
    color: var(--text-dim);
    margin-bottom: 24px;
  }

  .about-text strong { color: var(--text); font-weight: 500; }

  /* Glass card */
  .glass-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 48px;
    position: relative;
    overflow: hidden;
  }

  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
    opacity: 0.5;
  }

  .glass-card-title {
    font-family: 'Instrument Serif', serif;
    font-size: 32px;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 16px;
    line-height: 1.3;
  }

  .glass-card-title em {
    font-style: italic;
    background: linear-gradient(135deg, var(--purple), var(--violet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Projects */
  .projects-section { background: var(--bg-light); }

  .project-item {
    padding: 48px 0;
    border-bottom: 1px solid var(--glass-border);
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
  }

  .project-item:first-child { border-top: 1px solid var(--glass-border); }

  .project-item::before {
    content: '';
    position: absolute;
    left: -48px;
    right: -48px;
    top: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .project-item:hover::before { opacity: 1; }

  .project-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-left { display: flex; align-items: center; gap: 32px; }

  .project-number {
    font-size: 14px;
    font-weight: 400;
    color: var(--purple);
    opacity: 0.5;
  }

  .project-name {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 400;
    color: var(--text);
    transition: all 0.3s ease;
    letter-spacing: -0.02em;
  }

  .project-item:hover .project-name {
    background: linear-gradient(135deg, var(--purple), var(--violet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-tag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
    padding: 8px 16px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    transition: all 0.3s ease;
  }

  .project-item:hover .project-tag {
    border-color: var(--purple);
    color: var(--purple);
  }

  .project-arrow {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--glass-border);
    border-radius: 50%;
    color: var(--text-dim);
    font-size: 20px;
    transition: all 0.3s ease;
  }

  .project-item:hover .project-arrow {
    background: linear-gradient(135deg, var(--purple), var(--indigo));
    border-color: transparent;
    color: white;
    transform: translateX(4px);
  }

  .project-desc {
    margin-top: 16px;
    margin-left: 72px;
    max-width: 400px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.6;
    color: var(--text-dim);
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease;
  }

  .project-item:hover .project-desc { opacity: 1; transform: translateY(0); }

  /* Contact */
  .contact-section {
    padding: 200px 48px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .contact-section::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0.3;
  }

  .contact-heading {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(48px, 8vw, 100px);
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 48px;
    position: relative;
  }

  .contact-heading em {
    font-style: italic;
    background: linear-gradient(135deg, var(--purple), var(--blue), var(--violet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    position: relative;
  }

  .contact-link {
    padding: 14px 28px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .contact-link:hover {
    border-color: var(--purple);
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
  }

  /* Footer */
  .footer {
    padding: 32px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--glass-border);
  }

  .footer-text {
    font-size: 12px;
    color: var(--text-faint);
  }

  /* Crux wrapper */
  .crux-wrapper { min-height: 100vh; padding-top: 80px; }

  .back-btn {
    position: fixed;
    top: 24px;
    left: 48px;
    z-index: 101;
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    background: var(--glass);
    border: 1px solid var(--glass-border);
    padding: 12px 24px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    backdrop-filter: blur(20px);
  }

  .back-btn:hover { border-color: var(--purple); }

  /* Reveal */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* Mobile */
  @media (max-width: 768px) {
    .nav { padding: 10px 20px; gap: 24px; top: 16px; }
    .nav-links { gap: 16px; }
    .nav-link { font-size: 12px; }
    .hero { padding: 100px 24px; }
    .hero-title { font-size: clamp(48px, 12vw, 100px); }
    .section { padding: 100px 24px; }
    .contact-section { padding: 120px 24px; }
    .contact-links { flex-direction: column; gap: 16px; }
    .footer { padding: 24px; flex-direction: column; gap: 12px; }
    .project-content { flex-direction: column; align-items: flex-start; gap: 16px; }
    .project-desc { margin-left: 0; opacity: 1; transform: none; }
    .project-arrow { display: none; }
    .back-btn { left: 24px; }
    .cursor, .cursor-dot { display: none; }
    .glass-card { padding: 32px; }
  }
`;

export default function App() {
  const [view, setView] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth cursor follow
  useEffect(() => {
    const animateCursor = () => {
      setCursorPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15
      }));
      requestAnimationFrame(animateCursor);
    };
    const animation = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(animation);
  }, [mousePos]);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [view]);

  const handleHover = (hovering) => setIsHovering(hovering);

  if (view === "crux") {
    return (
      <>
        <style>{STYLES}</style>
        <div className="portfolio">
          <div className="ambient-glow" />
          <div className="crux-wrapper">
            <button className="back-btn" onClick={() => setView("home")}>← Back</button>
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
        <div className="ambient-glow" />
        
        {/* Cursor */}
        <div className={`cursor ${isHovering ? 'hovering' : ''}`} style={{ left: cursorPos.x, top: cursorPos.y }} />
        <div className="cursor-dot" style={{ left: mousePos.x, top: mousePos.y }} />

        {/* Nav */}
        <nav className="nav">
          <div className="nav-name">Abby Schneider</div>
          <div className="nav-links">
            <a className="nav-link" href="#about" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>About</a>
            <a className="nav-link" href="#work" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>Work</a>
            <a className="nav-link" href="#contact" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>Contact</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-label">Ex-finance, now building</div>
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">Abby</span></span>
            <span className="line">
              <span className="line-inner">
                <span className="glass-text" data-text="Schneider">Schneider</span>
              </span>
            </span>
          </h1>
          <p className="hero-intro">
            Six years at Bridgewater and Ray Dalio's Family Office. Left because I wanted 
            to actually build things. Now looking for the right AI company to join.
          </p>
          <button 
            className="hero-cta" 
            onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <span>See my work</span>
          </button>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="section-label">About</div>
          <div className="about-grid">
            <div className="about-text reveal">
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
            <div className="glass-card reveal">
              <h3 className="glass-card-title">
                Looking for the <em>right team</em>, not the perfect role.
              </h3>
            </div>
          </div>
        </section>

        {/* Work */}
        <section className="section projects-section" id="work">
          <div className="section-label">Work</div>
          
          <div 
            className="project-item" 
            onClick={() => setView("crux")}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <div className="project-content">
              <div className="project-left">
                <span className="project-number">01</span>
                <h3 className="project-name">Crux</h3>
                <span className="project-tag">Live</span>
              </div>
              <div className="project-arrow">→</div>
            </div>
            <p className="project-desc">
              An AI decision analyst that names the real tension in hard choices. 
              No frameworks, no scores. Just clarity when you're stuck.
            </p>
          </div>

          <div 
            className="project-item"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            style={{ cursor: 'default' }}
          >
            <div className="project-content">
              <div className="project-left">
                <span className="project-number">02</span>
                <h3 className="project-name">More coming</h3>
                <span className="project-tag">Soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <h2 className="contact-heading">
            Let's <em>talk</em>
          </h2>
          <div className="contact-links">
            <a 
              className="contact-link" 
              href="mailto:abby@example.com"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              Email
            </a>
            <a 
              className="contact-link" 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              LinkedIn
            </a>
            <a 
              className="contact-link" 
              href="/resume.pdf" 
              target="_blank"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              Resume
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <span className="footer-text">© 2026</span>
          <span className="footer-text">Abby Schneider</span>
        </footer>
      </div>
    </>
  );
}
