# AGENTS.md — Standing Rules for the Q9 Technologies Website

> Place this file in the **project root**. Also save an identical copy named `GEMINI.md`.
> These rules apply to EVERY task in this workspace. Read them before doing anything.

## 1. Mission
Build the official marketing website for **Q9 Technologies** (a new mobile app software house, tagline **"Simpler Tomorrow"**). The visual design, layout rhythm and section patterns follow the reference site https://technolyte.com/. The words, brand, contact details and facts come ONLY from this repo's `docs/` files.

## 2. Source of truth (read in this order)
1. `docs/01-PROJECT-BRIEF.md` — what and why
2. `docs/02-DESIGN-SYSTEM.md` — how it must look
3. `docs/03-SITEMAP-AND-LAYOUT.md` — pages and sections
4. `docs/04-CONTENT.md` — exact copy (use verbatim)
5. `docs/05-CONTACT-MODULE.md` — contact data and form behaviour
6. `docs/06-TECH-AND-ARCHITECTURE.md` — stack and folder structure
7. `docs/07-SEO-PERFORMANCE-A11Y.md` — quality bars
8. `docs/08-BUILD-PHASES-AND-QA.md` — the order of work and acceptance checks

If two files conflict, the lower number wins, EXCEPT contact data, where `05` wins.

## 3. Hard rules (never break)
- **Do NOT copy anything from technolyte.com except visual patterns.** No text, no logos, no images, no team photos, no client logos, no reviews, no Fiverr references, no addresses, no phone numbers. Re-create the *look*, never the *content or assets*.
- **Never invent facts.** No fake clients, testimonials, statistics, awards, team members, app names, download counts, or founding dates. If something is missing, use the placeholder pattern in section 6 below.
- **Use the lead's copy verbatim** from `docs/04-CONTENT.md`. You may split it across sections but do not rewrite, embellish or add marketing claims.
- **All contact details come from one file:** `src/config/site.ts`. Never hard-code email, phone, address or links anywhere else.
- **All page copy lives in `src/content/`**, not inside JSX, so the lead can update text later without touching components.
- **No external image hotlinking.** Use local assets, inline SVG, or CSS/gradient illustrations.
- **No secrets in the repo.** Form key goes in `.env.local`, with `.env.example` committed.
- Do not add libraries beyond those listed in `docs/06-TECH-AND-ARCHITECTURE.md` without a written reason in `CHANGELOG.md`.

## 2b. Working style (important for reliability)
- Work **phase by phase** following `docs/08-BUILD-PHASES-AND-QA.md`. Finish a phase, run its checks, then continue.
- Before writing code in a phase, write a short plan (files to create/change). After the phase, list what was done and any deviations.
- After each phase run: `npm run lint` and `npm run build`. Fix all errors before moving on.
- Prefer small, focused components (one responsibility per file, under ~150 lines).
- If a requirement is ambiguous, pick the simplest option that satisfies the docs, and record the assumption in `ASSUMPTIONS.md`. Do not stop to ask unless a hard rule would be broken.

## 4. Code standards
- TypeScript strict mode. No `any` unless commented with a reason.
- Tailwind for styling; design tokens as CSS variables (see design system). No inline style except for dynamic values.
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one `h1` per page, logical heading order.
- Mobile-first. Test mentally at 360px, 768px, 1024px, 1440px.
- Every interactive element is keyboard reachable with a visible focus ring.
- Respect `prefers-reduced-motion`.
- Images: `next/image`, explicit width/height, meaningful `alt` (decorative = `alt=""`).

## 5. Definition of done (whole project)
- All pages in `03-SITEMAP-AND-LAYOUT.md` exist and are linked from nav/footer.
- Contact module shows exactly the data in `05-CONTACT-MODULE.md`; form validates and submits.
- `npm run build` passes with zero errors and zero lint errors.
- Lighthouse (mobile) targets in `07` are met or the gap is documented.
- No placeholder text such as "Lorem ipsum" anywhere.
- `README.md` explains how to run, edit content, set env vars and deploy.

## 6. Placeholder pattern for missing content
When the lead has not yet supplied something (apps list, logo, team, privacy policy text, etc.):
- Build the component and route so it is ready.
- Hide it behind a flag in `src/config/features.ts` (default `false`) if it would look empty.
- Add an entry to `MISSING-CONTENT.md` (what is needed, where it will appear).
- Never fill it with made-up content.
