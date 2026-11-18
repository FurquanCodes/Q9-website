"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  CheckSquare,
  Wrench,
  Smartphone,
  Sparkles,
  Layers,
  Compass,
  Heart,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface OrbitItem {
  id: string;
  label: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  borderGlow: string;
}

export function OrbitHeroStage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeItem, setActiveItem] = useState<OrbitItem | null>(null);

  const items: OrbitItem[] = [
    {
      id: "photo",
      label: "Photography",
      category: "Mobile Apps",
      icon: <Camera className="h-4.5 w-4.5 text-[#ff8c1a]" />,
      color: "from-orange-500/20 to-amber-500/10 border-orange-500/40",
      borderGlow: "rgba(255, 122, 0, 0.5)",
    },
    {
      id: "prod",
      label: "Productivity",
      category: "Routine Tasks",
      icon: <CheckSquare className="h-4.5 w-4.5 text-zinc-300" />,
      color: "from-white/10 to-white/5 border-white/20",
      borderGlow: "rgba(255, 255, 255, 0.4)",
    },
    {
      id: "util",
      label: "Utilities",
      category: "Everyday Solutions",
      icon: <Wrench className="h-4.5 w-4.5 text-[#ffaa00]" />,
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/40",
      borderGlow: "rgba(255, 170, 0, 0.5)",
    },
    {
      id: "ios",
      label: "iOS Platform",
      category: "Native Swift",
      icon: <Smartphone className="h-4.5 w-4.5 text-zinc-200" />,
      color: "from-zinc-500/20 to-zinc-600/10 border-zinc-400/30",
      borderGlow: "rgba(228, 228, 231, 0.4)",
    },
    {
      id: "android",
      label: "Android Apps",
      category: "Modern Kotlin",
      icon: <Layers className="h-4.5 w-4.5 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
      borderGlow: "rgba(52, 211, 153, 0.4)",
    },
    {
      id: "practical",
      label: "Practical Apps",
      category: "Real User Needs",
      icon: <Sparkles className="h-4.5 w-4.5 text-[#ff7a00]" />,
      color: "from-orange-600/20 to-amber-600/10 border-orange-500/40",
      borderGlow: "rgba(255, 106, 0, 0.5)",
    },
    {
      id: "approach",
      label: "Iterative Cycle",
      category: "Continuous Learning",
      icon: <Compass className="h-4.5 w-4.5 text-zinc-300" />,
      color: "from-zinc-500/20 to-zinc-700/10 border-zinc-500/30",
      borderGlow: "rgba(212, 212, 216, 0.4)",
    },
    {
      id: "user-first",
      label: "User First",
      category: "Core Value",
      icon: <Heart className="h-4.5 w-4.5 text-[#ff8c1a]" />,
      color: "from-orange-500/20 to-rose-500/10 border-orange-500/40",
      borderGlow: "rgba(255, 122, 0, 0.5)",
    },
  ];

  const radius = 175; // Orbit radius in pixels

  return (
    <div className="relative mx-auto flex h-[500px] w-full max-w-[540px] items-center justify-center select-none perspective-1000">
      {/* 1. Subtle, Decent Ambient Warm Radial Glow */}
      <div
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.14)_0%,rgba(255,170,0,0.06)_40%,transparent_70%)] blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
        aria-hidden="true"
      />

      {/* 2. Concentric Orbit Rings (3D Tilted Perspective) */}
      <div
        className="absolute h-[370px] w-[370px] rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-white/[0.02] to-transparent shadow-[0_0_30px_rgba(0,0,0,0.4)]"
        aria-hidden="true"
      />
      <div
        className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-[rgba(255,140,26,0.18)]"
        aria-hidden="true"
      />
      <div
        className="absolute h-[160px] w-[160px] rounded-full border border-[rgba(255,255,255,0.12)]"
        aria-hidden="true"
      />

      {/* 3. Central 3D Holographic Core with Official Q9 Monogram */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  boxShadow: [
                    "0 0 20px rgba(255, 106, 0, 0.25)",
                    "0 0 40px rgba(255, 140, 26, 0.45)",
                    "0 0 20px rgba(255, 106, 0, 0.25)",
                  ],
                }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-[#ff5500] via-[#ff8c1a] to-[#ffaa00] p-[1.5px] shadow-2xl"
        >
          {/* Inner frosted core */}
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[22px] bg-[#090a0f]/95 backdrop-blur-md px-2 text-center overflow-hidden relative border border-white/5">
            <div className="relative h-12 w-16 mb-1">
              <Image
                src="/images/q9-monogram-transparent.png"
                alt="Q9 Emblem"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#ff8c1a]">
              Apps Hub
            </span>
          </div>

          {/* Core Ambient Ping Ring */}
          <span className="absolute -inset-1 rounded-3xl border border-[#ffaa00]/30 animate-ping opacity-20" />
        </motion.div>

        {/* Dynamic Hover Tooltip / Status Display */}
        <div className="absolute top-[125px] w-64 text-center pointer-events-none transition-all duration-300">
          {activeItem ? (
            <div className="rounded-xl border border-[rgba(255,140,26,0.4)] bg-[#13151f]/95 px-3 py-1.5 shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
              <p className="text-xs font-bold text-white">{activeItem.label}</p>
              <p className="text-[10px] text-[#ff8c1a] font-medium">{activeItem.category}</p>
            </div>
          ) : (
            <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              Mobile App Ecosystem
            </div>
          )}
        </div>
      </div>

      {/* 4. Continuously Rotating Orbiting Slots with Counter-Rotation */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center preserve-3d"
      >
        {items.map((item, index) => {
          const angle = (index / items.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = Math.round(radius * Math.cos(rad));
          const y = Math.round(radius * Math.sin(rad));

          return (
            <div
              key={item.id}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="absolute z-30"
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => setActiveItem(activeItem?.id === item.id ? null : item)}
            >
              {/* Counter-rotation wrapper: keeps icons and text strictly upright */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="group relative cursor-pointer"
              >
                {/* Floating Orbit Glass Badge */}
                <div
                  className="flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[#13151f]/90 px-3 py-1.5 text-xs font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:border-[#ff8c1a] group-hover:bg-[#181b28] group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]"
                  style={{
                    borderColor:
                      activeItem?.id === item.id ? item.borderGlow : undefined,
                  }}
                >
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${item.color} border shadow-sm`}
                  >
                    {item.icon}
                  </div>
                  <span className="hidden sm:inline-block pr-1 font-semibold text-zinc-100 tracking-tight">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
