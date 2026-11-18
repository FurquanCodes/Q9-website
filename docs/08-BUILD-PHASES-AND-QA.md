# 08 — Build Phases and QA Checklist

Work strictly in order. At the end of every phase: run `npm run lint`, `npm run typecheck`, `npm run build`; fix all errors; then write a 5-line report (done / files changed / assumptions / issues / next).

## Phase 0 — Study and plan
- Read AGENTS.md and docs 01 to 08.
- Study technolyte.com visually (browser) and write `docs/DESIGN-TOKENS-EXTRACTED.md`.
- Output: short plan.
**Done when:** tokens file exists with colors, fonts, sizes, radii, shadows, spacing, and notes on hero, cards, navbar, contact, modal.

## Phase 1 — Scaffold and foundation
- Create the Next.js project and install dependencies (see `06`).
- Create folder structure, `src/config/site.ts`, `nav.ts`, `features.ts`.
- Set up `globals.css` tokens, Tailwind theme mapping, fonts, `cn()` util, Prettier.
- Create `.env.example`, `README.md` skeleton, `ASSUMPTIONS.md`, `MISSING-CONTENT.md`, `CHANGELOG.md`.
**Done when:** `npm run dev` shows a blank themed page with correct fonts and background; build passes.

## Phase 2 — Content layer
- Create typed content files in `src/content/` from `docs/04-CONTENT.md`, verbatim.
**Done when:** every text block in `04` exists once in content files and nowhere is copy hard-coded in JSX.

## Phase 3 — UI primitives and layout
- `Container`, `Section`, `SectionHeader`, `Button`, `Logo`, `Reveal`, `FeatureCard`, `StatCounter`, `PageHero`.
- `Navbar` (sticky, scroll style, active link, CTA), `MobileMenu`, `Footer`, skip link, `layout.tsx`.
**Done when:** navbar and footer appear on every route; mobile menu works with keyboard.

## Phase 4 — Home page
- Build all sections in order from `03` section 3, including `PhoneMockup` illustration and hero animation.
**Done when:** Home matches the section order and responsive rules; facts strip uses only the three approved facts.

## Phase 5 — Inner pages
- `/about`, `/approach`, `/culture` per `03`.
- `/apps` (flag-gated), `/privacy-policy`, `/terms` stubs, `not-found.tsx`.
**Done when:** all routes render, nav and footer links resolve, flagged routes behave per flags.

## Phase 6 — Contact module
- `site.ts` data, `ContactInfo`, `MapEmbed`, `ContactForm` (zod + RHF), `src/lib/contact.ts` (Web3Forms + mailto fallback), optional `QuoteModal`.
- Compact `ContactPreview` on Home, contact data in Footer.
**Done when:** the contact checklist in `05` section 7 passes.

## Phase 7 — SEO, performance, accessibility
- Metadata per page, JSON-LD, sitemap, robots, manifest, OG image, security headers.
- Reduced-motion handling, focus states, contrast fixes.
**Done when:** `07` targets are met or any gap is documented in `ASSUMPTIONS.md`.

## Phase 8 — Polish and docs
- Visual comparison pass against `DESIGN-TOKENS-EXTRACTED.md` (spacing, radius, shadows, hover states).
- Remove unused code and assets; no console errors or warnings.
- Finish `README.md`, `MISSING-CONTENT.md`, `CHANGELOG.md`.
**Done when:** the full QA checklist below passes.

---

## Final QA checklist (report pass/fail for each)

### Content
- [ ] All copy matches `04-CONTENT.md` word for word
- [ ] No Technolyte text, logos, images, names, reviews, addresses or phone numbers anywhere (search the codebase for "technolyte", "Fiverr", "Lahore", "Gulberg")
- [ ] No invented clients, stats, testimonials, team or apps
- [ ] No "Lorem ipsum"

### Contact
- [ ] Email, phone, address, public LinkedIn URL exactly as in `05`
- [ ] LinkedIn URL does NOT contain `admin`
- [ ] Contact data exists only in `src/config/site.ts`
- [ ] Form validation, success, error, fallback all verified

### Design
- [ ] Layout patterns from `02` section 2 are present
- [ ] Consistent tokens, radii, spacing, shadows
- [ ] Hover, focus and scroll animations work; reduced-motion respected
- [ ] No horizontal scroll at 360, 768, 1024, 1440

### Technical
- [ ] `npm run lint`, `typecheck`, `build` pass with zero errors
- [ ] No unused dependencies
- [ ] `.env.example` present; no secrets committed
- [ ] Feature flags work (apps, whatsapp, quoteModal)

### SEO and quality
- [ ] Unique title and description per page; one `h1` per page
- [ ] sitemap.xml and robots.txt generated
- [ ] JSON-LD valid
- [ ] Lighthouse mobile scores recorded in README or ASSUMPTIONS.md

## Optional "Phase 9" (only if asked later)
Blog (MDX), Apps showcase with real apps, careers page, analytics with consent, light theme, Urdu language toggle.
