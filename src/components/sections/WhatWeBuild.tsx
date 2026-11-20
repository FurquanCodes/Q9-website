import React from "react";
import Link from "next/link";
import { Camera, CheckSquare, Wrench, LayoutGrid, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { homeContent } from "@/content/home";
import { features } from "@/config/features";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeBuild() {
  const { whatWeBuild } = homeContent;

  const cardVisuals = {
    photography: {
      icon: <Camera className="h-6 w-6 text-[#ff8c1a]" />,
      badge: "Visual & Media",
      glow: "rgba(255, 122, 0, 0.2)",
      iconBg: "bg-orange-500/10 border-orange-500/30",
      tags: ["iOS & Android", "Image Processing"],
    },
    productivity: {
      icon: <CheckSquare className="h-6 w-6 text-zinc-200" />,
      badge: "Routine Tasks",
      glow: "rgba(255, 255, 255, 0.15)",
      iconBg: "bg-white/[0.06] border-white/20",
      tags: ["Task Automation", "Daily Focus"],
    },
    utilities: {
      icon: <Wrench className="h-6 w-6 text-[#ffaa00]" />,
      badge: "Daily Solutions",
      glow: "rgba(255, 170, 0, 0.2)",
      iconBg: "bg-amber-500/10 border-amber-500/30",
      tags: ["Device Tools", "Native Performance"],
    },
    "more-apps": {
      icon: <LayoutGrid className="h-6 w-6 text-emerald-400" />,
      badge: "Practical Needs",
      glow: "rgba(16, 185, 129, 0.2)",
      iconBg: "bg-emerald-500/10 border-emerald-500/30",
      tags: ["Focused Utility", "Clean UX"],
    },
  };

  return (
    <Section id="what-we-build" variant="default">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={whatWeBuild.eyebrow}
            title={whatWeBuild.title}
            subtitle={whatWeBuild.subtitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeBuild.cards.map((card, idx) => {
            const visual =
              cardVisuals[card.id as keyof typeof cardVisuals] ||
              cardVisuals.photography;

            return (
              <Reveal key={card.id} delay={0.08 * (idx + 1)}>
                <SpotlightCard
                  spotlightColor={visual.glow}
                  className="flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Top Row: Icon Container + Category Tag */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 shadow-md ${visual.iconBg}`}
                      >
                        {visual.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-400 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1">
                        {visual.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-[#ff8c1a]">
                      {card.category}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                      {card.description}
                    </p>

                    {/* Technical Capability Micro-Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {visual.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 rounded-lg px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {features.apps && (
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] dark:text-[#ff8c1a] hover:text-[#c2410c] dark:hover:text-white transition-colors"
                      >
                        <span>Explore apps</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
