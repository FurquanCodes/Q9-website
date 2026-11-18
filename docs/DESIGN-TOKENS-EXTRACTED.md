# DESIGN-TOKENS-EXTRACTED.md — Visual Design Tokens Extracted from technolyte.com

Extracted directly from the reference site stylesheet (`https://technolyte.com/css/home-3d.css?v=41`) and DOM structure for the Q9 Technologies project.
*Rule: Re-create the look, styling, and visual rhythm; never copy text, logos, client names, or content.*

---

## 1. Color Palette

| Token | Extracted Value | Usage |
|---|---|---|
| `--bg` | `#05070c` | Primary canvas background (deep obsidian dark) |
| `--bg-alt` | `#070d18` | Alternate sections & navbar background |
| `--surface` | `#121826` | Card backgrounds (`--card`), container surfaces |
| `--surface-modal` | `#0d1526` | Modal sheet surface |
| `--border` | `rgba(186, 214, 255, 0.22)` | Subtle glass border lines for cards and header (`--line`) |
| `--border-hover` | `rgba(96, 165, 250, 0.50)` | Border on card hover |
| `--text` | `#f4f8ff` | Primary body and heading text |
| `--text-muted` | `#c5d6ee` | Secondary / supporting text (`--muted`) |
| `--text-link` | `#e8f1ff` | Navigation links text |
| `--primary` | `#2563eb` | Core brand blue |
| `--primary-gradient` | `linear-gradient(135deg, #2563eb, #60a5fa)` | Primary button gradient |
| `--accent` | `#7dd3fc` | Eyebrow badges, cyan accents, focus rings |
| `--glow-blue` | `rgba(37, 99, 235, 0.38)` | Ambient radial glow in hero and card elevation |
| `--glow-cyan` | `rgba(125, 211, 252, 0.22)` | Subtle focus glow |
| `--success` | `#22c55e` | Form success feedback |
| `--error` | `#ef4444` | Form validation error alerts |

---

## 2. Typography

* **Google Font**: `DM Sans` (weights: `400` normal, `600` semibold, `700` bold, `800` extra-bold).
* **Fallback font family**: `"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

### Font Sizes & Hierarchy
* **Hero H1**: `clamp(2.25rem, 5vw, 4rem)` (line-height: `1.12`, tracking: `-0.025em`, font-weight: `800`).
* **Section H2**: `clamp(1.75rem, 3.5vw, 2.75rem)` (line-height: `1.2`, tracking: `-0.02em`, font-weight: `700`).
* **Card H3**: `1.25rem - 1.45rem` (line-height: `1.3`, font-weight: `700`).
* **Eyebrow / Badge**: `0.8125rem` (`13px`), uppercase, letter-spacing: `0.12em` (`tracking-wider`), color: `#7dd3fc`, font-weight: `700`.
* **Body text**: `1rem` to `1.08rem` (`16px - 17.5px`), line-height: `1.6`, color: `#c5d6ee`.
* **Small / Caption**: `0.875rem` (`14px`), line-height: `1.5`.

---

## 3. Shapes, Radii & Elevation

### Border Radii
* **Pills & Buttons**: `9999px` (`border-radius: 999px` / `rounded-full`).
* **Cards & Containers**: `22px` (`border-radius: 22px`).
* **Modal Sheet**: `24px` (`border-radius: 24px`).
* **Input Fields**: `12px - 14px`.

### Elevation & Box Shadows
* **Card Default**: `0 10px 24px rgba(0, 0, 0, 0.35)` with inset highlight `inset 0 1px 0 rgba(255, 255, 255, 0.05)`.
* **Card Hover**: `0 22px 48px rgba(37, 99, 235, 0.38)` + `transform: translateY(-6px)`.
* **Modal Sheet**: `0 30px 80px rgba(0, 0, 0, 0.60)`.
* **Focus Visible Ring**: `0 0 0 3px rgba(125, 211, 252, 0.35)`.
* **Ambient Hero Glow**: `radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.22) 0%, transparent 65%)`.

---

## 4. Component Patterns

### Navbar
* Fixed top navbar, height: `96px` (`--nav-h: 96px`).
* Background: `#070d18` with backdrop-filter blur `8px` and bottom border `1px solid rgba(186, 214, 255, 0.22)`.
* Desktop layout: Brand on left, horizontal links in center-right, CTA button on right.
* Nav links: font-weight `600`, color `#e8f1ff`, hover `#fff` with bottom border highlight.
* Mobile toggle: min 44px tap target, opens full-width drawer sheet with blur.

### Buttons
* **Primary Button**: `linear-gradient(135deg, #2563eb, #60a5fa)` background, white bold text (`font-weight: 700`), `rounded-full`, padding `12px 24px` (`h-[48px]`), shadow `0 8px 20px rgba(37, 99, 235, 0.35)`, hover brightness and slight lift.
* **Secondary / Outline Button**: `rounded-full`, transparent background with `1px solid rgba(186, 214, 255, 0.35)`, color `#f4f8ff`, hover background `rgba(255, 255, 255, 0.06)`.

### Cards
* Surface `#121826`, border `1px solid rgba(186, 214, 255, 0.22)`, radius `22px`, padding `24px` - `28px`.
* Hover transition: `0.35s ease`, lifts by `6px - 8px`, border brightens to `rgba(96, 165, 250, 0.50)`.

### Section Rhythm & Headers
* Max container width: `1240px` (padding `20px` mobile, `32px` desktop).
* Vertical padding: `80px - 96px` desktop, `56px - 64px` mobile.
* Section Header:
  1. Eyebrow badge (uppercase, tracking 0.12em, cyan `#7dd3fc`).
  2. H2 heading (gradient or crisp white `#f4f8ff`).
  3. Muted descriptive sentence (max-width `56ch`, color `#c5d6ee`).

### Contact & Quote Modal
* Split layout: Contact Form (left / 55%) and Info Cards + Map (right / 45%).
* Modal: Overlay `rgba(2, 6, 16, 0.8)` with blur `8px`, centered sheet `#0d1526` with border `rgba(147, 197, 253, 0.28)` and radius `24px`. Traps focus and closes on Esc, backdrop click, and close button.

### Motion & Responsiveness
* Breakpoints: `640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl).
* Smooth subtle scroll reveal: `opacity 0 -> 1` and `translateY(20px -> 0)` with `0.5s ease-out`.
* Respects `prefers-reduced-motion: reduce`.
