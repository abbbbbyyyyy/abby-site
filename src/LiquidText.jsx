import { LiquidMetal } from "@paper-design/shaders-react";

export default function LiquidText({ text, className = "" }) {
  const svg = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="120">
      <text x="0" y="90" font-family="Instrument Serif, serif" font-size="110" font-weight="400" fill="white">${text}</text>
    </svg>`
  )}`;

  return (
    <span className={className} style={{ display: "inline-block" }}>
      <LiquidMetal
        width={600}
        height={120}
        image={svg}
        colorBack="ffffff"
        colorTint="#2c5d72"
        shape="none"
        repetition={6}
        softness={0.8}
        shiftRed={1}
        shiftBlue={-1}
        distortion={0.4}
        contour={0.4}
        angle={0}
        speed={1}
        scale={0.6}
        fit="contain"
        style={{ width: "100%", height: "100%" }}
      />
    </span>
  );
} 