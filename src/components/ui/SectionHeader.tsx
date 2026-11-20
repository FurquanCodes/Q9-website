import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        isCenter ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 inline-block rounded-full border border-[#ff7a00]/30 bg-[#ff7a00]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#ffaa00] shadow-[0_0_15px_rgba(255,106,0,0.12)]",
            isCenter && "mx-auto"
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
