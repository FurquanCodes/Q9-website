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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return;
    }

    let start = 0;
    const duration = 1200; // 1.2s
    const steps = 30;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
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
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-mono">
        <span className="bg-gradient-to-r from-white via-zinc-100 to-[#ffaa00] bg-clip-text text-transparent">
          {displayValue}
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-base font-bold text-white tracking-wide">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-sm text-zinc-400 font-medium">
          {sublabel}
        </div>
      )}
    </div>
  );
}
