export interface TechnologyGroup {
  id: string;
  category: string;
  description: string;
  iconName: "Smartphone" | "Layers" | "Code" | "Database" | "Cpu" | "Shield";
  accentColor: string;
  technologies: {
    name: string;
    level: string;
    tag: string;
  }[];
}

export const technologiesData: TechnologyGroup[] = [
  {
    id: "ios",
    category: "iOS Native Engineering",
    description: "Building high-framerate, fluid experiences exclusively tailored to Apple platforms.",
    iconName: "Smartphone",
    accentColor: "#ff7a00",
    technologies: [
      { name: "Swift 6.0", level: "Core Language", tag: "Memory Safe" },
      { name: "SwiftUI", level: "Declarative UI", tag: "Modern Interface" },
      { name: "Combine & Concurrency", level: "Async State", tag: "Reactive" },
      { name: "SwiftData / CoreData", level: "Local Persistence", tag: "Offline-First" },
      { name: "AVFoundation", level: "Camera & Audio", tag: "Low-Latency" },
      { name: "Core Image & Metal", level: "GPU Acceleration", tag: "Hardware Shaders" },
    ],
  },
  {
    id: "android",
    category: "Android Native Engineering",
    description: "Developing robust, modern Android applications across diverse screen factors.",
    iconName: "Layers",
    accentColor: "#ffaa00",
    technologies: [
      { name: "Modern Kotlin", level: "Core Language", tag: "Coroutines" },
      { name: "Jetpack Compose", level: "Declarative UI", tag: "Material 3" },
      { name: "StateFlow & Coroutines", level: "Async Architecture", tag: "Non-Blocking" },
      { name: "Room SQLite", level: "Database Layer", tag: "Type-Safe" },
      { name: "CameraX", level: "Visual Capture", tag: "Device Adaptive" },
      { name: "WorkManager", level: "Background Processing", tag: "Battery Efficient" },
    ],
  },
  {
    id: "fullstack",
    category: "Full-Stack & Web Systems",
    description: "Architecting responsive web interfaces, robust APIs, and developer-grade tooling.",
    iconName: "Code",
    accentColor: "#38bdf8",
    technologies: [
      { name: "TypeScript", level: "Language Standard", tag: "Strict Types" },
      { name: "Next.js 16 (App Router)", level: "Production Framework", tag: "SSR & Static" },
      { name: "React 19", level: "UI Library", tag: "Concurrent Mode" },
      { name: "Node.js", level: "Runtime", tag: "High Throughput" },
      { name: "Tailwind CSS v4", level: "Design Tokens", tag: "Ultra Light" },
      { name: "REST & WebSockets", level: "Protocols", tag: "Real-Time Sync" },
    ],
  },
  {
    id: "cloud-architecture",
    category: "Cloud, Persistence & Security",
    description: "Ensuring zero data loss, offline resilience, and secure end-to-end data handling.",
    iconName: "Database",
    accentColor: "#10b981",
    technologies: [
      { name: "PostgreSQL & Supabase", level: "Relational DB", tag: "ACID Compliant" },
      { name: "Firebase Ecosystem", level: "Realtime & Push", tag: "Cloud Sync" },
      { name: "Keychain & KeyStore", level: "Security", tag: "Hardware Encrypted" },
      { name: "Clean Architecture", level: "System Design", tag: "MVVM / MVI" },
      { name: "CI/CD GitHub Actions", level: "Automation", tag: "Zero-Downtime" },
      { name: "Instruments & Profiling", level: "Quality Assurance", tag: "60 FPS Verified" },
    ],
  },
];

export const technologiesContent = {
  eyebrow: "Our Tech Stack",
  title: "Technologies We Work On",
  subtitle:
    "We engineer native mobile applications and full-stack systems using modern, battle-tested technologies prioritized for speed, reliability, and long-term maintainability.",
} as const;
