import { useState, useEffect, useRef } from "react";
import { PulsingBorder } from "@paper-design/shaders-react";

const GOLD_COLORS = ["#ccbb87", "#a89960", "#e6d8ad"];
const WARM_COLORS = ["#b8a878", "#8a7a50", "#d4c498"];
const ACCENT_COLORS = ["#ccbb87", "#c9a84c", "#e6d8ad"];

const COLOR_MAP = {
  purple: GOLD_COLORS,
  blue: WARM_COLORS,
  violet: ACCENT_COLORS,
};

// Shared IntersectionObserver for all PulsingPill instances
let sharedObserver = null;
const observerCallbacks = new WeakMap();

function getSharedObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = observerCallbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { rootMargin: "100px" }
    );
  }
  return sharedObserver;
}

// Shared reduced-motion query
let reducedMotionQuery = null;
function getReducedMotionQuery() {
  if (!reducedMotionQuery) {
    reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  }
  return reducedMotionQuery;
}

export default function PulsingPill({
  children,
  isActive = false,
  colorVariant = "purple",
  disabled = false,
  as: Tag = "div",
  className = "",
  style = {},
  maxPixelCount,
  ...rest
}) {
  const wrapRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [borderW, setBorderW] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Reduced motion
  useEffect(() => {
    const mq = getReducedMotionQuery();
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // IntersectionObserver — lazy mount shader
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = getSharedObserver();
    const cb = (isVis) => setVisible(isVis);
    observerCallbacks.set(el, cb);
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      observerCallbacks.delete(el);
    };
  }, []);

  // ResizeObserver — track dynamic size
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: Math.round(width), h: Math.round(height) });
      const bw = parseFloat(getComputedStyle(el).borderTopWidth) || 0;
      setBorderW(bw);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const showShader = visible && !reducedMotion && !disabled && size.w > 0 && size.h > 0;
  const colors = COLOR_MAP[colorVariant] || GOLD_COLORS;
  const intensity = hovered || isActive ? 0.35 : 0.2;
  const bloom = hovered || isActive ? 0.4 : 0.25;
  const thickness = 0.08;

  return (
    <Tag
      ref={wrapRef}
      className={className}
      disabled={disabled || undefined}
      style={{
        position: "relative",
        isolation: "isolate",
        ...style,
        borderColor: showShader ? "transparent" : undefined,
      }}
      onMouseEnter={(e) => {
        setHovered(true);
        if (rest.onMouseEnter) rest.onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setHovered(false);
        if (rest.onMouseLeave) rest.onMouseLeave(e);
      }}
      {...(() => {
        const { onMouseEnter, onMouseLeave, ...passthrough } = rest;
        return passthrough;
      })()}
    >
      {showShader && (
        <PulsingBorder
          style={{
            position: "absolute",
            inset: -borderW,
            zIndex: -1,
            pointerEvents: "none",
            borderRadius: "inherit",
          }}
          webGlContextAttributes={{ alpha: true }}
          colors={colors}
          colorBack="#00000000"
          scale={1}
          roundness={1}
          thickness={thickness}
          softness={0.8}
          intensity={intensity}
          bloom={bloom}
          spots={4}
          spotSize={0.5}
          pulse={0.3}
          smoke={0.15}
          smokeSize={0.4}
          speed={0.8}
          maxPixelCount={maxPixelCount || 80000}
        />
      )}
      {children}
    </Tag>
  );
}
