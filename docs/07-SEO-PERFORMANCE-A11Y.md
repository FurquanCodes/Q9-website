# 07 — SEO, Performance, Accessibility, Security

## 1. SEO
- Use the Next.js Metadata API. A helper in `src/lib/seo.ts` builds per-page metadata (title, description, canonical, Open Graph, Twitter).
- Title pattern: `{Page} | Q9 Technologies`. Home title: `Q9 Technologies | Great People Building Useful Apps`.
- Descriptions (max 160 chars) must be built only from approved copy. Suggested:
  - Home: `Q9 Technologies is a mobile app development company building useful Android and iOS apps across photography, productivity, utilities, and more.`
  - About: `Learn about Q9 Technologies, our mission, our vision, and how we build apps that serve real needs.`
  - Approach: `How Q9 Technologies builds apps: understand the need, build with purpose, learn through feedback, improve continuously.`
  - Culture: `Our culture and values: trust, ownership, growth through merit, respect, and continuous learning.`
  - Contact: `Contact Q9 Technologies by email, phone, LinkedIn, or visit us in Rawalpindi, Pakistan.`
- `sitemap.ts`, `robots.ts` (allow all; disallow nothing; point to sitemap). Stub legal pages: `robots: { index: false }`.
- Canonical URL from `NEXT_PUBLIC_SITE_URL`.
- Open Graph image `public/og-image.png` 1200x630: dark gradient with the Q9 wordmark and "Simpler Tomorrow" (generate as a static asset; no Technolyte imagery).
- JSON-LD in `layout.tsx`: `Organization` (name, url, logo, email, telephone, address `PostalAddress`, `sameAs` = LinkedIn). Add `WebSite`. Add `ContactPage` on `/contact`.
- One `h1` per page; headings in order; descriptive link text (no "click here").
- `lang="en"` on `<html>`.
- Favicon set + `manifest.ts` with theme color from `--bg`.

## 2. Performance targets (mobile Lighthouse)
Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- LCP < 2.5s, CLS < 0.1, INP < 200ms.
- No images above 150 KB; prefer SVG and CSS for illustrations; use `next/image` with `priority` only for the hero visual if it is an image.
- Fonts via `next/font` with `display: swap`, max 2 families, limited weights.
- Lazy-load below-the-fold sections' heavy bits (map iframe `loading="lazy"`; Framer Motion used only in client components that need it).
- No render-blocking third-party scripts. No analytics in v1 (add later as a flagged item).
- Avoid layout shift: set dimensions on images, reserve map height.

## 3. Accessibility (WCAG 2.2 AA)
- Skip-to-content link as the first focusable element.
- Landmarks: `header`, `nav` (with `aria-label`), `main#main`, `footer`.
- Keyboard: all menus, modal, form usable with keyboard; visible `:focus-visible` ring using `--accent`.
- Mobile menu: `aria-expanded`, `aria-controls`, closes on Esc and route change, focus trapped while open.
- Color contrast per design system; do not convey meaning by color alone.
- All images have `alt`; decorative SVGs `aria-hidden="true"`.
- Animations respect `prefers-reduced-motion`; counters show final values immediately when reduced.
- Form: labels, error association, live region for status.
- Touch targets ≥ 44x44px.

## 4. Security and privacy
- Add security headers in `next.config.mjs`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
- External links: `rel="noopener noreferrer"` when `target="_blank"`.
- No secrets in client code except the Web3Forms public access key (designed to be public).
- Honeypot and time-based spam checks on the form.
- Do not collect analytics or cookies in v1, so no cookie banner is needed. If analytics is added later, add consent handling.

## 5. Browser support
Latest two versions of Chrome, Edge, Firefox, Safari (desktop and mobile). Test Android Chrome and iOS Safari widths: 360, 390, 414, 768.
