export interface CultureItem {
  id: string;
  title: string;
  description: string;
  iconName: "ShieldCheck" | "Award" | "Users" | "GraduationCap";
}

export const cultureContent = {
  hero: {
    eyebrow: "Our culture",
    title: "Our Culture",
    subtitle:
      "We believe a strong company is built by people who are trusted, respected, and given the opportunity to grow. Our culture encourages responsibility, collaboration, independent thinking, and a shared commitment to doing good work.",
  },
  intro:
    "We believe a strong company is built by people who are trusted, respected, and given the opportunity to grow. Our culture encourages responsibility, collaboration, independent thinking, and a shared commitment to doing good work.",
  items: [
    {
      id: "trust-and-ownership",
      title: "Trust and Ownership",
      description:
        "We encourage team members to take responsibility, contribute ideas, make informed decisions, and take ownership of their work and outcomes.",
      iconName: "ShieldCheck",
    },
    {
      id: "growth-through-merit",
      title: "Growth Through Merit",
      description:
        "We value effort, capability, accountability, and results. Opportunities for growth should be based on merit and contribution, supported by fairness and equal opportunity rather than personal connections or favoritism.",
      iconName: "Award",
    },
    {
      id: "respect-for-everyone",
      title: "Respect for Everyone",
      description:
        "Every role contributes to the work we do. We aim to maintain an environment where people are treated fairly, different perspectives are respected, and team members feel comfortable sharing ideas.",
      iconName: "Users",
    },
    {
      id: "learning-and-development",
      title: "Learning and Development",
      description:
        "We encourage curiosity, knowledge-sharing, and continuous improvement. As our products and the technology around them evolve, we believe our people should have opportunities to develop alongside them.",
      iconName: "GraduationCap",
    },
  ] as CultureItem[],
  ctaBanner: {
    headline: "Simpler Tomorrow",
    paragraph:
      "Building a workplace where people and partners can develop their capabilities, contribute meaningfully, and grow through opportunity and merit.",
    buttonText: "Get in touch",
    buttonHref: "/contact",
  },
} as const;
