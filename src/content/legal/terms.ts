import { site } from "@/config/site";

export const termsContent = {
  title: "Terms of Service",
  eyebrow: "Legal",
  lastUpdated: "November 2026",
  notice:
    "This page will be updated with the complete official terms of service for Q9 Technologies and its mobile applications.",
  sections: [
    {
      heading: "Overview",
      body: "These terms govern the use of Q9 Technologies websites, applications, and related services. Full terms are currently being formulated.",
    },
    {
      heading: "Contact",
      body: `For any inquiries regarding terms and conditions, please reach out to ${site.email}.`,
    },
  ],
} as const;
