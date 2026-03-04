# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (port 3000)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- No test framework is configured.

## Architecture

This is a **Next.js 16** App Router site for **PLMR**, a strategic communications agency. It's currently a single-page landing site.

### Styling approach

The project uses **CSS Modules** as the primary styling approach:
- Each component has a co-located `.module.css` file (e.g. `home-hero.module.css` alongside `home-hero.tsx`).
- **`app/globals.css`** (~87 lines) contains only: `@import "tailwindcss"`, `:root` variables, `@theme inline` block, `body` reset, and `.plmr-body`/`.plmr-shell`/`.plmr-main` layout classes.
- Three components (`ServicesSection`, `BlueCapsuleMosaic`, `ScrollVelocityBand`) use **Tailwind utility classes** directly in JSX instead of CSS Modules.
- Responsive sizing relies heavily on `clamp()` for fluid typography and spacing, with media query breakpoints at 1200px, 1180px, 1100px, 1024px, 980px, 860px, 700px, 640px, and 480px.

### Shared components

- **`ChevronIcon`** — reusable SVG chevron with `direction`, `size`, `strokeWidth`, `className` props.
- **`SectionHeading` + `Highlight`** — shared `<h2>` pattern with accent highlight span. Supports `color="white"` for dark backgrounds.
- **`SectionCta`** — link with animated chevron. Supports `variant="light"` for dark backgrounds.
- **`SocialIcon`** — renders social platform SVG icons by label name.
- **`carousel.module.css`** — shared base styles (track, slide, nav buttons) used by work, news, and awards carousels.

### Hooks

- **`useCarousel`** (`hooks/use-carousel.ts`) — scroll logic + hover dimming state for work and news carousels.
- **`useAutoScroll`** (`hooks/use-auto-scroll.ts`) — `requestAnimationFrame` auto-scroll loop for the awards carousel.

### Component conventions

- Files are **kebab-case** (`home-hero.tsx`), exports are **PascalCase** (`HomeHero`).
- Client components: `IntroScreen`, `SiteNavbar`, `PurposeSection`, `WorkCarousel`, `NewsCarousel`, `AwardsCarousel`, `ScrollVelocityBand`, `BlueCapsuleMosaic`. All others are server components.
- Types are defined at the top of each file. Constants use UPPER_SNAKE_CASE.
- Path alias: `@/*` maps to the project root.

### Brand

- Font: **Poppins** (loaded via `next/font/google`, weights 400/500/700/800)
- Primary blue: `--plmr-curious-blue: #1f9dd8`
- Dark blue: `--plmr-blumine: #205081`
- Light blue: `--plmr-malibu: #8ed1fc`
- Accent yellow: `--plmr-light-yellow: #fff5d6`
- Section background: `--plmr-section-bg: #f3f4f6`
