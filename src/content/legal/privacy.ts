import { site } from "@/config/site";

export const privacyContent = {
  title: "Privacy Policy",
  eyebrow: "Legal",
  lastUpdated: "November 2026",
  notice:
    "This page will be updated with the complete official privacy policy for Q9 Technologies and its mobile applications.",
  sections: [
    {
      heading: "Overview",
      body: "Q9 Technologies values user privacy and transparency. We are currently drafting our comprehensive privacy documentation for our mobile applications and digital services.",
    },
    {
      heading: "Contact",
      body: `If you have any questions regarding privacy or data handling, please contact ${site.email}.`,
    },
  ],
} as const;
