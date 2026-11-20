export interface WhatWeBuildCard {
  id: string;
  category: string;
  description: string;
  iconName: "Camera" | "CheckSquare" | "Wrench" | "LayoutGrid";
}

export interface FactItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

export const homeContent = {
  hero: {
    eyebrow: "Simpler Tomorrow • Mobile Software Studio",
    headline: "Great People Building Useful Apps",
    subheadline:
      "Guided by our core motto 'Simpler Tomorrow', we build mobile applications that solve everyday problems, eliminate digital friction, and create purposeful software.",
    introParagraph:
      "Guided by our core mission — 'Simpler Tomorrow' — we engineer native Android and iOS applications that solve real-world problems, simplify routine tasks, and create accessible, reliable digital experiences.",
    primaryCta: "Contact us",
    secondaryCta: "Explore products",
  },
  facts: [
    {
      id: "platforms",
      value: 2,
      label: "Platforms",
      sublabel: "Android and iOS",
    },
    {
      id: "approach-steps",
      value: 4,
      label: "Approach Steps",
      sublabel: "Steps in our approach",
    },
    {
      id: "core-values",
      value: 6,
      label: "Core Values",
      sublabel: "Guiding principles",
    },
  ] as FactItem[],
  whatWeBuild: {
    eyebrow: "What we build",
    title: "Practical Mobile Applications",
    subtitle:
      "Q9 Technologies is a mobile app development company focused on Android and iOS applications across photography, productivity, utilities, and other practical categories.",
    cards: [
      {
        id: "photography",
        category: "Photography",
        description: "Mobile apps for photography.",
        iconName: "Camera",
      },
      {
        id: "productivity",
        category: "Productivity",
        description: "Mobile apps that simplify routine tasks.",
        iconName: "CheckSquare",
      },
      {
        id: "utilities",
        category: "Utilities",
        description: "Practical mobile apps that solve everyday problems.",
        iconName: "Wrench",
      },
      {
        id: "more-apps",
        category: "More practical apps",
        description:
          "Other practical categories, built around real user needs.",
        iconName: "LayoutGrid",
      },
    ] as WhatWeBuildCard[],
  },
  aboutSnippet: {
    eyebrow: "About us",
    title: "Building Products that Serve Real Needs",
    paragraphs: [
      "At Q9 Technologies, we approach app development with a clear purpose: build products that serve real needs.",
      "Every application begins with a problem worth solving. We explore how people approach that problem, identify opportunities to make the experience simpler, and develop solutions that fit naturally into their daily lives.",
    ],
    ctaText: "Learn more about us",
    ctaHref: "/about",
  },
  approachPreview: {
    eyebrow: "Our approach",
    title: "How We Build Applications",
    subtitle:
      "We see app development as an ongoing process rather than a one-time delivery.",
    ctaText: "See how we work",
    ctaHref: "/approach",
  },
  cultureHighlight: {
    eyebrow: "Our culture",
    title: "Why Q9 Technologies",
    subtitle:
      "We believe a strong company is built by people who are trusted, respected, and given the opportunity to grow.",
    ctaText: "Learn more about our culture",
    ctaHref: "/culture",
  },
  ctaBanner: {
    headline: "Simpler Tomorrow",
    paragraph:
      "At Q9 Technologies, we see every product as an opportunity to understand users better, solve a meaningful problem, and create something useful.",
    buttonText: "Get in touch",
    buttonHref: "/contact",
  },
  contactPreview: {
    eyebrow: "Contact",
    title: "Get in Touch with Q9",
    subtitle: "Let's talk about your next idea.",
    ctaText: "Contact us",
    ctaHref: "/contact",
  },
} as const;
