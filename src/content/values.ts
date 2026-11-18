export interface ValueItem {
  id: string;
  title: string;
  description: string;
  number: string;
}

export const valuesContent = {
  section: {
    eyebrow: "Our values",
    title: "Our Values",
    subtitle:
      "Core principles guiding how we make decisions, build software, and work together.",
  },
  values: [
    {
      id: "user-first",
      number: "01",
      title: "User First",
      description:
        "We make product decisions with users' needs, expectations, and real-world experiences in mind.",
    },
    {
      id: "simplicity",
      number: "02",
      title: "Simplicity",
      description:
        "We aim to remove unnecessary complexity and create experiences that are clear, intuitive, and easy to navigate.",
    },
    {
      id: "fairness",
      number: "03",
      title: "Fairness",
      description:
        "We believe in equal opportunity, transparent expectations, and recognizing people for their contributions and capabilities.",
    },
    {
      id: "responsibility",
      number: "04",
      title: "Responsibility",
      description:
        "We take our work seriously, make thoughtful decisions, and accept accountability for the outcomes of our efforts.",
    },
    {
      id: "continuous-learning",
      number: "05",
      title: "Continuous Learning",
      description:
        "We use feedback, experimentation, and practical insights to understand what works and where improvement is needed.",
    },
    {
      id: "respect-and-collaboration",
      number: "06",
      title: "Respect and Collaboration",
      description:
        "We believe better outcomes emerge when people communicate openly, work constructively, and respect one another's contributions.",
    },
  ] as ValueItem[],
} as const;
