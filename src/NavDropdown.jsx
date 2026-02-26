import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { view: "home", label: "Home" },
  { view: "crux", label: "Crux" },
  { view: "alibi", label: "What's Your Alibi" },
  { view: "gutcheck", label: "Gut Check" },
  { view: "resume", label: "Resume" },
];

export default function NavDropdown({ currentView, onNavigate, style = {} }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        className="back-btn"
        style={style}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        AS
      </button>
      <div className={`nav-dropdown-menu${open ? " open" : ""}`} style={style.menuStyle}>
        {NAV_ITEMS.map(({ view, label }) => {
          const isCurrent = view === currentView;
          return (
            <button
              key={view}
              className={`nav-dropdown-item${isCurrent ? " current" : ""}`}
              disabled={isCurrent}
              onClick={() => {
                window.scrollTo(0, 0);
                onNavigate(view);
                setOpen(false);
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
