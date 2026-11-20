"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Camera,
  CheckSquare,
  Wrench,
  Smartphone,
  Cpu,
  Layers,
  Sparkles,
  Check,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type AppCategory = "photography" | "productivity" | "utilities";

interface CategoryData {
  id: AppCategory;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  accentColor: string;
  badge: string;
}

const CATEGORIES: CategoryData[] = [
  {
    id: "photography",
    name: "Photography",
    tagline: "Pro Camera & Visual Tools",
    icon: <Camera className="h-4 w-4" />,
    accentColor: "#ff7a00",
    badge: "RAW Engine • 48MP",
  },
  {
    id: "productivity",
    name: "Productivity",
    tagline: "Task & Workflow Automation",
    icon: <CheckSquare className="h-4 w-4" />,
    accentColor: "#ffaa00",
    badge: "Instant Sync • Offline First",
  },
  {
    id: "utilities",
    name: "Utilities",
    tagline: "Everyday System Tools",
    icon: <Wrench className="h-4 w-4" />,
    accentColor: "#ff8c1a",
    badge: "60 FPS • Lightweight",
  },
];

export function AppStudioShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<AppCategory>("photography");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto cycle categories gently every 6 seconds unless user manually interacts
  useEffect(() => {
    if (!isAutoPlaying || shouldReduceMotion) return;

    const timer = setInterval(() => {
      setActiveCategory((current) => {
        if (current === "photography") return "productivity";
        if (current === "productivity") return "utilities";
        return "photography";
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, shouldReduceMotion]);

  const currentCat = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className="relative mx-auto flex w-full max-w-[560px] flex-col items-center select-none">
      {/* 1. Subtle, Luxurious Ambient Warm Glow (No spinning circles) */}
      <div
        className="pointer-events-none absolute -top-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.16)_0%,rgba(255,170,0,0.06)_45%,transparent_75%)] blur-3xl"
        aria-hidden="true"
      />

      {/* 2. Top Interactive Category Selector */}
      <div className="relative z-20 mb-6 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0e1017]/90 p-1.5 shadow-2xl backdrop-blur-xl">
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveCategory(cat.id);
              }}
              className={`relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? "text-white shadow-lg"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ffaa00] shadow-[0_0_20px_rgba(255,106,0,0.4)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.icon}</span>
              <span className="relative z-10 hidden sm:inline">{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Titanium Device Mockup & Engineering Telemetry Console */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {/* Floating Architecture Badge 1 (Top Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-4 -left-4 sm:-left-8 z-30 hidden xs:flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#13151f]/95 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6a00] to-[#ffaa00] text-white shadow-md">
            <Smartphone className="h-4 w-4" />
          </div>
          <div className="text-left">
            <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
              <span>SwiftUI & Compose</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[10px] text-zinc-400">100% Native Architecture</div>
          </div>
        </motion.div>

        {/* Floating Architecture Badge 2 (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -bottom-4 -right-2 sm:-right-6 z-30 hidden xs:flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#13151f]/95 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.08] border border-white/20 text-[#ffaa00] shadow-md">
            <Cpu className="h-4 w-4" />
          </div>
          <div className="text-left">
            <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
              <span>60 FPS Verified</span>
              <span className="text-[9px] font-mono text-[#ffaa00]">0ms Jitter</span>
            </div>
            <div className="text-[10px] text-zinc-400">High-Performance Runtime</div>
          </div>
        </motion.div>

        {/* The Titanium Device Chassis */}
        <div className="relative mx-auto w-[290px] sm:w-[320px] rounded-[44px] border-[5px] border-[#222533] bg-[#090a0f] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,106,0,0.12)] ring-1 ring-white/10">
          {/* Subtle Outer Metal Chassis Glare */}
          <div className="absolute inset-0 rounded-[39px] pointer-events-none border border-white/15" />

          {/* Dynamic Island / Notch Sensor Pill */}
          <div className="relative z-30 mx-auto -mt-1 mb-2.5 flex h-4.5 w-24 items-center justify-between rounded-full bg-black px-2 shadow-inner">
            <span className="h-2 w-2 rounded-full bg-zinc-900 border border-zinc-700/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a00]/80 animate-pulse" />
          </div>

          {/* Device Screen Viewport */}
          <div className="relative h-[430px] sm:h-[460px] w-full overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0f111a] via-[#11131f] to-[#0a0b10] border border-white/10 shadow-inner flex flex-col justify-between p-4">
            {/* Screen Header Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 pt-1">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-8">
                  <Image
                    src="/images/q9-monogram-transparent.png"
                    alt="Q9 Logo"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-200 font-mono">
                  Q9 Studio
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  LIVE
                </span>
              </div>
            </div>

            {/* Screen Content: Category Specific Dynamic Canvas */}
            <div className="relative flex-1 py-3 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeCategory === "photography" && (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col justify-between"
                  >
                    {/* Viewfinder Mockup */}
                    <div className="relative h-44 w-full rounded-2xl border border-white/15 bg-gradient-to-br from-zinc-900 to-black overflow-hidden p-3 shadow-inner flex flex-col justify-between">
                      {/* Grid crosshairs */}
                      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
                        <div className="border-r border-b border-white/50" />
                        <div className="border-r border-b border-white/50" />
                        <div className="border-b border-white/50" />
                        <div className="border-r border-b border-white/50" />
                        <div className="border-r border-b border-white/50" />
                        <div className="border-b border-white/50" />
                        <div className="border-r border-white/50" />
                        <div className="border-r border-white/50" />
                        <div />
                      </div>

                      {/* Top Viewfinder Telemetry */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-300">
                        <span className="bg-[#ff6a00]/20 border border-[#ff6a00]/40 text-[#ffaa00] px-1.5 py-0.5 rounded">
                          RAW • 48MP
                        </span>
                        <span>AF-C • HDR</span>
                      </div>

                      {/* Center Focus Reticle */}
                      <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-lg border border-dashed border-[#ffaa00]/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a00]" />
                      </div>

                      {/* Bottom Camera Settings */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-300 bg-black/60 px-2 py-1 rounded-lg backdrop-blur-sm">
                        <span>ISO 125</span>
                        <span>1/250s</span>
                        <span className="text-[#ffaa00]">f/1.8</span>
                        <span>50mm</span>
                      </div>
                    </div>

                    {/* App Description Card */}
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Photography Suite</span>
                        <span className="text-[10px] font-semibold text-[#ff8c1a]">iOS & Android</span>
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                        High-precision capture pipelines, non-destructive editing, and instant asset management.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeCategory === "productivity" && (
                  <motion.div
                    key="prod"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col justify-between"
                  >
                    {/* Productivity Dashboard View */}
                    <div className="space-y-2.5">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-white">Sprint Release v2.4</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            94% Done
                          </span>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "94%" }}
                            transition={{ duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-[#ff6a00] to-[#ffaa00] rounded-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-black/40 px-3 py-2 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                              <Check className="h-2.5 w-2.5" />
                            </span>
                            <span className="text-zinc-200 text-[11px]">Offline Cache Storage</span>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-400">0.4ms</span>
                        </div>

                        <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-black/40 px-3 py-2 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                              <Check className="h-2.5 w-2.5" />
                            </span>
                            <span className="text-zinc-200 text-[11px]">Instant Cloud Sync</span>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-400">Active</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Productivity Tools</span>
                        <span className="text-[10px] font-semibold text-[#ffaa00]">Zero Distractions</span>
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                        Engineered for effortless daily task flow, clean interfaces, and frictionless execution.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeCategory === "utilities" && (
                  <motion.div
                    key="util"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col justify-between"
                  >
                    {/* Utilities System Telemetry */}
                    <div className="space-y-2.5">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-left">
                          <span className="text-[10px] uppercase tracking-wider text-zinc-400">Framerate</span>
                          <div className="mt-1 flex items-baseline gap-1">
                            <span className="text-xl font-black font-mono text-white">60.0</span>
                            <span className="text-[10px] text-emerald-400">FPS</span>
                          </div>
                          <span className="text-[9px] text-zinc-500">Zero drop cycles</span>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-left">
                          <span className="text-[10px] uppercase tracking-wider text-zinc-400">Memory</span>
                          <div className="mt-1 flex items-baseline gap-1">
                            <span className="text-xl font-black font-mono text-[#ffaa00]">18.4</span>
                            <span className="text-[10px] text-zinc-400">MB</span>
                          </div>
                          <span className="text-[9px] text-zinc-500">Ultra-light footprint</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/[0.08] bg-black/40 p-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-[#ff8c1a]" />
                          <span className="text-[11px] font-medium text-zinc-200">Native Core Graphics</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400">GPU Accelerated</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Practical Utility Apps</span>
                        <span className="text-[10px] font-semibold text-[#ff8c1a]">Reliable</span>
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                        Purpose-built mobile tools that solve specific routine problems with speed and precision.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Screen Bottom Dock / Status Footer */}
            <div className="rounded-2xl border border-white/[0.08] bg-black/60 px-3 py-2 backdrop-blur-md flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[#ff7a00]" />
                <span className="font-medium">{currentCat.badge}</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">Q9 Engine</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Quality Assurance Guarantee Pill */}
      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
          <Layers className="h-3.5 w-3.5 text-[#ff8c1a]" />
          <span>Native Swift & Kotlin</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
          <Sparkles className="h-3.5 w-3.5 text-[#ffaa00]" />
          <span>Iterative Refinement</span>
        </span>
      </div>
    </div>
  );
}
