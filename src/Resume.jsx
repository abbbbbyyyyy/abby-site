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

  .resume-tagline {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--dark-text-dim);
    margin-top: 8px;
  }

  .resume-project-item {
    padding: 14px 0;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
  }

  .resume-project-item:last-child { border-bottom: none; }

  .resume-project-name {
    font-family: 'Instrument Serif', serif;
    font-size: 18px;
    color: var(--dark-text);
    margin-bottom: 4px;
  }

  .resume-project-desc {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.75;
    color: var(--dark-text-dim);
  }

  .resume-contact .sep { color: var(--dark-text-faint); }

  .resume-download {
    display: inline-block;
    margin-top: 14px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--accent);
    text-decoration: none;
    padding: 8px 20px;
    border: 1px solid rgba(139, 125, 60, 0.3);
    border-radius: 100px;
    transition: all 0.3s ease;
  }
  .resume-download:hover {
    border-color: var(--accent);
    background: rgba(139, 125, 60, 0.08);
    color: var(--accent-light);
  }

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
    .resume-name-metal { margin-top: -16px; margin-bottom: -8px; }
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
    bullets: [
      "Rebuilt and owned the Annual Strategic Planning Program across 15 teams over 3 years, transforming a broken, inconsistent process into a repeatable org-wide system. Led each team through KPI development, metric definition, and priority project identification; synthesized outputs into org-wide project portfolio of 80\u2013100 active initiatives. Maintained visibility into dependencies and resource constraints; advised senior leadership on prioritization and sequencing tradeoffs. Partnered with Finance on annual budgeting process across all teams. Built automated dashboards tracking KPIs org-wide, replacing ad-hoc status updates with standardized monthly reporting to senior leadership.",
      "Led the organization\u2019s highest-complexity annual program ($8\u201310M budget, 2,000+ stakeholders, 12 vendors): managed end-to-end execution including vendor sourcing, production, logistics coordination, a parallel charitable giving initiative, and real-time shipment tracking. Internally recognized as the most operationally demanding program at the org.",
      "Deployed as internal process consultant across the organization: diagnosed operational bottlenecks, documented current-state workflows, designed and implemented improvements. Reduced average process cycle times by 30\u201340% across engagements; cut manual reporting work by 50%+ in several teams.",
      "Established documentation standards across the organization. Created playbooks, SOPs, and process guides for every initiative touched, building knowledge management infrastructure essentially from scratch in an org with minimal existing documentation.",
    ],
  },
  {
    role: "Business Analyst / Junior Project Manager",
    org: "Bridgewater Associates",
    date: "Mar 2019 \u2013 Jan 2022",
    bullets: [
      "Designed and owned a cross-departmental culture measurement initiative from scratch: built survey instrument, ran quantitative and qualitative analysis across 500+ respondents, delivered findings to leadership that informed policy changes and measurably improved engagement scores.",
      "Served as analytical partner to business leads across departments: synthesized performance data to surface risks early, identify trends, and translate insights into actionable recommendations for leadership.",
      "Led change management for CRM system upgrade across 200+ users: developed communications plan, created training materials, managed user acceptance testing, and drove full rollout. Achieved 95%+ adoption within first month.",
      "Deployed as surge resource to Talent Acquisition during high-volume hiring periods: managed interview coordination, conducted candidate interviews, and contributed to hiring decisions across multiple roles.",
      "Built internal knowledge management systems and onboarding documentation that reduced new hire ramp time by 40% and improved cross-team process consistency.",
    ],
  },
];

const RESEARCH = [
  {
    role: "Research Assistant",
    org: "Teachers College, Columbia University",
    date: "2025 \u2013 Present",
    bullets: [
      "Researching how AI-mediated decision support tools affect human reasoning, with direct applications to AI product design and user behavior.",
      "Contributing to study design and methodology; independently conducted comparative analysis of how different AI models approach complex decision-making tasks.",
    ],
  },
];

const PROJECTS_INTRO = "Built from scratch with zero prior coding experience using Claude Code, Cursor, React, and Vercel.";

const PROJECTS = [
  {
    name: "Crux",
    description: "AI decision-making tool that analyzes choices and surfaces core tensions. Claude API, React.",
  },
  {
    name: "What\u2019s Your Alibi",
    description: "Excuse generator that crafts context-aware, believable alternatives to \u201Cnot feeling well.\u201D",
  },
  {
    name: "Gut Check",
    description: "Personality assessment disguised as a game. Rapid-fire scenarios reveal decision-making patterns.",
  },
];

const EDUCATION = [
  { degree: "M.A. Social-Organizational Psychology", school: "Teachers College, Columbia University", year: "Expected 2027" },
  { degree: "B.A. Psychology", school: "Lehigh University", year: "2018" },
];

const SKILLS = [
  "AI-Assisted Development (Claude Code, Cursor)",
  "Claude API",
  "React",
  "GitHub & Vercel",
  "SQL (Snowflake, BigQuery)",
  "Data Visualization (Tableau, Looker, PowerBI)",
  "Excel",
  "Strategic Planning",
  "Program Management",
  "Process Design & Optimization",
  "Change Management",
  "Survey Design & Research Methods",
];

function EntryCard({ entry }) {
  return (
    <div className="resume-entry">
      <div className="resume-entry-header">
        <div className="resume-role">
          {entry.role} <em>| {entry.org}</em>
        </div>
        <div className="resume-meta">
          {entry.date}
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
          <a href="/Abby_Schneider_Resume.pdf" download className="resume-download" onMouseEnter={() => hover(true)} onMouseLeave={() => hover(false)}>
            Download PDF
          </a>
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
          <div className="resume-section-title">[Personal Projects]</div>
          <div className="resume-project-desc" style={{ marginBottom: 16, fontStyle: 'italic' }}>{PROJECTS_INTRO}</div>
          {PROJECTS.map((p, i) => (
            <div key={i} className="resume-project-item">
              <div className="resume-project-name">{p.name}</div>
              <div className="resume-project-desc">{p.description}</div>
            </div>
          ))}
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
