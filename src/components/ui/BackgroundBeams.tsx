"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function BackgroundBeams() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="q9-bg-beams-container pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500">
      {/* 1. Subtle Perspective Grid */}
      <div className="absolute inset-0 q9-bg-grid opacity-60" />

      {/* 2. Top Hero Ambient Light Orb (Slow, graceful drift) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [-20, 20, -20],
                y: [-15, 15, -15],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-36 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.18)_0%,rgba(255,170,0,0.08)_35%,transparent_70%)] blur-3xl"
      />

      {/* 3. Right Ambient Warm Amber Orb */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [20, -20, 20],
                y: [15, -15, 15],
              }
        }
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-48 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.1)_0%,rgba(255,170,0,0.05)_40%,transparent_70%)] blur-3xl"
      />

      {/* 4. Left Ambient Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [-15, 15, -15],
                y: [20, -20, 20],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 -left-48 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.12)_0%,transparent_70%)] blur-3xl"
      />
    </div>
  );
}
