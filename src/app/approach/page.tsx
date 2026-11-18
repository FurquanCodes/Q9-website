import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Wrench, MessageSquare, RefreshCw, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { approachContent } from "@/content/approach";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Q9 Technologies builds apps: understand the need, build with purpose, learn through feedback, improve continuously.",
};

export default function ApproachPage() {
  const { hero, steps, callout } = approachContent;

  const stepMeta = [
    {
      icon: <Compass className="h-7 w-7 text-[#ff8c1a]" aria-hidden="true" />,
      glow: "rgba(255, 122, 0, 0.2)",
      bg: "bg-orange-500/10 border-orange-500/30",
      deliverable: "Problem Definition & User Need Discovery",
    },
    {
      icon: <Wrench className="h-7 w-7 text-zinc-200" aria-hidden="true" />,
      glow: "rgba(255, 255, 255, 0.14)",
      bg: "bg-white/[0.06] border-white/20",
      deliverable: "Purposeful Architecture & Ergonomic UI",
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-[#ffaa00]" aria-hidden="true" />,
      glow: "rgba(255, 170, 0, 0.2)",
      bg: "bg-amber-500/10 border-amber-500/30",
      deliverable: "Product Telemetry & User Insights",
    },
    {
      icon: <RefreshCw className="h-7 w-7 text-emerald-400" aria-hidden="true" />,
      glow: "rgba(52, 211, 153, 0.18)",
      bg: "bg-emerald-500/10 border-emerald-500/30",
      deliverable: "Testing, Refinement & Continuous Updates",
    },
  ];

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* 2. Connected 4-Step Progressive Timeline Pipeline */}
      <Section variant="default">
        <Container>
          <div className="relative">
            {/* Center connecting line on large screens */}
            <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-orange-500/40 via-white/20 to-emerald-500/40" />

            <div className="space-y-12 sm:space-y-16">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 1;
                const meta = stepMeta[idx] || stepMeta[0];

                return (
                  <Reveal key={step.step} delay={0.08 * (idx + 1)}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Left Column / Step Content */}
                      <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        <SpotlightCard spotlightColor={meta.glow} className="p-8 sm:p-10 relative">
                          <div className="flex items-center justify-between gap-4 mb-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#ff8c1a] rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1">
                              Phase {step.step}
                            </span>
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-md ${meta.bg}`}>
                              {meta.icon}
                            </div>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                            {step.title}
                          </h3>
                          <p className="text-base sm:text-lg leading-relaxed text-[#9ca3af] mb-6">
                            {step.description}
                          </p>

                          {/* Phase Goal / Deliverable */}
                          <div className="pt-4 border-t border-white/10 flex items-center gap-2.5 text-xs font-semibold text-zinc-300">
                            <CheckCircle2 className="h-4 w-4 text-[#ff8c1a] shrink-0" />
                            <span>{meta.deliverable}</span>
                          </div>
                        </SpotlightCard>
                      </div>

                      {/* Right Column / Step Counter Indicator */}
                      <div className={`lg:col-span-6 flex ${isEven ? "lg:order-1 lg:justify-end" : "lg:order-2 lg:justify-start"}`}>
                        <div className="hidden lg:flex items-center justify-center h-20 w-20 rounded-full border border-white/15 bg-[#13151f] shadow-2xl text-2xl font-black font-mono text-zinc-400">
                          {step.step}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Highlighted Ongoing Development Philosophy Callout */}
          <div className="mt-20 sm:mt-28">
            <Reveal>
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-[rgba(255,140,26,0.35)] bg-gradient-to-r from-[#181b28]/95 via-[#13151f]/95 to-[#0e1017]/95 p-8 sm:p-14 shadow-2xl backdrop-blur-2xl">
                <Quote className="h-10 w-10 text-[#ff8c1a] opacity-50 mb-5" />
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed text-white">
                  &ldquo;{callout.statement}&rdquo;
                </p>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#ff7a00] animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ff8c1a]">
                      Q9 Lifecycle Assurance
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#ff8c1a] transition-colors"
                  >
                    <span>Discuss your app idea</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
