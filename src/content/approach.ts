export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export const approachContent = {
  hero: {
    eyebrow: "Our approach",
    title: "Our Approach",
    subtitle:
      "We see app development as an ongoing process rather than a one-time delivery. A successful product requires attention to usability, reliability, performance, and the changing expectations of its audience.",
  },
  steps: [
    {
      step: "01",
      title: "Understand the Need",
      description:
        "We begin by identifying the problem a product is intended to solve. Understanding the user helps us focus on features that provide genuine value.",
    },
    {
      step: "02",
      title: "Build with Purpose",
      description:
        "We prioritize functionality, clarity, and ease of use. Our goal is to develop applications that feel straightforward and useful rather than unnecessarily complicated.",
    },
    {
      step: "03",
      title: "Learn Through Feedback",
      description:
        "We evaluate how our products perform, listen to user feedback, and look for opportunities to improve the experience.",
    },
    {
      step: "04",
      title: "Improve Continuously",
      description:
        "We believe meaningful products evolve over time. Testing, learning, and refinement help us make better decisions with every release.",
    },
  ] as ApproachStep[],
  callout: {
    statement:
      "We see app development as an ongoing process rather than a one-time delivery. A successful product requires attention to usability, reliability, performance, and the changing expectations of its audience.",
  },
  ctaBanner: {
    headline: "Simpler Tomorrow",
    paragraph:
      "At Q9 Technologies, we see every product as an opportunity to understand users better, solve a meaningful problem, and create something useful.",
    buttonText: "Get in touch",
    buttonHref: "/contact",
  },
} as const;
