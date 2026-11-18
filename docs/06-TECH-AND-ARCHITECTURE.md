# 06 — Tech Stack and Architecture

## 1. Stack (fixed; do not substitute)
| Concern | Choice |
|---|---|
| Framework | Next.js (latest stable), App Router, TypeScript strict |
| Styling | Tailwind CSS + CSS variables for tokens |
| Animation | Framer Motion |
| Icons | lucide-react |
| Forms | react-hook-form + zod + @hookform/resolvers |
| Fonts | `next/font/google` (see design system) |
| Utilities | `clsx`, `tailwind-merge` |
| Linting | ESLint (Next config) + Prettier |
| Hosting target | Vercel (primary) or Netlify; must also work as static export |
| Package manager | npm |
| Node | 18.18+ (20 LTS recommended) |

Rationale: static-friendly, great SEO, easy for a beginner to deploy, and no backend needed (contact form uses Web3Forms).

## 2. Create the project
```bash
npx create-next-app@latest q9-technologies --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd q9-technologies
npm i framer-motion lucide-react react-hook-form zod @hookform/resolvers clsx tailwind-merge
npm i -D prettier prettier-plugin-tailwindcss
```
If the project folder already exists with docs inside, scaffold in a temp folder and move files in; do NOT delete `docs/`, `AGENTS.md` or `GEMINI.md`.

## 3. Folder structure
```
q9-technologies/
├─ AGENTS.md  GEMINI.md
├─ docs/                      # the spec files (keep)
├─ public/
│  ├─ favicon.ico  og-image.png (1200x630)  robots.txt (or generated)
│  └─ images/                 # local assets only
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx           # fonts, Navbar, Footer, metadata, JSON-LD
│  │  ├─ page.tsx             # Home
│  │  ├─ about/page.tsx
│  │  ├─ approach/page.tsx
│  │  ├─ culture/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ apps/page.tsx        # flag-gated
│  │  ├─ privacy-policy/page.tsx
│  │  ├─ terms/page.tsx
│  │  ├─ not-found.tsx
│  │  ├─ sitemap.ts  robots.ts  manifest.ts
│  │  └─ globals.css          # tokens, base styles
│  ├─ components/
│  │  ├─ layout/  (Navbar, MobileMenu, Footer, Container, Section, PageHero)
│  │  ├─ ui/      (Button, Logo, SectionHeader, Reveal, FeatureCard, StatCounter)
│  │  ├─ sections/(Hero, FactsStrip, WhatWeBuild, AboutSnippet, ApproachGrid,
│  │  │            CultureHighlight, MissionVision, CTABanner, ContactPreview)
│  │  ├─ contact/ (ContactForm, ContactInfo, MapEmbed, QuoteModal)
│  │  ├─ illustrations/ (PhoneMockup, AbstractGlow)
│  │  └─ optional/ (TeamGrid, LogoMarquee, Testimonials, AppShowcase)
│  ├─ config/
│  │  ├─ site.ts              # ALL contact + brand data
│  │  ├─ nav.ts               # nav + footer links
│  │  └─ features.ts          # feature flags
│  ├─ content/                # all copy (typed .ts files)
│  │  ├─ home.ts about.ts approach.ts culture.ts values.ts apps.ts
│  │  └─ legal/
│  ├─ lib/
│  │  ├─ contact.ts           # Web3Forms delivery + mailto fallback
│  │  ├─ schema.ts            # zod schemas
│  │  ├─ seo.ts               # metadata helpers + JSON-LD builders
│  │  └─ utils.ts             # cn()
│  └─ types/
├─ .env.example               # NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_WEB3FORMS_KEY
├─ README.md  CHANGELOG.md  ASSUMPTIONS.md  MISSING-CONTENT.md
└─ next.config.mjs  tailwind.config.ts  tsconfig.json
```

## 4. Feature flags (`src/config/features.ts`)
```ts
export const features = {
  apps: false,          // /apps page and nav link
  whatsapp: false,      // WhatsApp button
  quoteModal: false,    // navbar/hero opens modal instead of /contact
  team: false,
  logoMarquee: false,
  testimonials: false,
  privacyPage: true,    // stub pages (noindex until real text)
  termsPage: true,
} as const;
```

## 5. Architecture rules
- Pages are Server Components by default. Mark `"use client"` only for interactive pieces (Navbar scroll state, MobileMenu, ContactForm, Reveal, StatCounter, QuoteModal).
- Content is data: components receive props from `src/content/*`. No copy inside JSX.
- One `Section` wrapper handles padding/background/anchor ids. One `SectionHeader` handles eyebrow/title/subtitle.
- No global state library. No CSS-in-JS.
- No `dangerouslySetInnerHTML` except for JSON-LD (serialised with `JSON.stringify`).
- Env vars: only `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_WEB3FORMS_KEY`. Provide `.env.example`; add `.env*.local` to `.gitignore`.
- Support static export: avoid features that require a server at runtime. If needed set `output: 'export'` only when deploying to a static host (document in README).

## 6. Scripts (package.json)
`dev`, `build`, `start`, `lint`, `format`, `typecheck` (`tsc --noEmit`). The agent must run `lint`, `typecheck`, `build` at the end of every phase.

## 7. README.md must include
1. What the project is
2. Install and run (`npm i`, `npm run dev`)
3. How to edit content (`src/content`), contact info (`src/config/site.ts`), feature flags
4. Environment variables and how to get a Web3Forms key
5. How to deploy to Vercel (import GitHub repo, add env vars) and Netlify
6. How to replace the logo and colors (`Logo.tsx`, tokens in `globals.css`)
7. Folder map
