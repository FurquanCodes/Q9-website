export interface CollaborationPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

export const collaborationPillars: CollaborationPillar[] = [
  {
    id: "agency-partnership",
    title: "Specialized Mobile Co-Engineering",
    subtitle: "Partnering with fellow software houses and digital agencies",
    description:
      "When peer agencies, tech firms, or web software houses require dedicated native iOS (Swift) or Android (Kotlin) expertise, Q9 integrates seamlessly as a reliable engineering co-development partner.",
    benefits: [
      "White-label or collaborative co-delivery",
      "Strict NDA & IP ownership protection",
      "Seamless sprint alignment with your PMs",
      "Direct code commits into your repositories",
    ],
  },
  {
    id: "founder-co-development",
    title: "Founder & Product Co-Development",
    subtitle: "Taking products from architectural conception to market release",
    description:
      "We partner with startup founders and enterprise product leaders who have clear domain problems to solve. We transform their product vision into production-grade mobile applications with clean architecture.",
    benefits: [
      "Rapid prototyping with native telemetry",
      "Offline-first architecture & cloud sync",
      "App Store & Google Play compliance",
      "Iterative post-launch user analytics",
    ],
  },
  {
    id: "open-industry-synergy",
    title: "Open Industry Synergies & Shared Utility",
    subtitle: "Building together for a simpler digital tomorrow",
    description:
      "We believe technology moves faster when companies collaborate rather than operate in silos. We actively share engineering best practices, collaborate on reusable developer tooling, and support community growth.",
    benefits: [
      "High information-density engineering",
      "Transparent communication & progress demos",
      "Zero-latency technical problem solving",
      "Shared mission: creating practical value",
    ],
  },
];

export const collaborationContent = {
  eyebrow: "Industry Partnerships",
  title: "Collaboration & Working Together",
  subtitle:
    "We believe the best mobile products are built through open industry collaboration, co-engineering, and strategic partnerships with software houses and product teams.",
} as const;
