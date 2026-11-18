# MISSING-CONTENT.md — Client Input Status

Per project specifications, any content not yet supplied by the lead is logged here and hidden behind feature flags or safe placeholders. Never invent content.

| Item | Current State | Where it appears | Action Required from Lead |
|---|---|---|---|
| **Official Vector Logo** | ✅ **PROVIDED & INTEGRATED** (Official ribbon emblem + TECHNOLOGIES + SIMPLER TOMORROW) | Navbar, Footer, 3D Orbit Stage, OG images | Resolved. Using official brand assets in `public/images/`. |
| **Mobile Apps Portfolio** | Feature flag `features.apps = false`; `/apps` route stubbed | `/apps` page, Home "What we build" cards link | Provide app names, descriptions, store links, screenshots to `src/content/apps.ts` |
| **Privacy Policy text** | Stub page with notice, `robots: noindex` | `/privacy-policy` | Provide official privacy policy copy |
| **Terms of Service text** | Stub page with notice, `robots: noindex` | `/terms` | Provide official terms copy |
| **Web3Forms Access Key** | Fallback `mailto:` handler active | Contact form submission | Register free at web3forms.com with `support.q9technologies@gmail.com` and add key to `.env.local` |
| **WhatsApp Support** | Feature flag `features.whatsapp = false` | Contact info cards | Confirm if WhatsApp inquiries are accepted on `+92 327 5005540` |
| **Additional Social Profiles** | Only LinkedIn enabled in `src/config/site.ts` | Footer & Contact page | Provide links for YouTube, X (Twitter), Facebook, etc. if available |
