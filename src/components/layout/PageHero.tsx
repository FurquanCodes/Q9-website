import React from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-48 lg:pb-24 border-b border-[var(--border)]",
        className
      )}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ff7a00]/30 bg-[#ff7a00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ffaa00] shadow-[0_0_15px_rgba(255,106,0,0.15)]">
            {eyebrow}
          </div>
        )}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-400">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
