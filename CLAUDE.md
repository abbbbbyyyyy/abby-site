# abbyschneider.nyc

## What this is

Personal portfolio site for Abby Schneider — operations person turned builder, coming from six years at Bridgewater/Dalio Family Office, currently doing a master's at Columbia in organizational psychology. The site is a job-hunting portfolio that shows who she is and what she can build, not just what she's done.

## Goal

Demonstrate that Abby can actually build things, not just manage processes. The site itself is the proof — she designed and coded it. The featured project (Crux) shows she can think about how people make decisions and turn that into a working product. The whole thing is meant to land a role at a company doing genuinely interesting work.

## Architecture

- **React + Vite** single-page app, no router — view state (`home`, `crux`, `resume`) managed via `useState` in App.jsx
- **Deployed on Vercel** with `vercel.json` handling rewrites for the API route and SPA fallback
- **Serverless API** at `api/analyze.js` — a single Vercel serverless function that proxies to the Anthropic API (Claude) for Crux's decision analysis
- **No CSS framework** — all styles are inline template literals in each component

## Key files

- `src/App.jsx` — Main portfolio: hero with LiquidMetal shader name, about section, project list, contact, footer. All navigation is in-app via view state.
- `src/Crux.jsx` — The "Crux" decision tool. User enters a decision and context, hits Analyze, and gets pros/cons/insight from Claude via the API. Users can record their verdict and save analyses to a local archive (localStorage).
- `src/Resume.jsx` — Interactive resume with experience at Bridgewater/Dalio, research at Columbia, education, and skills.
- `api/analyze.js` — Vercel serverless function that calls the Anthropic Messages API. Uses `ANTHROPIC_API_KEY` env var. Model: `claude-sonnet-4-20250514`.
- `public/` — SVG assets for the name treatment (abby.svg, schneider.svg) and other title graphics.

## Visual style

Dark theme (near-black `#050508` background), purple/violet/indigo accent palette, glassmorphism cards, custom cursor trail on desktop. Heavy use of `@paper-design/shaders-react` LiquidMetal effect on title text (hero name, Crux "decisive" title, resume header). Fonts: Inter for body, Instrument Serif for display, Gravitas One for shader-rendered titles.

## Dev commands

```
npm run dev      # local dev server (Vite)
npm run build    # production build to dist/
npm run preview  # preview production build locally
```

Note: Crux's analyze feature requires `ANTHROPIC_API_KEY` to be set (works automatically on Vercel via env vars; for local dev you'd need to handle the API route separately since `api/analyze.js` is a Vercel serverless function, not a Vite route).
