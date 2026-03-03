# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (port 3000)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- No test framework is configured.

## Architecture

This is a **Next.js 16** App Router site for **PLMR**, a strategic communications agency. It's currently a single-page landing site with server-rendered components.

### Styling approach

The project uses a **hybrid CSS strategy**:
- **`app/globals.css`** contains most component styles using BEM-like naming (`.component__element`) plus Tailwind v4 `@theme` tokens for the PLMR brand palette (curious-blue, malibu, blumine, light-yellow).
- Some components (PurposeSection, ServicesSection) use **Tailwind utility classes** directly in JSX instead.
- Responsive sizing relies heavily on `clamp()` for fluid typography and spacing, with media query breakpoints at 1200px, 1100px, 1024px, 980px, 860px, 700px, and 640px.

### Component conventions

- Files are **kebab-case** (`home-hero.tsx`), exports are **PascalCase** (`HomeHero`).
- All components are **server components** except `ScrollVelocityBand` which uses `"use client"` for scroll-driven animation with `requestAnimationFrame`.
- Types are defined at the top of each file. Constants use UPPER_SNAKE_CASE.
- Path alias: `@/*` maps to the project root.

### Brand

- Font: **Poppins** (loaded via `next/font/google`, weights 400/500/700/800)
- Primary blue: `--plmr-curious-blue: #1f9dd8`
- Dark blue: `--plmr-blumine: #205081`
- Light blue: `--plmr-malibu: #8ed1fc`
- Accent yellow: `--plmr-light-yellow: #fff5d6`
