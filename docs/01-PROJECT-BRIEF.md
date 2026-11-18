# 01 — Project Brief

## Client
**Q9 Technologies** — a new (startup) mobile app development company.
Tagline / sign-off: **"Simpler Tomorrow"**
Headline used on the site: **"Great People Building Useful Apps"**

## What the company does
Builds Android and iOS applications in practical categories such as photography, productivity, utilities and others. It works across the app lifecycle: finding product opportunities, building user-friendly apps, launching, evaluating performance and improving continuously.

## Goal of the website
1. Introduce Q9 Technologies as a credible, modern, user-focused app company.
2. Communicate its approach, culture, values, mission and vision (the lead's content).
3. Make it very easy to contact the company (email, phone, LinkedIn, address with map, contact form).
4. Be ready to grow: apps/products, careers, blog, legal pages can be switched on later when content exists.

## Audience
- Potential partners, clients and collaborators
- Potential hires (the culture/values content speaks to them)
- App users and platform reviewers who want to verify the company exists (needs clear contact info and, later, a privacy policy)

## Tone of voice
Simple, clear, practical, respectful. No hype, no jargon, no exaggerated claims. This matches the company value of "Simplicity".

## Key difference from the reference site
Technolyte.com is a services agency (clients, reviews, team, portfolio). **Q9 is a new product-focused startup with no portfolio, reviews or client list yet.** So:
- Reuse Technolyte's **design language and section patterns**.
- Do NOT reuse its sections that depend on content Q9 does not have (team grid, client logos, Fiverr reviews, portfolio, staff augmentation, partners). Build them as optional, feature-flagged components only (see `src/config/features.ts`).
- Replace stat counters with **true, non-invented facts** (see `03-SITEMAP-AND-LAYOUT.md`).

## Scope
**In scope (v1):** Home, About, Our Approach, Culture & Values, Contact, 404, plus a feature-flagged Apps page and legal page stubs.
**Out of scope (v1):** blog CMS, user accounts, payments, backend database, multilingual support, admin dashboard.

## Deliverables
- Production-ready website source code (Next.js, see `06`)
- `README.md` (run, edit content, env vars, deploy)
- `MISSING-CONTENT.md` (what the lead still needs to provide)
- `ASSUMPTIONS.md` (any decisions the agent had to make)

## Inputs still pending from the lead
Logo files, brand colors (if any), app list/screenshots, social links beyond LinkedIn, privacy policy and terms text, team info (optional), any extra copy. The site must not break or look empty without them.

## Success criteria
- Looks and feels like the reference site's quality level, but with Q9's own identity and content.
- Fast, accessible, SEO-ready, fully responsive.
- Lead can update any text or contact detail by editing one config/content file.
