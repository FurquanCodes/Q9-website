export interface ProductItem {
  id: string;
  name: string;
  category: "Photography" | "Productivity" | "Utilities";
  status: "Private Beta" | "Active Engineering" | "In Development";
  tagline: string;
  description: string;
  platforms: ("iOS" | "Android")[];
  highlights: string[];
  specs: {
    engine: string;
    targetFps: string;
    sync: string;
  };
}

export const productsList: ProductItem[] = [
  {
    id: "lumina-raw",
    name: "Lumina RAW Studio",
    category: "Photography",
    status: "Active Engineering",
    tagline: "Pro Mobile Camera & Non-Destructive RAW Grading",
    description:
      "Engineered for photographers who demand tactile, low-latency control. Features full manual exposure tuning, real-time RGB histogram telemetry, 48MP capture pipeline, and hardware-accelerated color grading.",
    platforms: ["iOS", "Android"],
    highlights: [
      "Hardware-accelerated Metal & Vulkan rendering",
      "Manual ISO, shutter speed & Kelvin white-balance",
      "Lossless 14-bit RAW & DNG export",
      "Zero-latency focus-peaking reticle",
    ],
    specs: {
      engine: "Core Image + CameraX",
      targetFps: "60.0 FPS",
      sync: "Local Offline Storage",
    },
  },
  {
    id: "flowstate-tasks",
    name: "FlowState Workspace",
    category: "Productivity",
    status: "Private Beta",
    tagline: "Distraction-Free Daily Sprints & Task Flow",
    description:
      "A high-speed personal productivity tool designed to reduce cognitive overhead. Features friction-free gesture capture, local-first database caching, and instant cloud sync across devices.",
    platforms: ["iOS", "Android"],
    highlights: [
      "Sub-millisecond local SQLite persistence",
      "Distraction-free focus timer with ambient acoustics",
      "Zero-dependency instant gesture navigation",
      "Bidirectional encrypted cloud synchronization",
    ],
    specs: {
      engine: "SwiftData + Room SQLite",
      targetFps: "120Hz ProMotion",
      sync: "End-to-End Encrypted Sync",
    },
  },
  {
    id: "omnitool-utility",
    name: "OmniTool System Suite",
    category: "Utilities",
    status: "Active Engineering",
    tagline: "High-Performance Everyday Pocket Utilities",
    description:
      "A consolidated suite of lightweight, essential utilities including multi-unit scientific conversions, rapid file inspection, and network latency diagnostics—packaged in a featherweight footprint.",
    platforms: ["iOS", "Android"],
    highlights: [
      "Featherweight footprint under 20MB",
      "Instant launch time with zero startup delay",
      "Comprehensive offline capability without internet",
      "Strict privacy: zero telemetry or tracking SDKs",
    ],
    specs: {
      engine: "Native Swift & Kotlin",
      targetFps: "60.0 FPS",
      sync: "100% Offline Capable",
    },
  },
  {
    id: "cleanpulse-monitor",
    name: "CleanPulse Diagnostic",
    category: "Utilities",
    status: "In Development",
    tagline: "Hardware Health & Storage Telemetry",
    description:
      "Deep device diagnostic telemetry that monitors real-time battery thermal cycles, memory heap allocation, and storage clutter with complete transparency and user privacy.",
    platforms: ["Android", "iOS"],
    highlights: [
      "Real-time thermal throttling telemetry",
      "Memory leak and dormant cache detection",
      "Battery health cycle tracking",
      "Battery-efficient background scheduling",
    ],
    specs: {
      engine: "WorkManager + CoreGraphics",
      targetFps: "60.0 FPS",
      sync: "On-Device Processing",
    },
  },
];

export const productsContent = {
  hero: {
    eyebrow: "Our Products",
    title: "Applications & Products",
    subtitle:
      "Explore our suite of purposeful mobile applications engineered to simplify routine tasks, streamline daily workflows, and create better digital experiences.",
  },
  filters: [
    { id: "all", label: "All Products" },
    { id: "photography", label: "Photography" },
    { id: "productivity", label: "Productivity" },
    { id: "utilities", label: "Utilities" },
  ],
} as const;
