"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  label,
  sublabel,
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  // Strictly trigger only when the user has scrolled this component well into view (50% visibility)
  const isInView = useInView(ref, { once: true, amount: 0.5, margin: "0px 0px -100px 0px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return;
    }

    const duration = 1800; // 1.8 seconds - smooth, noticeable count-up
    const startTime = performance.now();

    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic curve: starts distinctly and settles gracefully
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOutProgress * value);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, shouldReduceMotion]);

  const displayValue = shouldReduceMotion ? value : count;

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center p-6 text-center",
        className
      )}
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
        <span className="q9-stat-value bg-gradient-to-r from-slate-900 via-slate-800 to-[#ea580c] dark:from-white dark:via-zinc-100 dark:to-[#ffaa00] bg-clip-text text-transparent">
          {displayValue}
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-base font-bold text-slate-900 dark:text-white tracking-wide">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-sm text-slate-600 dark:text-zinc-400 font-medium">
          {sublabel}
        </div>
      )}
    </div>
  );
}
