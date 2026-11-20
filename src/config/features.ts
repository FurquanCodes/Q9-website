export const features = {
  apps: true, // /products and /apps page enabled
  whatsapp: false, // WhatsApp button (disabled until confirmed)
  quoteModal: false, // navbar/hero opens modal instead of /contact
  team: true, // Team grid enabled with verified leadership
  logoMarquee: false, // Logo marquee (disabled, no invented clients)
  testimonials: false, // Testimonials (disabled, no invented reviews)
  privacyPage: true, // stub page (noindex until real text)
  termsPage: true, // stub page (noindex until real text)
} as const;

export type FeaturesConfig = typeof features;
