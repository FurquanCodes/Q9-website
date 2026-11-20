# Q9 Technologies — Official Website

The official modern marketing website for **Q9 Technologies**, mobile application software house.
- **Tagline:** *"Simpler Tomorrow"*
- **Headline:** *"Great People Building Useful Apps"*

Built following the visual language, section patterns, and dark-theme rhythm of the reference site, with 100% truthful, client-approved content.

---

## 1. Quick Start

### Prerequisites
- Node.js 18.18+ (Node 20+ LTS recommended)
- npm 9+

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# Open http://localhost:3000

# 3. Type check TypeScript
npm run typecheck

# 4. Lint codebase
npm run lint

# 5. Production build (100% static generation)
npm run build

# 6. Format codebase
npm run format
```

---

## 2. Architecture & File Structure

```text
├── docs/                       # Specifications and extracted design tokens
│   └── DESIGN-TOKENS-EXTRACTED.md
├── public/                     # Static assets (og-image.png, icon.png)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (DM Sans font, Navbar, Footer, JSON-LD)
│   │   ├── page.tsx            # Home page (9 sections in exact spec order)
│   │   ├── about/page.tsx      # About Us
│   │   ├── approach/page.tsx   # Our Approach (4-step lifecycle)
│   │   ├── culture/page.tsx    # Culture & 6 Values
│   │   ├── contact/page.tsx    # Interactive Contact page
│   │   ├── apps/page.tsx       # Flag-gated apps catalog (404 when disabled)
│   │   ├── privacy-policy/     # Legal stub (noindex)
│   │   ├── terms/              # Legal stub (noindex)
│   │   ├── not-found.tsx       # Custom accessible 404 page
│   │   ├── sitemap.ts          # /sitemap.xml
│   │   ├── robots.ts           # /robots.txt
│   │   ├── manifest.ts         # /manifest.webmanifest
│   │   ├── opengraph-image.tsx # Next.js dynamic/static OG image (1200x630)
│   │   ├── icon.tsx            # Dynamic web app icon
│   │   └── globals.css         # Theme tokens & CSS classes
│   ├── components/
│   │   ├── layout/             # Container, Section, PageHero, Navbar, MobileMenu, Footer
│   │   ├── ui/                 # Button, Logo, SectionHeader, Reveal, FeatureCard, StatCounter
│   │   ├── sections/           # Hero, FactsStrip, WhatWeBuild, AboutSnippet, ApproachGrid, etc.
│   │   ├── contact/            # ContactForm, ContactInfo, MapEmbed, QuoteModal
│   │   └── illustrations/      # AppStudioShowcase (Interactive titanium device mockup with telemetry and live categories)
│   ├── config/
│   │   ├── site.ts             # SINGLE SOURCE OF TRUTH for contact, address, phone, links
│   │   ├── features.ts         # Feature flags (apps, whatsapp, quoteModal)
│   │   └── nav.ts              # Nav and footer link lists
│   ├── content/                # All page copy (typed .ts files, verbatim)
│   └── lib/                    # Helpers (seo.ts, contact.ts, utils.ts, schema.ts)
├── .env.example                # Example environment variables
├── ASSUMPTIONS.md              # Architectural decisions logged
├── MISSING-CONTENT.md          # Pending client inputs (logo files, apps, etc.)
└── CHANGELOG.md                # Phase-by-phase build logs
```

---

## 3. How to Update Website Content & Contact Info

### Updating Contact Details
All contact details (email, phone, address, map URLs, LinkedIn) live in **one single file**:
👉 `src/config/site.ts`
No contact details are hardcoded in components or JSX.

### Updating Page Copy
All page copy is stored as typed data in `src/content/`:
- `src/content/home.ts` — Home page hero, what we build, snippets
- `src/content/about.ts` — About company, mission, vision, looking ahead
- `src/content/approach.ts` — 4-phase app development process
- `src/content/culture.ts` — 4 culture pillars
- `src/content/values.ts` — 6 core values
- `src/content/apps.ts` — App showcase catalog (empty array by default)

### Feature Flags
Configure flags in `src/config/features.ts`:
```ts
export const features = {
  apps: false,          // Toggle /apps route and navigation link
  whatsapp: false,      // Toggle WhatsApp contact card
  quoteModal: false,    // Toggle quote modal on CTA buttons
  privacyPage: true,    // Toggle privacy policy page link
  termsPage: true,      // Toggle terms of service page link
};
```

---

## 4. Contact Form & Delivery (Web3Forms)

1. Sign up for free at [web3forms.com](https://web3forms.com/) using `support.q9technologies@gmail.com`.
2. Add the key to `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://q9technologies.com
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```
*(Note: If the key is unset, the form automatically uses a client-side `mailto:` fallback so user messages are never dropped).*

---

## 5. Deployment

### Vercel
1. Import repository to Vercel.
2. Add environment variables `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_WEB3FORMS_KEY`.
3. Deploy! Next.js will prerender all pages statically.

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables.

---

## 6. QA Checklist Status

| Area | Check | Status |
|---|---|---|
| **Content** | 100% copy from `04-CONTENT.md` verbatim | ✅ PASS |
| **Content** | Zero forbidden references (technolyte, fiverr, lahore, etc.) | ✅ PASS |
| **Content** | Zero fake stats, clients, testimonials, or "Lorem ipsum" | ✅ PASS |
| **Contact** | Single source in `src/config/site.ts` (email, phone, address, LinkedIn) | ✅ PASS |
| **Contact** | LinkedIn URL uses public page (`company/116006515/`) | ✅ PASS |
| **Contact** | Form validation (zod), honeypot, and 10s rate limit | ✅ PASS |
| **Technical** | `npm run typecheck` passes with 0 errors | ✅ PASS |
| **Technical** | `npm run lint` passes with 0 errors | ✅ PASS |
| **Technical** | `npm run build` prerenders all 16 static routes | ✅ PASS |
| **SEO** | JSON-LD schema (Organization, WebSite), sitemap.xml, robots.txt | ✅ PASS |
| **A11y** | Skip link, keyboard navigation, focus rings, reduced-motion | ✅ PASS |
