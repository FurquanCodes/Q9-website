# 03 — Sitemap and Page Layouts

All copy referenced here lives in `docs/04-CONTENT.md` and must be stored in `src/content/`. Contact data lives in `src/config/site.ts` (see `05`).

## 1. Sitemap

| Route | Page | Status |
|---|---|---|
| `/` | Home | v1 |
| `/about` | About Us (company, mission, vision, looking ahead) | v1 |
| `/approach` | Our Approach | v1 |
| `/culture` | Culture and Values | v1 |
| `/contact` | Contact | v1 |
| `/apps` | Apps / Products | feature-flagged OFF (no content yet) |
| `/privacy-policy` | Privacy Policy | stub, noindex until real text exists |
| `/terms` | Terms of Service | stub, noindex until real text exists |
| `*` | 404 page | v1 |

## 2. Navigation
**Navbar links:** Home, About, Our Approach, Culture, Contact (add Apps only if flag is on).
**Navbar CTA button:** "Contact us" (links to `/contact`; on the Home page it may open the Quote modal, see `05`).
**Footer columns:** Brand block (logo, tagline "Simpler Tomorrow", short mission line), Company links, Contact block (email, phone, address, LinkedIn), bottom bar with copyright `© {currentYear} Q9 Technologies. All rights reserved.`, legal links only if their flag is on.

## 3. Home page (`/`) — section order

1. **Hero**
   - Eyebrow: `Q9 Technologies`
   - H1: `Great People Building Useful Apps`
   - Paragraph: the first intro paragraph from the content file ("We build mobile applications that solve everyday problems…")
   - Buttons: primary `Contact us` (to `/contact`), secondary `Our approach` (to `/approach`)
   - Visual: `PhoneMockup` composition (Android and iOS) with floating chips for Photography, Productivity, Utilities
2. **Facts strip** (replaces the reference's stat counters; truthful only, count-up where numeric)
   - `2` Platforms: Android and iOS
   - `4` Steps in our approach
   - `6` Core values
   - `24/7`: NOT allowed. Do not add any figure that is not in this list.
3. **What we build** (reference "Services" card grid, 4 cards). Cards: Photography, Productivity, Utilities, and "More practical apps". One-line description from content file. Cards link to `/apps` only if the flag is on; otherwise no link.
4. **About snippet** (reference "About" split): eyebrow `About us`, short text from the About content, link `Learn more about us` to `/about`. Image side = CSS/SVG composition.
5. **Our approach** (4 cards in a row): Understand the Need, Build with Purpose, Learn Through Feedback, Improve Continuously. Link `See how we work` to `/approach`.
6. **Why Q9 / Culture highlight** (reference "Why us" trio): Trust and Ownership, Growth Through Merit, Respect for Everyone (three of the four culture items) with a link to `/culture`.
7. **Mission and Vision** two-column card block.
8. **CTA banner**: heading `Simpler Tomorrow`, one sentence from "Looking Ahead", button `Get in touch`.
9. **Contact preview**: compact version of the contact module (email, phone, address, LinkedIn) + button to `/contact`.
10. **Footer**

## 4. About page (`/about`)
Page hero (H1 `About Us`) → intro paragraphs (three About paragraphs from content) → Mission and Vision cards → "Looking Ahead" section → CTA banner → footer.

## 5. Our Approach page (`/approach`)
Page hero (H1 `Our Approach`) → four large numbered step blocks (01 to 04) alternating left/right layout, each with title + description + simple SVG icon → the "app development as an ongoing process" paragraph as a highlighted callout → CTA banner.

## 6. Culture and Values page (`/culture`)
Page hero (H1 `Our Culture`) → intro sentence → 4 culture cards (Trust and Ownership, Growth Through Merit, Respect for Everyone, Learning and Development) → section "Our Values" with 6 value cards (User First, Simplicity, Fairness, Responsibility, Continuous Learning, Respect and Collaboration) → CTA banner.

## 7. Contact page (`/contact`)
Page hero (H1 `Contact Us`, subline `Let's talk about your next idea`) → split layout: **Contact form (left)** and **Contact info + map (right)** → footer. Full details in `05-CONTACT-MODULE.md`.

## 8. Apps page (`/apps`, flag OFF)
Build the route and an `AppShowcase` grid reading from `src/content/apps.ts` (empty array). If flag is off, route returns the 404 page and nav hides the link. When enabled with an empty array, show a "Coming soon" state, never fake apps.

## 9. Legal stubs
`/privacy-policy` and `/terms` render a clean prose layout reading from `src/content/legal/*.md` or `.ts`. Placeholder text must clearly say "This page will be updated" and the pages get `robots: noindex` until the lead provides real text. Log in `MISSING-CONTENT.md`.

## 10. 404 page
Friendly message, `Simpler Tomorrow` tagline, button back to Home.

## 11. Page transition and shared elements
- Every page starts with the same `PageHero` (eyebrow, H1, subtitle, soft glow background).
- Every content page ends with `CTABanner` then `Footer`.
- Active nav link is highlighted. Navbar and footer are in `layout.tsx` once.
