import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Wrench, MessageSquare, RefreshCw } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { approachContent } from "@/content/approach";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function ApproachGrid() {
  const { steps } = approachContent;
  const { approachPreview } = homeContent;

  const stepMeta = [
    {
      icon: <Compass className="h-6 w-6 text-[#ff6a00]" />,
      glow: "rgba(255, 106, 0, 0.2)",
      iconBg: "bg-orange-500/15 border-orange-400/30",
      accent: "text-[#ff6a00]",
    },
    {
      icon: <Wrench className="h-6 w-6 text-[#ffaa00]" />,
      glow: "rgba(255, 170, 0, 0.2)",
      iconBg: "bg-amber-500/15 border-amber-400/30",
      accent: "text-[#ffaa00]",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-emerald-400" />,
      glow: "rgba(16, 185, 129, 0.2)",
      iconBg: "bg-emerald-500/15 border-emerald-400/30",
      accent: "text-emerald-400",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-zinc-200" />,
      glow: "rgba(255, 255, 255, 0.15)",
      iconBg: "bg-white/10 border-white/20",
      accent: "text-zinc-200",
    },
  ];

  return (
    <Section id="our-approach-preview" variant="default">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={approachPreview.eyebrow}
            title={approachPreview.title}
            subtitle={approachPreview.subtitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const meta = stepMeta[idx] || stepMeta[0];

            return (
              <Reveal key={step.step} delay={0.08 * (idx + 1)}>
                <SpotlightCard
                  spotlightColor={meta.glow}
                  className="flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Top Row: Icon Container + Step Number */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div
                        className={`flex h-13 w-13 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 shadow-lg ${meta.iconBg}`}
                      >
                        {meta.icon}
                      </div>
                      <span
                        className={`text-sm font-black font-mono px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] ${meta.accent}`}
                      >
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-[#ff8c1a]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Reveal delay={0.4}>
            <Link
              href={approachPreview.ctaHref}
              className="inline-flex items-center gap-2 font-bold text-sm sm:text-base text-[#ea580c] dark:text-[#ffaa00] hover:text-[#c2410c] dark:hover:text-white transition-colors group"
            >
              <span>{approachPreview.ctaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
