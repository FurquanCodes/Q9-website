# ASSUMPTIONS.md — Architectural & Content Decisions

This file tracks assumptions made during development where details were ambiguous or required standardisation per `AGENTS.md`.

## 1. LinkedIn Profile Link
- **Assumption:** Used `https://www.linkedin.com/company/116006515/` as the public LinkedIn URL.
- **Reason:** The lead's original input contained the admin dashboard (`.../company/116006515/admin/dashboard/`), which only works for logged-in company page administrators. The public link works for all visitors.

## 2. Address Representation
- **Assumption:** Standardized to English address: `44b Commercial Market Rd, Rawalpindi City, 46000, Punjab, Pakistan`.
- **Reason:** The raw Google Maps share included Urdu text (`تحصیل راولپنڈی شہر`). The Urdu string is stored in `src/config/site.ts` (`addressUrdu`) for future localized versions.

## 3. Typography Selection
- **Assumption:** `DM Sans` from Google Fonts (`next/font/google`) is used for all headings and body copy.
- **Reason:** Direct CSS extraction from the reference site `technolyte.com` confirmed `DM Sans` (`wght@400;600;800`) as the reference font family.

## 4. Visual Design Tokens & Official Brand Palette
- **Assumption:** Evolved from the raw blue reference extraction to the official brand palette provided by the lead: Obsidian Onyx base (`#090A0F`), frosted glass surface (`#13151F`), vibrant brand fiery orange (`#FF6A00` to `#FFAA00`), and pure silver highlights (`#FFFFFF` to `#E5E7EB`).
- **Reason:** The lead explicitly instructed to avoid generic "AI-generated" neon blue backgrounds and to use a sophisticated, decent, executive color scheme matching the official Q9 Technologies logo and brand identity. Reference site `technolyte.com` is used purely for kinetic rhythm, 3D orbits, and interactive patterns, not for color copying.

## 5. Contact Form Submissions
- **Assumption:** Web3Forms is used as the zero-backend form delivery provider. If `NEXT_PUBLIC_WEB3FORMS_KEY` is unset or blank in development/preview, the form triggers a pre-filled `mailto:` client fallback so zero messages are lost.
- **Reason:** Specified in `docs/05-CONTACT-MODULE.md` to ensure the site never crashes or errors out without an API key.

## 6. WhatsApp Button
- **Assumption:** Disabled by default (`features.whatsapp = false`) until the lead formally confirms WhatsApp customer support readiness.
