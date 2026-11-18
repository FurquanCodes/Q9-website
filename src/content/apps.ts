export interface AppItem {
  id: string;
  name: string;
  category: "Photography" | "Productivity" | "Utilities" | "Other";
  description: string;
  platform: ("Android" | "iOS")[];
  iconUrl?: string;
  storeUrl?: string;
}

export const appsContent = {
  hero: {
    eyebrow: "Our apps",
    title: "Applications & Products",
    subtitle:
      "We build mobile applications that solve everyday problems, simplify routine tasks, and create better digital experiences.",
  },
  emptyState: {
    title: "Coming Soon",
    description:
      "We are currently finalizing our initial suite of mobile applications across photography, productivity, and utilities. Check back soon for launch announcements.",
  },
  apps: [] as AppItem[],
} as const;
