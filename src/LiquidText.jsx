import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";

function buildMaskDataUrl({
  text,
  width,
  height,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  letterSpacing,
  baseline,
}) {
  const safeText = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

  const fontSizePx = `${fontSize}px`;
  const letterSpacingPx = `${letterSpacing}px`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="black"/>
    <text x="2" y="${baseline}" fill="white" font-family="${fontFamily}" font-size="${fontSizePx}" font-weight="${fontWeight}" font-style="${fontStyle}" letter-spacing="${letterSpacingPx}" xml:space="preserve">${safeText}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default function LiquidText({ text, className = "" }) {
  const sizerRef = useRef(null);
  const [maskData, setMaskData] = useState(null);

  useLayoutEffect(() => {
    const el = sizerRef.current;
    if (!el) return;

    const refresh = () => {
      const cs = window.getComputedStyle(el);
      const fontSize = parseFloat(cs.fontSize) || 16;
      const fontFamily = cs.fontFamily || "serif";
      const fontWeight = cs.fontWeight || "400";
      const fontStyle = cs.fontStyle || "normal";
      const letterSpacing = parseFloat(cs.letterSpacing);
      const normalizedLetterSpacing = Number.isFinite(letterSpacing) ? letterSpacing : 0;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
      const metrics = ctx.measureText(text);
      const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.8;
      const descent = metrics.actualBoundingBoxDescent || fontSize * 0.24;

      const width = Math.max(
        1,
        Math.ceil(metrics.width + normalizedLetterSpacing * Math.max(0, text.length - 1) + 4)
      );
      const height = Math.max(1, Math.ceil(ascent + descent + 4));
      const baseline = Math.ceil(ascent + 2);

      const maskUrl = buildMaskDataUrl({
        text,
        width,
        height,
        fontFamily,
        fontSize,
        fontWeight,
        fontStyle,
        letterSpacing: normalizedLetterSpacing,
        baseline,
      });

      setMaskData({ maskUrl, width, height });
    };

    refresh();

    const ro = new ResizeObserver(refresh);
    ro.observe(el);
    window.addEventListener("resize", refresh);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", refresh);
    };
  }, [text]);

  const layerStyle = useMemo(() => {
    if (!maskData) return null;
    return {
      position: "absolute",
      inset: 0,
      width: `${maskData.width}px`,
      height: `${maskData.height}px`,
      pointerEvents: "none",
      WebkitMaskImage: `url("${maskData.maskUrl}")`,
      maskImage: `url("${maskData.maskUrl}")`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "100% 100%",
      maskSize: "100% 100%",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      filter: "drop-shadow(0 0 14px rgba(99,102,241,0.24)) drop-shadow(0 0 28px rgba(139,92,246,0.2))",
    };
  }, [maskData]);

  return (
    <span
      className={className}
      style={{ display: "inline-block", position: "relative", verticalAlign: "baseline" }}
    >
      <span
        ref={sizerRef}
        style={{
          display: "inline-block",
          whiteSpace: "pre",
          opacity: maskData ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        {text}
      </span>

      {maskData ? (
        <span aria-hidden style={layerStyle}>
          <LiquidMetal
            width={maskData.width}
            height={maskData.height}
            colorBack="#3b2f66"
            colorTint="#f3f0ff"
            speed={0.45}
            scale={0.7}
            distortion={0.08}
            repetition={2.2}
            contour={0.42}
            softness={0.12}
            shiftRed={0.24}
            shiftBlue={0.24}
            angle={68}
            shape="none"
            style={{ width: "100%", height: "100%" }}
          />
        </span>
      ) : null}
    </span>
  );
}
