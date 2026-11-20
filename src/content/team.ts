export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  linkedin: string;
  initials: string;
  avatarUrl?: string;
  specialties: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "nadir-abbas",
    name: "Nadir Abbas",
    role: "CEO",
    department: "Executive Leadership",
    bio: "Guiding Q9 Technologies with a focused vision: building purposeful mobile applications that solve real-world problems and create a simpler tomorrow.",
    linkedin: "https://www.linkedin.com/in/nadir-abbas-942176313/",
    initials: "NA",
    avatarUrl: "/images/team/nadir-abbas.jpg",
    specialties: ["Strategic Vision", "Product Direction", "Team Growth", "Partnerships"],
  },
  {
    id: "ehsan-rahim",
    name: "Ehsan Rahim",
    role: "Marketing Director",
    department: "Growth & Market Strategy",
    bio: "Leading market expansion, user acquisition strategies, and strategic industry collaboration to connect Q9's applications with global audiences.",
    linkedin: "https://www.linkedin.com/in/ehsan-rahim-233692347/",
    initials: "ER",
    avatarUrl: "/images/team/ehsan-rahim.jpg",
    specialties: ["Market Positioning", "Growth Strategy", "Industry Outreach", "User Acquisition"],
  },
  {
    id: "raja-husnain-ali",
    name: "Raja Husnain Ali",
    role: "Production Director",
    department: "Product Delivery & Engineering",
    bio: "Directing product execution, engineering sprints, and quality assurance to ensure every Q9 release meets rigorous native performance benchmarks.",
    linkedin: "https://www.linkedin.com/in/raja-hussnain-ali-721ba11ba/",
    initials: "RH",
    avatarUrl: "/images/team/raja-husnain-ali.jpg",
    specialties: ["Sprint Execution", "Engineering Quality", "Native Performance", "Release Delivery"],
  },
  {
    id: "muhammad-asjad",
    name: "Muhammad Asjad",
    role: "Full Stack Developer",
    department: "Full Stack & Systems Engineering",
    bio: "Architecting end-to-end full-stack systems, cloud APIs, and responsive digital interfaces with modern TypeScript, Next.js, and cloud backends.",
    linkedin: "https://www.linkedin.com/in/asjad-raja-2775331a3/",
    initials: "MA",
    avatarUrl: "/images/team/muhammad-asjad.jpg",
    specialties: ["Full-Stack Architecture", "Next.js & TypeScript", "Cloud APIs", "System Integration"],
  },
];

export const teamContent = {
  eyebrow: "Our Team",
  title: "Leadership & Engineering Team",
  subtitle:
    "Experienced leaders and engineers working collaboratively to build accessible, reliable mobile software and industry partnerships.",
} as const;
