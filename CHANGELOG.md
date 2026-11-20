# CHANGELOG.md

All notable changes and build phases for the Q9 Technologies website are documented in this file.

## [1.3.0] - 2026-11-21

### Leadership Team Integration, Products Showcase, Tech Stack, Industry Collaboration & Dual Light/Dark Theme
- **Leadership & Engineering Team Integration:**
  - Integrated official executive profiles for **Nadir Abbas** (CEO), **Ehsan Rahim** (Marketing Director), **Raja Husnain Ali** (Production Director), and **Muhammad Asjad** (Full Stack Developer) in `src/content/team.ts`.
  - Built `TeamSection.tsx` with executive initial monograms, department tags, role specialties, and verified LinkedIn profile links. Photo container is pre-wired to load professional portraits from `/images/team/{id}.jpg` with seamless monogram fallback.
  - Featured the team prominently on the About Us page (`/about`).
- **Dedicated Products & Applications Page (`/products`):**
  - Created `/products` route and `ProductsShowcase.tsx` featuring Q9's mobile app portfolio across Photography (Lumina RAW Studio), Productivity (FlowState Workspace), and Everyday Utilities (OmniTool System Suite, CleanPulse Diagnostic).
  - Built interactive category filters (All, Photography, Productivity, Utilities) with telemetry specs (Engine, Target FPS, Local Storage), native platform badges, and early access beta request links.
  - Routed `/apps` to redirect cleanly to `/products` and updated sitemap priorities.
- **Technologies We Work On:**
  - Built `TechnologiesSection.tsx` and `src/content/technologies.ts` showcasing high-density engineering stacks across iOS Native (Swift 6.0, SwiftUI, SwiftData, Metal), Android Native (Kotlin, Jetpack Compose, Room, CameraX), Full-Stack Web (TypeScript, Next.js 16, React 19, Node.js), and Cloud Systems.
  - Featured on both the Home page and Products page.
- **Industry Collaboration & Co-Engineering:**
  - Built `CollaborationSection.tsx` and `src/content/collaboration.ts` focusing on open industry co-development with fellow software houses, product founders, and engineering teams.
- **Home Page Focused on "Simpler Tomorrow":**
  - Elevated the "Simpler Tomorrow" motto as the core narrative anchor across the Home page hero, section headers, and mission statements.
- **Dual Light & Dark Theme System:**
  - Engineered zero-flash, React 19 compliant theme architecture using `useSyncExternalStore` and `localStorage` persistence in `ThemeProvider.tsx`.
  - Built interactive `ThemeToggle.tsx` with Sun/Moon icons in the desktop Navbar and mobile drawer.
  - Added comprehensive high-legibility light theme styling in `globals.css` with crisp contrast, slate typography, and signature warm orange accents.

## [1.2.0] - 2026-11-19

### Brand Identity & Executive Polish (Decent Obsidian & Warm Orange Palette)
- **Official Brand Color & Logo Integration:**
  - Integrated the official brand emblem (`media_1795037971656_8e1e64f2.png`): transparent high-res logo with silver-white "Q" ribbon and fiery orange "9" ribbon (`public/images/q9-logo-transparent.png`).
  - Extracted transparent Q9 monogram (`public/images/q9-monogram-transparent.png`) for the central 3D Orbit Stage core and favicons.
  - Replaced generic/loud blue backgrounds with a sophisticated, executive Obsidian Onyx palette:
    - Base canvas: `#090A0F`
    - Alternate section depth: `#0E1017`
    - Frosted glass surface: `#13151F` / `#181B28`
    - Brand fiery orange: `#FF6A00` to `#FFAA00`
    - Pure silver & zinc text: `#FFFFFF`, `#F9FAFB`, `#9CA3AF`
- **Zero Emojis Policy Enforced:**
  - Removed all emojis across all pages and components; replaced with professional vector `lucide-react` icons and SVGs.
- **Complete Page Differentiation:**
  - **Home (`/`):** 3D Orbit Stage with rotating domain badges and pulsing Q9 core, Facts Strip floating console, WhatWeBuild Spotlight cards, AboutSnippet layered 3D lifecycle interface, preview sections, CTABanner, ContactPreview.
  - **About (`/about`):** Narrative executive layout, 3-point app lifecycle cards, bespoke Mission & Vision split with warm accents, Looking Ahead closing.
  - **Approach (`/approach`):** Interactive 4-step progressive timeline pipeline (Discovery, Ergonomics, Telemetry, Refinement) with deliverables.
  - **Culture (`/culture`):** 4 Culture Pillars in a 2x2 Bento grid, followed by a 6 Core Values architectural grid.
  - **Contact (`/contact`):** Split interactive desk with validated `ContactForm` (honeypot, 3s anti-bot check, 10s rate limit, Web3Forms API + mailto fallback) and `ContactInfo` with working Google Map embed.
- **Quality Assurance & Build:**
  - `npm run typecheck`: 0 errors.
  - `npm run lint`: 0 errors, 0 warnings.
  - `npm run build`: 16/16 static pages generated.

## [1.2.0] - 2026-11-21

### Bespoke Agency Redesign, Scroll Synchronization & Technical SEO Upgrade
- **Replaced Circular Orbit with Mobile Studio Showcase:**
  - Removed circular orbit rings (`OrbitHeroStage.tsx`) to eliminate AI-template / vibe-coded feel.
  - Built bespoke **Mobile App Studio Showcase** (`AppStudioShowcase.tsx`): titanium chassis device frame with dynamic island, live interactive category tabs (Photography RAW 48MP camera viewfinder, Productivity task flow dashboard, and Utilities system telemetry), 60 FPS verification badge, and native Swift/Kotlin architecture tags.
- **Synchronized & Slower Website-Wide Animations:**
  - Updated `Reveal.tsx` to slow animation duration to 0.85s with a luxury cubic-bezier deceleration curve (`[0.22, 1, 0.36, 1]`) and increased scroll viewport threshold (`amount: 0.2`, `margin: "0px 0px -60px 0px"`), preventing animations from triggering prematurely ahead of user scroll.
  - Slowed ambient background light drifts (`BackgroundBeams.tsx`) to 26s–32s for calm, refined luxury motion.
- **Fixed StatCounter Scroll Trigger:**
  - Updated `StatCounter.tsx` to require 50% element visibility (`amount: 0.5`, `margin: "0px 0px -100px 0px"`), ensuring the count-up strictly triggers when the user has scrolled down to the Facts Strip.
  - Implemented 1800ms ease-out cubic interpolation (`requestAnimationFrame`) for smooth, discernible numerical acceleration and settling.
- **Modernized Contact Experience & Enlarged Map:**
  - Re-engineered `contact/page.tsx` with a top Studio Overview SLA Strip (`< 24 Hours Reply`, `PKT (UTC+5)`, Direct Phone, Rawalpindi HQ).
  - Modernized `MapEmbed.tsx` into an imposing full-width console (`min-h-[440px] sm:min-h-[500px] lg:min-h-[560px]`) featuring live studio operational status, GPS satellite coordinates (`33.6425° N, 73.0694° E`), studio hours, and a direct Google Maps navigation button.
- **Technical SEO Audit & Enterprise Enhancements:**
  - Added Google-compliant `ProfessionalService` JSON-LD schema with GPS coordinates, studio hours, service catalog, price range, and accepted currencies.
  - Added JSON-LD `BreadcrumbList` schema across all subpages (`/about`, `/approach`, `/culture`, `/contact`, `/apps`).
  - Added comprehensive canonical links, language alternates (`en-US`), and keyword indexing to `constructMetadata()`.
  - Updated `robots.ts` to allow indexing of all public pages and point directly to `sitemap.xml`.

## [1.1.0] - 2026-11-19

### Visual Design & Animation Overhaul (Awwwards / Bespoke Studio Grade)
- **Eliminated AI-Generic Aesthetics:**
  - Completely replaced generic flat cards with **Interactive Spotlight Cards** (`SpotlightCard.tsx`) featuring real-time cursor-following radial light reflections and border highlights.
  - Implemented Technolyte-inspired **3D Orbit Hero Stage** (`OrbitHeroStage.tsx`) with concentric 3D orbit rings, a central pulsing Q9 Hologram Core, and 8 orbiting domain badges (Photography, Productivity, Utilities, iOS, Android, Practical Apps, Iterative Cycle, User First) that counter-rotate 360° to remain continuously upright and interactive with hover tooltips.
- **Custom Color Palette & Luminous Elements:**
  - Designed Q9's bespoke palette: Cosmic Obsidian Midnight (`#050814` to `#0a1024`) with high-contrast radiant light accents: Electric Cyan (`#38bdf8`), Luminous Indigo/Violet (`#818cf8`), Radiant Emerald (`#34d399`), Amber (`#fbbf24`), and ice-white text with kinetic gradient shimmer (`animate-shimmer`).
  - Added luminous frosted glass card variants (`.q9-card-luminous`) with glowing laser dividers (`GlowDivider.tsx`).
- **Dynamic Kinetic Motion:**
  - Built `BackgroundBeams.tsx` providing subtle ambient floating light orbs and perspective grid lines.
  - Added primary button light sweep shimmer animation (`.q9-btn-primary::after`).
  - Elevated Facts Strip into a floating illuminated glass console.
  - Elevated About snippet with a layered 3D App Lifecycle Glass Card composition.
  - Updated all inner pages (`/about`, `/approach`, `/culture`, `/contact`) to use SpotlightCards with custom glowing hues.
- **Verification:**
  - All 16 routes build 100% statically with zero errors, zero warnings.
