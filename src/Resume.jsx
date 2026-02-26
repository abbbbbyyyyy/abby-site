import { useState, useEffect } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import PulsingPill from "./PulsingPill";

const STYLES = `
  .resume {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 48px 120px;
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--dark-text);
  }

  .resume-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 32px;
    position: relative;
    z-index: 1;
  }

  .resume-name-metal {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    aspect-ratio: 3200 / 600;
    margin-top: -40px;
    margin-bottom: -40px;
  }

  .resume-contact {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--dark-text-dim);
  }

  .resume-contact a {
    color: var(--dark-text-dim);
    text-decoration: none;
    transition: color 0.3s;
  }

  .resume-contact a:hover { color: var(--accent); }

  .resume-contact .sep { color: var(--dark-text-faint); }

  .resume-section {
    margin-bottom: 28px;
  }

  .resume-section-title {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
  }

  .resume-entry {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 12px;
    position: relative;
    overflow: hidden;
  }

  .resume-entry::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.4;
  }

  .resume-entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .resume-role {
    font-family: 'Instrument Serif', serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--dark-text);
    line-height: 1.3;
  }

  .resume-role em {
    font-style: italic;
    color: var(--dark-text-dim);
    font-size: 18px;
  }

  .resume-meta {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--dark-text-faint);
    text-align: right;
    white-space: nowrap;
    flex-shrink: 0;
    line-height: 1.6;
  }

  .resume-bullets {
    list-style: none;
    padding: 0;
  }

  .resume-bullets li {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.75;
    color: var(--dark-text-dim);
    margin-bottom: 6px;
    padding-left: 16px;
    position: relative;
  }

  .resume-bullets li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 10px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.4;
  }

  .resume-edu-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
    flex-wrap: wrap;
  }

  .resume-edu-item:last-child { border-bottom: none; }

  .resume-edu-degree {
    font-family: 'Instrument Serif', serif;
    font-size: 18px;
    color: var(--dark-text);
  }

  .resume-edu-degree em {
    font-style: italic;
    color: var(--dark-text-dim);
  }

  .resume-edu-year {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--dark-text-faint);
    flex-shrink: 0;
  }

  .resume-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .resume-skill {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    color: var(--dark-text-dim);
    padding: 6px 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 100px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .resume-skill:hover {
    border-color: var(--accent);
    color: var(--dark-text);
  }

  @media(max-width: 600px) {
    .resume { padding: 40px 24px 80px; }
    .resume-entry { padding: 22px; border-radius: 16px; }
    .resume-entry-header { flex-direction: column; }
    .resume-meta { text-align: left; }
  }
`;

const EXPERIENCE = [
  {
    role: "Project Manager",
    org: "Dalio Family Office (prev. Bridgewater Associates)",
    date: "Jan 2022 \u2013 May 2025",
    location: "Westport, CT",
    bullets: [
      "Built and launched the annual strategic planning process end-to-end. Designed the framework from scratch, ran stakeholder alignment with C-suite, tracked progress, and delivered reporting to senior leadership.",
      "Co-led a multi-million-dollar program spanning internal teams, external partners, and vendors; responsible for budget, resource allocation, and on-time delivery across all workstreams.",
      "Designed and implemented process optimization initiatives that measurably reduced operational friction and improved stakeholder satisfaction.",
      "Used AI tools (ChatGPT, Claude) to accelerate synthesis of complex operational and stakeholder data, cutting time-to-insight on executive reporting significantly.",
      "Built real-time dashboards and reporting infrastructure in Tableau that gave leadership visibility into program health, risks, and performance.",
      "Developed organizational playbooks and SOPs that codified best practices and enabled teams to scale processes without proportional headcount growth.",
    ],
  },
  {
    role: "Business Analyst / Junior Project Manager",
    org: "Bridgewater Associates",
    date: "Mar 2019 \u2013 Jan 2022",
    location: "Westport, CT",
    bullets: [
      "Designed and owned a cross-departmental culture measurement initiative from scratch. Built the survey instrument, ran quantitative and qualitative analysis, and delivered findings that resulted in measurable improvements in employee engagement.",
      "Managed organization-wide KPI tracking and performance reporting via Tableau dashboards; partnered with business leaders to surface risks and translate data into decisions.",
      "Led change management and adoption strategy for a CRM system upgrade. Stakeholder comms, training materials, user acceptance testing, and full rollout coordination.",
      "Built internal knowledge management systems, process guides, and resource libraries that enabled faster onboarding and more consistent team execution.",
    ],
  },
];

const RESEARCH = [
  {
    role: "Research Assistant",
    org: "Teachers College, Columbia University",
    date: "2025 \u2013 Present",
    location: "New York, NY",
    bullets: [
      "Supporting early-stage academic research investigating whether AI-mediated decision support tools influence human behavioral reasoning and decision-making.",
      "Contributing to study design including control variable selection and methodology; helping ensure research rigor from conception to data collection.",
      "Conducted independent comparative analysis of how different AI models approach decision-making tasks, examining how model design choices affect user outcomes.",
      "Reviewing and editing research paper drafts, translating complex behavioral theory into clear, precise academic prose.",
    ],
  },
];

const EDUCATION = [
  { degree: "M.A. Social-Organizational Psychology", school: "Teachers College, Columbia University", year: "Expected May 2027" },
  { degree: "B.A. Psychology", school: "Lehigh University", year: "2018" },
];

const SKILLS = [
  "Strategic Planning & Execution",
  "Cross-Functional Program Management",
  "KPI Development & Reporting",
  "Process Design & Optimization",
  "Organizational Change Management",
  "Stakeholder Management (C-Suite)",
  "Data Analysis & Visualization (Tableau)",
  "Survey Design & Research Methods",
  "AI-Augmented Workflows (ChatGPT, Claude)",
  "Vendor & Budget Management",
];

function EntryCard({ entry }) {
  return (
    <div className="resume-entry">
      <div className="resume-entry-header">
        <div className="resume-role">
          {entry.role} <em>| {entry.org}</em>
        </div>
        <div className="resume-meta">
          {entry.date}<br />{entry.location}
        </div>
      </div>
      <ul className="resume-bullets">
        {entry.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

export default function Resume({ onHover }) {
  const hover = onHover || (() => {});
  const [nameImg, setNameImg] = useState(null);

  useEffect(() => {
    Promise.all([
      document.fonts.load("italic 400 160px 'Instrument Serif'"),
      document.fonts.load("400 320px 'Gravitas One'"),
    ]).then(() => {
      const c = document.createElement('canvas');
      c.width = 3200;
      c.height = 600;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      // "Abby" — thin italic
      ctx.font = "italic 400 220px 'Instrument Serif'";
      ctx.fillText('Abby', 1600, 230);
      // "SCHNEIDER" — big bubble letters
      ctx.font = "400 260px 'Gravitas One'";
      ctx.fillText('SCHNEIDER', 1600, 490);
      setNameImg(c.toDataURL());
    });
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <div className="resume">
        <h1 className="sr-only">Abby Schneider</h1>
        {nameImg && (
          <div className="resume-name-metal">
            <LiquidMetal
              width={3200}
              height={600}
              image={nameImg}
              colorBack="#0a0f0a"
              colorTint="#e8e0d0"
              shape="none"
              speed={0.15}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        )}
        <div className="resume-header">
          <div className="resume-contact">
            <a href="mailto:abbyschneider4@gmail.com" onMouseEnter={() => hover(true)} onMouseLeave={() => hover(false)}>
              abbyschneider4@gmail.com
            </a>
            <span className="sep">&middot;</span>
            <span>Brooklyn, NY</span>
            <span className="sep">&middot;</span>
            <span>203-858-5241</span>
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-section-title">[Experience]</div>
          {EXPERIENCE.map((e, i) => <EntryCard key={i} entry={e} />)}
        </div>

        <div className="resume-section">
          <div className="resume-section-title">[Research]</div>
          {RESEARCH.map((e, i) => <EntryCard key={i} entry={e} />)}
        </div>

        <div className="resume-section">
          <div className="resume-section-title">[Education]</div>
          {EDUCATION.map((e, i) => (
            <div key={i} className="resume-edu-item">
              <div className="resume-edu-degree">{e.degree} <em>&middot; {e.school}</em></div>
              <div className="resume-edu-year">{e.year}</div>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <div className="resume-section-title">[Skills & Tools]</div>
          <div className="resume-skills">
            {SKILLS.map((s, i) => <PulsingPill key={i} as="span" className="resume-skill" maxPixelCount={40000}>{s}</PulsingPill>)}
          </div>
        </div>
      </div>
    </>
  );
}
