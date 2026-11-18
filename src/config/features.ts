export const features = {
  apps: false, // /apps page and nav link (set to true when apps are ready)
  whatsapp: false, // WhatsApp button (disabled until confirmed)
  quoteModal: false, // navbar/hero opens modal instead of /contact
  team: false, // Team grid (disabled, no invented team)
  logoMarquee: false, // Logo marquee (disabled, no invented clients)
  testimonials: false, // Testimonials (disabled, no invented reviews)
  privacyPage: true, // stub page (noindex until real text)
  termsPage: true, // stub page (noindex until real text)
} as const;

export type FeaturesConfig = typeof features;
