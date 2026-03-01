import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { view: "home", label: "Home" },
  { view: "crux", label: "Crux" },
  { view: "alibi", label: "What's Your Alibi" },
  { view: "gutcheck", label: "Gut Check" },
  { view: "resume", label: "Resume" },
  { view: "blog", label: "Stream" },
];

export default function NavDropdown({ currentView, onNavigate, style = {}, className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on click/tap outside
  useEffect(() => {
    if (!open) return;
    const handlePointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const handleKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className={`nav-dropdown${className ? ` ${className}` : ""}`} ref={ref}>
      <button
        className="back-btn"
        style={style}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        AS
      </button>
      <div className={`nav-dropdown-menu${open ? " open" : ""}`}>
        {NAV_ITEMS.map(({ view, label }) => {
          const isCurrent = view === currentView;
          return (
            <button
              key={view}
              className={`nav-dropdown-item${isCurrent ? " current" : ""}`}
              disabled={isCurrent}
              onClick={() => { setOpen(false); onNavigate(view); }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
