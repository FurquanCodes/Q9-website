# 02 — Design System

## 0. How to use this file
The reference is https://technolyte.com/. The agent must open it in the browser and extract the real values (colors, fonts, sizes, radii, shadows, spacing) into `docs/DESIGN-TOKENS-EXTRACTED.md` BEFORE writing UI code. Where the extracted value exists, it overrides the fallback tokens below. The structural patterns in section 2 are already confirmed from the reference and must be followed.

Copy the **look**. Never copy text, logos, photos, icons-as-assets or illustrations from the reference.

## 1. Fallback design tokens (use only if extraction is incomplete)
Define as CSS variables in `src/app/globals.css` and map them in `tailwind.config.ts`.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B1020` | page background (dark) |
| `--bg-alt` | `#10172B` | alternate sections |
| `--surface` | `#141C33` | cards |
| `--border` | `rgba(255,255,255,0.08)` | card/section borders |
| `--text` | `#F3F5FA` | primary text |
| `--text-muted` | `#A7B0C6` | secondary text |
| `--primary` | `#4F7CFF` | buttons, links, accents |
| `--primary-hover` | `#6B91FF` | hover |
| `--accent` | `#22D3EE` | highlights, eyebrow labels |
| `--success` / `--error` | `#22C55E` / `#EF4444` | form states |

Gradients: hero glow = radial gradient of `--primary` at ~25% opacity top-right; button gradient = `--primary` to `--accent`.
Brand note: no official Q9 palette exists yet. Keep all colors in tokens so the lead can change the whole theme in one place.

**Light/dark:** build dark theme first (matches the reference feel). Light theme is optional; if added, it must come from the same token names.

## 2. Layout patterns confirmed from the reference
1. **Sticky top navbar**: logo + wordmark on the left, text links in the center/right, a primary CTA button on the right, hamburger menu on mobile. Navbar gains a subtle background/blur and border after scroll.
2. **Hero**: small eyebrow line, very large H1, one supporting paragraph, two or three buttons (primary, secondary, optional tertiary), and on the right/below a branded visual (the reference uses a logo surrounded by orbiting tech icons). Followed by a **row of stat counters** that count up on scroll.
3. **Section header pattern (used everywhere):** small uppercase **eyebrow** label, then **H2**, then one muted sentence. Centered or left-aligned consistently per section.
4. **Card grid**: image/icon on top, title, one-line description, small action button. 4 columns desktop, 2 tablet, 1 mobile.
5. **Feature cards on an illustrated "map"** for the AI section: a central illustration with a grid of short feature cards around it.
6. **About split**: text with two links on one side, large rounded image on the other.
7. **"Why us" trio**: three short cards with a title and one sentence.
8. **Logo marquee / testimonials / team grid**: exist in the reference. For Q9 these are optional feature-flagged components only.
9. **Contact split**: form on one side; address, phones, email on the other; embedded map below or beside.
10. **Quote modal** opened from a "Get a quote" / "Start a project" button; closes with a Close button, Esc and backdrop click.
11. **Footer**: copyright, address line, links.

## 3. Q9 visual identity layer (on top of the reference style)
- Wordmark: text logo **"Q9"** in a bold geometric font + "Technologies" in lighter weight, until the lead sends a real logo. Build `<Logo />` so swapping to an SVG/PNG is one-file change.
- Illustrations: draw with inline SVG/CSS only. Hero visual = stylised **phone mockups** (Android + iOS silhouettes) with floating icon chips for Photography, Productivity, Utilities. No stock photos, no hotlinks.
- Imagery for About split: abstract gradient + phone-UI mock card composition (CSS), not people photos.
- Icons: `lucide-react`.

## 4. Typography
- Headings: a modern geometric/grotesk sans (fallback `Plus Jakarta Sans` or `Sora`) via `next/font/google`. If extraction identifies the reference font, pick the closest Google Font.
- Body: `Inter`.
- Scale (desktop / mobile): H1 `64–72px / 38–42px`, H2 `40–44px / 28–30px`, H3 `22–24px / 20px`, body `16–18px`, small `14px`. Line-height: headings 1.1–1.2, body 1.6.
- Eyebrow: 12–13px, uppercase, letter-spacing 0.12em, color `--accent`.
- Max readable line width for paragraphs: 65–70 characters.

## 5. Spacing, shape, elevation
- Container: max-width 1200px, horizontal padding 20px mobile / 32px desktop.
- Section vertical padding: 96px desktop / 64px mobile.
- 8px spacing scale.
- Radius: cards 20px, buttons 12px (or pill if extraction shows pill), images 24px, inputs 12px.
- Cards: `--surface` background, 1px `--border`, soft shadow; hover lifts by 4px and brightens the border.
- Buttons: primary = gradient fill, white text; secondary = outline; sizes `md` (44px high) and `lg` (52px high); all with visible focus ring.

## 6. Motion
- Library: Framer Motion (or CSS only where simple).
- Scroll reveal: fade + 16–24px upward slide, 0.5s ease-out, staggered 60–80ms for grids, trigger once.
- Stat counters count up once when in view.
- Hero visual: gentle floating/orbit animation (slow, 8–14s loop).
- Hover: cards lift, buttons brighten, links underline.
- **Must** disable or reduce all motion under `prefers-reduced-motion: reduce`.

## 7. Responsive behavior
Breakpoints: 640 / 768 / 1024 / 1280.
- Navbar collapses to hamburger below 1024px; mobile menu is a full-width sheet with large tap targets (min 44px).
- Hero stacks (text first, visual second) below 1024px.
- Card grids: 4 → 2 → 1 columns.
- Contact: form and info stack on mobile, map full width.
- No horizontal scroll at any width.

## 8. Component inventory (build as reusable components)
`Navbar`, `MobileMenu`, `Logo`, `Button`, `SectionHeader` (eyebrow/title/subtitle), `Hero`, `StatCounter`, `FeatureCard`, `ApproachStep`, `ValueCard`, `CultureCard`, `SplitSection`, `CTABanner`, `ContactForm`, `ContactInfo`, `MapEmbed`, `QuoteModal`, `Footer`, `Reveal` (scroll animation wrapper), `PhoneMockup` (SVG/CSS illustration), `Container`, `Section`.
Optional (feature-flagged, off by default): `TeamGrid`, `LogoMarquee`, `Testimonials`, `AppShowcase`.

## 9. Visual QA checklist
- Contrast ratio 4.5:1 for body text, 3:1 for large text.
- Consistent radius, spacing and shadow across all cards.
- Same section rhythm on every page.
- No text over busy areas without a scrim.
- Focus ring visible on all interactive elements.
