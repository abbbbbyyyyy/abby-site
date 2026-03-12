import { useState, useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import Crux from "./Crux";
import Resume from "./Resume";
import Alibi from "./Alibi";
import GutCheck from "./GutCheck";
import Blog from "./Blog";
import PulsingPill from "./PulsingPill";
import FlutedGlassBg from "./FlutedGlassBg";
import NavDropdown from "./NavDropdown";
import Lenis from "lenis";


const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Space+Mono:wght@400;700&family=Cormorant+Garant:ital,wght@0,400;1,400;1,500&family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=Gravitas+One&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #e8e4de;
    --bg-alt: #dedad2;
    --text: #1a1a1a;
    --text-dim: #5a5a52;
    --text-faint: #9a9a90;
    --accent: #8B7D3C;
    --accent-light: #a89960;
    --border: rgba(26, 26, 26, 0.1);
    --glass: rgba(255, 255, 255, 0.5);
    --glass-border: rgba(26, 26, 26, 0.08);
    --dark-bg: #0a0f0a;
    --dark-text: #e8e0d0;
    --dark-text-dim: rgba(232, 224, 208, 0.6);
    --dark-text-faint: rgba(232, 224, 208, 0.35);
  }

  html { background: var(--dark-bg); }
  body { background: var(--dark-bg); overflow-x: clip; }

  ::selection { background: var(--accent); color: var(--dark-text); }

  .portfolio {
    min-height: 100vh;
    background: var(--dark-bg);
    color: var(--text);
    font-family: 'Inter', -apple-system, sans-serif;
    overflow-x: clip;
  }

  /* Static film grain overlay */
  .portfolio::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 9998;
    pointer-events: none;
    opacity: 0.18;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='2' intercept='-0.5'/%3E%3CfeFuncG type='linear' slope='2' intercept='-0.5'/%3E%3CfeFuncB type='linear' slope='2' intercept='-0.5'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 200px 200px;
  }

  /* Cursor */
  .cursor {
    position: fixed;
    width: 12px;
    height: 12px;
    background: #e8e0d0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transform: translate(-50%, -50%);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* ═══════════════════════════════════
     NAV — Editorial fixed header
     ═══════════════════════════════════ */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 28px 5vw;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    z-index: 10000;
    mix-blend-mode: difference;
  }

  .nav-initials {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #e8e0d0;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
  }

  .nav-links { display: flex; gap: 36px; justify-self: center; }

  .nav-link {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(232, 224, 208, 0.5);
    text-decoration: none;
    transition: color 0.3s ease;
    border: none;
    background: none;
    cursor: pointer;
  }

  .nav-link:hover { color: #e8e0d0; }

  .nav-year {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    color: rgba(232, 224, 208, 0.4);
    justify-self: end;
  }

  /* Hamburger toggle (hidden on desktop) */
  .nav-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 28px;
    height: 28px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 102;
  }

  .nav-hamburger span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: #e8e0d0;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .nav-hamburger.open span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }

  .nav-hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .nav-hamburger.open span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  /* Full-screen mobile menu overlay */
  .mobile-menu {
    display: none;
    position: fixed;
    inset: 0;
    background: var(--dark-bg);
    z-index: 99;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  .mobile-menu.open {
    opacity: 1;
    pointer-events: all;
  }

  .mobile-menu-link {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    color: var(--dark-text);
    text-decoration: none;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .mobile-menu-link:hover {
    color: var(--accent);
  }

  /* ═══════════════════════════════════
     HERO — Dark cinematic, two states
     ═══════════════════════════════════ */
  .hero {
    position: relative;
    height: 200vh;
    background: var(--dark-bg);
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    top: -20vh;
    left: 0;
    right: 0;
    bottom: -20vh;
    background-image: url('/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(3px) brightness(0.9);
    will-change: transform;
    z-index: 0;
  }

  .hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  /* State 1: Giant initials */
  .hero-state1 {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2vw;
    z-index: 1;
  }

  .hero-initials {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0;
    width: 100%;
    line-height: 0.78;
    will-change: transform, opacity;
  }

  .hero-initial {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 900;
    font-size: clamp(36px, 12vw, 160px);
    color: var(--dark-text);
    text-transform: uppercase;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .hero-line {
    width: 1px;
    height: 20vh;
    background: var(--accent);
    align-self: center;
    margin: 0 3vw;
    will-change: transform;
  }

  /* State 2: Intro text */
  .hero-state2 {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    padding: 10vh 5vw;
    z-index: 1;
  }

  .hero-intro-line {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: clamp(28px, 5.5vw, 72px);
    text-transform: uppercase;
    color: var(--dark-text);
    line-height: 1.15;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .hero-intro-line.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-intro-line:nth-child(2) { transition-delay: 0.1s; }
  .hero-intro-line:nth-child(3) { transition-delay: 0.2s; }
  .hero-intro-line:nth-child(4) { transition-delay: 0.3s; }
  .hero-intro-line:nth-child(5) { transition-delay: 0.4s; }
  .hero-intro-line:nth-child(6) { transition-delay: 0.5s; }

  .hero-intro-line em {
    font-family: 'Cormorant Garant', serif;
    font-style: italic;
    font-weight: 400;
    text-transform: none;
    font-size: 1.1em;
  }

  .hero-anno {
    font-family: 'Space Mono', monospace;
    font-size: 0.35em;
    letter-spacing: 0.15em;
    vertical-align: super;
    color: var(--dark-text-dim);
  }

  .hero-intro-small {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark-text-faint);
    margin-top: 48px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s;
  }

  .hero-intro-small.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ═══════════════════════════════════
     SECTIONS — Light mode
     ═══════════════════════════════════ */
  .section {
    padding: 80px 48px;
    position: relative;
    background: var(--bg);
  }

  .section-label {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 44px;
  }

  @keyframes fadeUp { to { opacity: 1; } }

  /* About */
  #about { background: var(--dark-bg); z-index: 9999; }
  #about .section-label { color: var(--accent-light); }

  .about-wrap {
    max-width: 760px;
    margin: 0 auto;
    text-align: center;
  }

  .about-text {
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
  }

  .about-text p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.9;
    color: var(--text-dim);
    margin-bottom: 24px;
  }

  .about-text p:last-child { margin-bottom: 0; }
  .about-text strong { color: var(--text); font-weight: 500; }
  .about-text a { color: var(--accent); text-decoration: none; border-bottom: 1px solid var(--accent-light); transition: border-color 0.2s; }
  .about-text a:hover { border-color: var(--accent); }

  .about-card {
    margin-top: 28px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 24px;
    padding: 36px 40px;
    position: relative;
    overflow: hidden;
  }
  #about .about-text p { color: var(--dark-text-dim); }
  #about .about-text strong { color: var(--dark-text); font-weight: 500; }
  #about .about-text a { color: var(--accent-light); border-bottom-color: var(--accent-light); }

  .about-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.5;
  }

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
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
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
    color: var(--accent);
  }

  /* ═══════════════════════════════════
     PROJECTS — Editorial layout
     ═══════════════════════════════════ */
  .projects-section {
    position: relative;
    min-height: 200vh;
    background: var(--bg);
  }

  .projects-header {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    will-change: opacity;
  }

  .projects-header-anno {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 32px;
  }

  .projects-header-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3vw;
  }

  .projects-header-word {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(48px, 13vw, 200px);
    text-transform: uppercase;
    color: var(--text);
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .projects-header-accent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .projects-header-accent span {
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.3em;
    color: var(--accent);
    text-transform: uppercase;
  }

  .projects-header-accent span:first-child,
  .projects-header-accent span:last-child {
    font-size: 18px;
    letter-spacing: 0;
    line-height: 1;
  }

  /* Project cards grid */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8vh 12vw;
    padding: 10vh 5vw 16px;
    position: relative;
    z-index: 2;
    background: var(--bg);
  }

  .projects-grid-accent {
    position: absolute;
    left: 50%;
    top: 80px;
    bottom: 80px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    z-index: 2;
    pointer-events: none;
  }

  .projects-grid-accent span {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.3em;
    color: var(--accent);
    text-transform: uppercase;
    opacity: 0.6;
  }

  .projects-grid-accent span:first-child,
  .projects-grid-accent span:last-child {
    font-size: 16px;
    letter-spacing: 0;
    opacity: 0.4;
  }

  /* Individual card */
  .project-card {
    width: 100%;
    max-width: 600px;
  }

  .project-card-clickable { cursor: pointer; }

  .project-card-left { margin-top: 0; }
  .project-card-right { margin-top: 16vh; }
  .project-card:nth-child(4) { margin-top: -12vh; }

  .project-card-img-wrap {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: 3px;
    background: var(--bg-alt);
  }

  .project-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  }

  .project-card:hover .project-card-img {
    transform: scale(1.02);
    filter: grayscale(0%) brightness(1.04);
  }

  .project-card-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 0;
  }

  .project-card-name {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .project-card-type {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-faint);
    background: none;
    border: none;
    padding: 6px 16px;
    border-radius: 100px;
    display: inline-flex;
    align-items: center;
  }

  /* Contact */
  .contact-section {
    padding: 48px 48px;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: var(--bg);
  }

  .contact-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 40%, rgba(139, 125, 60, 0.05), transparent);
    pointer-events: none;
    z-index: 0;
  }

  .contact-section > * {
    position: relative;
    z-index: 1;
  }

  .contact-heading {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(48px, 8vw, 100px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 48px;
    text-transform: uppercase;
    color: var(--text);
  }

  .contact-heading em {
    font-family: 'Cormorant Garant', serif;
    font-style: italic;
    font-weight: 400;
    color: var(--accent);
    text-transform: none;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    position: relative;
  }

  .contact-link {
    font-family: 'Space Mono', monospace;
    padding: 14px 28px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text);
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    cursor: pointer;
  }

  .contact-link:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 20px rgba(139, 125, 60, 0.15);
    transform: translateY(-2px);
  }

  /* Footer */
  .footer {
    padding: 32px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border);
    background: var(--bg);
  }

  .footer-text {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--text-faint);
  }

  /* Crux/Resume wrappers */
  .crux-wrapper { min-height: 100vh; padding-top: 48px; background: var(--dark-bg); }

  .back-btn {
    position: fixed;
    top: 28px;
    left: 5vw;
    z-index: 101;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #e8e0d0;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  .back-btn:hover { color: var(--accent); }

  /* Nav dropdown */
  .nav-dropdown {
    position: fixed;
    top: 28px;
    left: 5vw;
    z-index: 10000;
  }

  .nav-dropdown .back-btn {
    position: static;
  }

  .nav-dropdown-blend .back-btn {
    mix-blend-mode: difference;
  }

  .nav-dropdown-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    min-width: 200px;
    mix-blend-mode: normal;
    isolation: isolate;
    background: rgba(20, 20, 20, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 224, 208, 0.1);
    border-radius: 12px;
    padding: 8px 0;
    opacity: 0;
    transform: translateY(-8px);
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .nav-dropdown-menu.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav-dropdown-item {
    display: block;
    width: 100%;
    padding: 10px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(232, 224, 208, 0.6);
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: color 0.2s ease, background 0.2s ease;
  }

  .nav-dropdown-item:hover:not(:disabled) {
    color: #e8e0d0;
    background: rgba(232, 224, 208, 0.06);
  }

  .nav-dropdown-item.current {
    color: var(--accent);
    cursor: default;
  }

  /* ═══════════════════════════════════
     SCROLL EFFECTS
     ═══════════════════════════════════ */
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent);
    transform-origin: left;
    transform: scaleX(0);
    z-index: 9997;
    pointer-events: none;
    will-change: transform;
  }

  .section-divider {
    display: flex;
    justify-content: center;
    padding: 0;
    overflow: hidden;
    background: var(--bg);
  }

  .section-divider-line {
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    transform: scaleX(0);
    transition: transform 0.6s ease-out;
  }

  .section-divider-line.visible { transform: scaleX(1); }

  /* Reveal animations */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .reveal.visible { opacity: 1; transform: translateY(0); }

  .reveal-left {
    opacity: 0;
    transform: translateX(-60px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .reveal-left.visible { opacity: 1; transform: translateX(0); }

  .reveal-right {
    opacity: 0;
    transform: translateX(60px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .reveal-right.visible { opacity: 1; transform: translateX(0); }

  .reveal-clip {
    clip-path: inset(0 100% 0 0);
    transition: clip-path 0.6s ease-out;
  }

  .reveal-clip.visible { clip-path: inset(0 0% 0 0); }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .reveal, .reveal-left, .reveal-right {
      opacity: 1;
      transform: none;
      transition: none;
    }
    .reveal-clip { clip-path: none; transition: none; }
    .section-divider-line { transform: scaleX(1); transition: none; }
    .scroll-progress { display: none; }
    .hero-intro-line, .hero-intro-small {
      opacity: 1;
      transform: none;
      transition: none;
    }
    .hero-initials { will-change: auto; }
  }

  /* ═══════════════════════════════════
     MOBILE
     ═══════════════════════════════════ */
  @media (max-width: 768px) {
    .nav { padding: 20px 24px; display: flex; justify-content: space-between; }
    .nav-links { display: none; }
    .nav-year { display: none; }
    .nav-hamburger { display: flex; }
    .mobile-menu { display: flex; }
    .hero-initial { font-size: clamp(28px, 10vw, 80px); }
    .hero-initials { margin-bottom: -4vh; }
    .hero-line { height: 15vh; margin: 0 2vw; }
    .hero-state2 { padding: 10vh 24px; }
    .hero-intro-line { font-size: clamp(22px, 7vw, 48px); }
    .section { padding: 76px 24px; }
    .contact-section { padding: 92px 24px; }
    .contact-links { flex-direction: column; gap: 16px; }
    .footer { padding: 24px; flex-direction: column; gap: 12px; }
    .projects-section { min-height: 200vh; }
    .projects-header-word { font-size: clamp(36px, 12vw, 100px); }
    .projects-header-accent { display: none; }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 48px;
      padding: 20vh 24px 80px;
    }
    .projects-grid-accent { display: none; }
    .project-card { width: 100%; max-width: 100%; }
    .project-card-right { margin-top: 0; }
    .project-card:nth-child(4) { margin-top: 0; }
    .back-btn { left: 24px; }
    .nav-dropdown { left: 24px; top: 20px; }
    .nav-dropdown-item { padding: 14px 20px; font-size: 13px; }
    .cursor { display: none; }
    .glass-card { padding: 32px; }
  }
`;

export default function App() {
  const [view, setView] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const initialsRef = useRef(null);
  const progressRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const projectsHeaderRef = useRef(null);
  const heroLineRef = useRef(null);
  const lenisRef = useRef(null);

  // Dismiss loading screen once fonts are ready
  useEffect(() => {
    document.fonts.ready.then(() => {
      const loader = document.getElementById('loader');
      if (!loader) return;
      loader.classList.add('fade-out');
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    });
  }, []);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); lenisRef.current = null; };
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    setMobileMenuOpen(false);
  }, [view]);

  // Stop Lenis when mobile menu is open
  useEffect(() => {
    if (!lenisRef.current) return;
    if (mobileMenuOpen) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [mobileMenuOpen]);

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hero parallax bg + initials fade
  useEffect(() => {
    if (view !== "home") return;
    const bg = heroBgRef.current;
    const initials = initialsRef.current;
    if (!bg) return;
    const line = heroLineRef.current;
    const handleScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      // Parallax background
      bg.style.transform = `translateY(${y * 0.15}px)`;
      // Initials fade out
      if (initials) {
        const progress = Math.min(y / (vh * 0.5), 1);
        initials.style.opacity = 1 - progress;
        initials.style.transform = `translateY(${-progress * 40}px)`;
      }
      // Line moves up faster than content
      if (line) {
        line.style.transform = `translateY(${-y * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  // Intersection observer for reveals
  useEffect(() => {
    const els = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-clip, .section-divider-line, .hero-intro-line, .hero-intro-small'
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));

    // Stagger containers — children animate with 100ms delay between each
    const staggerEls = document.querySelectorAll('[data-stagger]');
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right');
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 100);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    staggerEls.forEach(el => staggerObserver.observe(el));

    return () => { observer.disconnect(); staggerObserver.disconnect(); };
  }, [view]);

  // Projects header fade — requestAnimationFrame loop (not scroll listener)
  useEffect(() => {
    if (view !== "home") return;
    const outer = projectsSectionRef.current;
    const sticky = projectsHeaderRef.current;
    if (!outer || !sticky) return;
    let rafId;
    function updateFade() {
      const rect = outer.getBoundingClientRect();
      const total = outer.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(scrolled / total, 1));
      // Fade out over the first 40% of the scroll
      const opacity = 1 - Math.min(progress / 0.4, 1);
      sticky.style.opacity = opacity;
      rafId = requestAnimationFrame(updateFade);
    }
    rafId = requestAnimationFrame(updateFade);
    return () => cancelAnimationFrame(rafId);
  }, [view]);

  // Scroll progress bar
  useEffect(() => {
    if (view !== "home" || !progressRef.current) return;
    const handleProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      progressRef.current.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener('scroll', handleProgress, { passive: true });
    handleProgress();
    return () => window.removeEventListener('scroll', handleProgress);
  }, [view]);

  /* ────────────────────────────────
     CRUX VIEW
     ──────────────────────────────── */
  if (view === "crux") {
    return (
      <>
        <style>{STYLES}</style>
        <div className="portfolio" key="crux">
          <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }} />
          <div className="crux-wrapper">
            <NavDropdown currentView="crux" onNavigate={setView} />
            <Crux />
          </div>
        </div>
      </>
    );
  }

  /* ────────────────────────────────
     ALIBI VIEW
     ──────────────────────────────── */
  if (view === "alibi") {
    return (
      <>
        <style>{STYLES}</style>
        <div className="portfolio" key="alibi" style={{ background: '#f4f1eb' }}>
          <div className="crux-wrapper" style={{ background: '#f4f1eb' }}>
            <NavDropdown
              currentView="alibi"
              onNavigate={setView}
              style={{ color: '#1a1a1a', mixBlendMode: 'normal' }}
            />
            <Alibi />
          </div>
        </div>
      </>
    );
  }

  /* ────────────────────────────────
     GUTCHECK VIEW
     ──────────────────────────────── */
  if (view === "gutcheck") {
    return (
      <>
        <style>{STYLES}</style>
        <div className="portfolio" key="gutcheck" style={{ background: '#0a0a0a' }}>
          <div className="crux-wrapper" style={{ background: '#0a0a0a' }}>
            <NavDropdown
              currentView="gutcheck"
              onNavigate={setView}
              style={{ color: '#00ff41' }}
            />
            <GutCheck />
          </div>
        </div>
      </>
    );
  }

  /* ────────────────────────────────
     BLOG VIEW
     ──────────────────────────────── */
  if (view === "blog") {
    return (
      <>
        <style>{STYLES}</style>
        <div className="portfolio" key="blog">
          <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }} />
          <div className="crux-wrapper">
            <NavDropdown currentView="blog" onNavigate={setView} />
            <Blog />
          </div>
        </div>
      </>
    );
  }

  /* ────────────────────────────────
     RESUME VIEW
     ──────────────────────────────── */
  if (view === "resume") {
    return (
      <>
        <style>{STYLES}</style>
        <div className="portfolio" key="resume">
          <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }} />
          <div className="crux-wrapper">
            <NavDropdown currentView="resume" onNavigate={setView} />
            <Resume />
          </div>
        </div>
      </>
    );
  }

  /* ────────────────────────────────
     HOME VIEW
     ──────────────────────────────── */
  return (
    <>
      <style>{STYLES}</style>
      <div className="portfolio" key="home">
        {/* Scroll progress */}
        <div className="scroll-progress" ref={progressRef} />

        {/* Cursor */}
        <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }} />

        {/* Nav dropdown — outside nav to avoid mix-blend-mode: difference on menu */}
        <NavDropdown currentView="home" onNavigate={setView} className="nav-dropdown-blend" />

        {/* Nav */}
        <nav className="nav">
          <span className="nav-initials" style={{ visibility: 'hidden' }}>AS</span>
          <div className="nav-links">
            <button className="nav-link" onClick={() => lenisRef.current?.scrollTo('#about')}>Home</button>
            <button className="nav-link" onClick={() => lenisRef.current?.scrollTo('#work')}>Work</button>
            <button className="nav-link" onClick={() => lenisRef.current?.scrollTo('#contact')}>Info</button>
          </div>
          <button
            className={`nav-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
          <span className="nav-year">[2026]</span>
        </nav>

        {/* Mobile menu overlay */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <button className="mobile-menu-link" onClick={() => { setMobileMenuOpen(false); lenisRef.current?.scrollTo('#about'); }}>Home</button>
          <button className="mobile-menu-link" onClick={() => { setMobileMenuOpen(false); lenisRef.current?.scrollTo('#work'); }}>Work</button>
          <button className="mobile-menu-link" onClick={() => { setMobileMenuOpen(false); lenisRef.current?.scrollTo('#contact'); }}>Info</button>
          <button className="mobile-menu-link" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); setView("resume"); }}>Resume</button>
        </div>

        {/* Hero — dark cinematic */}
        <section className="hero" ref={heroRef}>
          <div className="hero-bg" ref={heroBgRef} />
          <h1 className="sr-only">Abby Schneider</h1>

          {/* State 1: Giant initials */}
          <div className="hero-state1">
            <div className="hero-initials" ref={initialsRef}>
              <span className="hero-initial">ABBY</span>
              <div className="hero-line" ref={heroLineRef} />
              <span className="hero-initial">SCHNEIDER</span>
            </div>
          </div>

          {/* State 2: Intro text */}
          <div className="hero-state2">
            <div className="hero-intro-line">
              OPERATOR, PROJECT MANAGER,
            </div>
            <div className="hero-intro-line">
              <em>builder,</em> & everything in between
            </div>
            <div className="hero-intro-small">
              ABBY SCHNEIDER · NEW YORK CITY
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about" style={{ overflow: 'hidden' }}>
          <FlutedGlassBg />
          <div className="about-wrap reveal" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label reveal-clip">About</div>
            <div className="about-card">
              <div className="about-text">
              <p>
                I'm Abby. I live in New York, where most of my free time goes to
                baking bread, the Times crossword, and trying to visit every
                mom-and-pop bookshop in Brooklyn.
              </p>
              <p>
                I spent six years at <strong>Bridgewater</strong> and <strong>Ray Dalio's Family Office</strong> learning
                how to operate inside complex systems. I'm grateful for that foundation.
                It taught me how to think clearly under pressure and get things done at scale.
              </p>
              <p>
                I'm currently pursuing my Master's at <strong>Columbia University</strong> in organizational psychology, where I
                really found an interest in how people make decisions and how technology is
                reshaping that process. Along the way, I started building tools to explore
                those ideas firsthand, and it's become a real passion.
              </p>
              <p>
                I'm looking for a team that I'm excited to show up for;
                somewhere I can bring operational experience and a builder's mindset.
                For the right opportunity, everything else can adjust.
              </p>
              <p>
                I've been building small projects for fun and learning, a few of which
                are below. If you think we'd work well together, <a href="#contact">I'd love to hear from you</a>.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider">
          <div className="section-divider-line" />
        </div>

        {/* Work — Editorial projects */}
        <section className="projects-section" id="work" ref={projectsSectionRef}>
          {/* Sticky header — freezes center-viewport, cards scroll over it */}
          <div className="projects-header" ref={projectsHeaderRef}>
            <div className="projects-header-anno">[SELECTED WORK]</div>
            <div className="projects-header-text">
              <span className="projects-header-word">FEATURED</span>
              <div className="projects-header-accent">
                <span>&#123;</span>
                <span>02</span>
                <span>&#125;</span>
              </div>
              <span className="projects-header-word">PROJECTS</span>
            </div>
          </div>

          {/* Cards layer — z-index 2, solid bg, scrolls over the sticky header */}
          <div className="projects-grid">
            <div className="projects-grid-accent">
              <span>&#91;</span>
              <span>WORK</span>
              <span>&#93;</span>
            </div>

            {/* Crux — left card */}
            <div
              className="project-card project-card-left project-card-clickable reveal-left"
              onClick={() => setView("crux")}
            >
              <div className="project-card-img-wrap">
                <img
                  className="project-card-img"
                  src="/project-crux.jpg"
                  alt="Crux — decision analysis tool"
                />
              </div>
              <div className="project-card-labels">
                <span className="project-card-name">Crux</span>
                <PulsingPill as="span" className="project-card-type">Live →</PulsingPill>
              </div>
            </div>

            {/* What's Your Alibi — right card */}
            <div
              className="project-card project-card-right project-card-clickable reveal-right"
              onClick={() => setView("alibi")}
            >
              <div className="project-card-img-wrap">
                <img
                  className="project-card-img"
                  src="/project-alibi.jpg"
                  alt="What's Your Alibi — excuse generator tool"
                />
              </div>
              <div className="project-card-labels">
                <span className="project-card-name">What's Your Alibi</span>
                <PulsingPill as="span" className="project-card-type">Live →</PulsingPill>
              </div>
            </div>

            {/* Gut Check — third card */}
            <div
              className="project-card project-card-left project-card-clickable reveal-left"
              onClick={() => setView("gutcheck")}
            >
              <div className="project-card-img-wrap">
                <img
                  className="project-card-img"
                  src="/project-gutcheck.jpg"
                  alt="Gut Check — intuition testing tool"
                />
              </div>
              <div className="project-card-labels">
                <span className="project-card-name">Gut Check</span>
                <PulsingPill as="span" className="project-card-type">Live →</PulsingPill>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider">
          <div className="section-divider-line" />
        </div>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <h2 className="contact-heading reveal-clip">
            LET'S <em>talk</em>
          </h2>
          <div className="contact-links" data-stagger>
            <PulsingPill
              as="a"
              className="contact-link reveal"
              href="mailto:abbyschneider4@gmail.com"
            >
              Email
            </PulsingPill>
            <PulsingPill
              as="a"
              className="contact-link reveal"
              href="https://www.linkedin.com/in/abbyschneider2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </PulsingPill>
            <PulsingPill
              as="button"
              className="contact-link reveal"
              onClick={() => { window.scrollTo(0, 0); setView("resume"); }}
            >
              Resume
            </PulsingPill>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer reveal">
          <span className="footer-text">&copy; 2026</span>
          <span className="footer-text">Abby Schneider</span>
        </footer>
      </div>
      <Analytics />
    </>
  );
}
