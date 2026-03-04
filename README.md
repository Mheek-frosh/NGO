# Hope in Action — NGO Website

A modern, sleek NGO website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, a distinctive color palette, and all key sections for an impact-focused nonprofit.

## Tech stack

- **Next.js 14** (App Router) — React framework, SEO, performance
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling, custom design tokens
- **Framer Motion** — Scroll-triggered and UI animations

## Features by screen

| Screen    | Features |
|----------|----------|
| **Hero** | Full-viewport hero with image (or optional video) background, gradient overlay, headline, primary/secondary CTAs, animated scroll indicator |
| **About** | Mission copy, stats (lives impacted, countries, projects, fund ratio), image with badge, scroll-in animations |
| **Causes** | Four cause cards (Environment, Education, Health & Water, Livelihood) with images, hover scale, gradient overlays |
| **Programs** | Three program blocks with gradient accents, staggered slide-in animations, dark theme |
| **Gallery / Stories** | Image carousel with thumbnails, captions, smooth transitions |
| **Donate** | Preset amounts, custom amount input, primary CTA, trust line (98% to programs) |
| **Contact** | Contact info, message form (name, email, message), two-column layout |
| **Nav** | Sticky nav with links, mobile hamburger, Donate CTA |
| **Footer** | Multi-column links, tagline, copyright |

## Design

- **Colors:** Forest greens (trust, growth), cream/sand backgrounds, coral accent for CTAs
- **Fonts:** Syne (display), DM Sans (body) via Next.js font optimization
- **Animations:** Framer Motion for entrance, hover, and scroll-triggered effects

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add your own content

- **Hero video:** Add an MP4 to `public/` (e.g. `public/hero-video.mp4`) and uncomment the `<video>` in `components/Hero.tsx`; optionally hide or remove the hero image when using video.
- **Images:** Replace Unsplash URLs in components with your own (and add their domains in `next.config.mjs` if external).
- **Copy:** Edit text in each component and in `app/layout.tsx` (metadata).
- **Donate:** Connect the Donate section to your payment provider (Stripe, etc.) via API routes or client-side integration.

## Build

```bash
npm run build
npm start
```
