export const site = {
  name: "Q9 Technologies",
  tagline: "Simpler Tomorrow",
  headline: "Great People Building Useful Apps",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://q9technologies.com",
  email: "support.q9technologies@gmail.com",
  phoneDisplay: "+92 327 5005540",
  phoneLocal: "03275005540",
  phoneTel: "+923275005540",
  whatsapp: "https://wa.me/923275005540", // shown only if features.whatsapp is true
  linkedin: "https://www.linkedin.com/company/116006515/",
  address: {
    line1: "44b Commercial Market Rd",
    city: "Rawalpindi City",
    postalCode: "46000",
    region: "Punjab",
    country: "Pakistan",
    countryCode: "PK",
    full: "44b Commercial Market Rd, Rawalpindi City, 46000, Punjab, Pakistan",
  },
  addressUrdu: "۴۴ بی، کمرشل مارکیٹ روڈ، تحصیل راولپنڈی شہر، راولپنڈی، پنجاب 46000",
  mapEmbedUrl:
    "https://www.google.com/maps?q=44b%20Commercial%20Market%20Rd%2C%20Rawalpindi%2046000%2C%20Pakistan&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=44b%20Commercial%20Market%20Rd%2C%20Rawalpindi%2046000%2C%20Pakistan",
} as const;

export type SiteConfig = typeof site;
