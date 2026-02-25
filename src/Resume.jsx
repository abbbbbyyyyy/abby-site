import LiquidText from "./LiquidText";

const STYLES = `
  .resume {
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 48px 120px;
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text);
  }

  .resume-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .resume-name {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(40px, 7vw, 64px);
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .resume-liquid { color: var(--text); font-style: italic; }

  .resume-contact {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 20px;
    font-size: 13px;
    color: var(--text-dim);
  }

  .resume-contact a {
    color: var(--text-dim);
    text-decoration: none;
    transition: color 0.3s;
  }

  .resume-contact a:hover { color: var(--purple); }

  .resume-contact .sep { color: var(--text-faint); }

  .resume-section {
    margin-bottom: 48px;
  }

  .resume-section-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--glass-border);
  }

  .resume-entry {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 28px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }

  .resume-entry::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
    opacity: 0.4;
  }

  .resume-entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .resume-role {
    font-family: 'Instrument Serif', serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--text);
    line-height: 1.3;
  }

  .resume-role em {
    font-style: italic;
    color: var(--text-dim);
    font-size: 18px;
  }

  .resume-meta {
    font-size: 12px;
    color: var(--text-faint);
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
    color: var(--text-dim);
    margin-bottom: 10px;
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
    background: var(--purple);
    opacity: 0.4;
  }

  .resume-edu-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid var(--glass-border);
    flex-wrap: wrap;
  }

  .resume-edu-item:last-child { border-bottom: none; }

  .resume-edu-degree {
    font-family: 'Instrument Serif', serif;
    font-size: 18px;
    color: var(--text);
  }

  .resume-edu-degree em {
    font-style: italic;
    color: var(--text-dim);
  }

  .resume-edu-year {
    font-size: 12px;
    color: var(--text-faint);
    flex-shrink: 0;
  }

  .resume-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .resume-skill {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-dim);
    padding: 6px 16px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .resume-skill:hover {
    border-color: var(--purple);
    color: var(--text);
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
    date: "Jan 2022 – May 2025",
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
    date: "Mar 2019 – Jan 2022",
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
    date: "2025 – Present",
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

  return (
    <>
      <style>{STYLES}</style>
      <div className="resume">
        <div className="resume-header">
          <h1 className="resume-name">Abby <LiquidText text="Schneider" className="resume-liquid" /></h1>
          <div className="resume-contact">
            <a href="mailto:abbyschneider4@gmail.com" onMouseEnter={() => hover(true)} onMouseLeave={() => hover(false)}>
              abbyschneider4@gmail.com
            </a>
            <span className="sep">·</span>
            <span>Brooklyn, NY</span>
            <span className="sep">·</span>
            <span>203-858-5241</span>
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-section-title">Experience</div>
          {EXPERIENCE.map((e, i) => <EntryCard key={i} entry={e} />)}
        </div>

        <div className="resume-section">
          <div className="resume-section-title">Research</div>
          {RESEARCH.map((e, i) => <EntryCard key={i} entry={e} />)}
        </div>

        <div className="resume-section">
          <div className="resume-section-title">Education</div>
          {EDUCATION.map((e, i) => (
            <div key={i} className="resume-edu-item">
              <div className="resume-edu-degree">{e.degree} <em>· {e.school}</em></div>
              <div className="resume-edu-year">{e.year}</div>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <div className="resume-section-title">Skills & Tools</div>
          <div className="resume-skills">
            {SKILLS.map((s, i) => <span key={i} className="resume-skill">{s}</span>)}
          </div>
        </div>
      </div>
    </>
  );
}
