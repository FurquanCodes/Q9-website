"use client";

import React from "react";
import Link from "next/link";
import { Handshake, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { collaborationPillars, collaborationContent } from "@/content/collaboration";

export function CollaborationSection() {
  return (
    <Section variant="surface">
      <Container>
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="q9-eyebrow mb-2">
              <span className="flex items-center gap-1.5">
                <Handshake className="h-3.5 w-3.5 text-[#ff8c1a]" />
                <span>{collaborationContent.eyebrow}</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {collaborationContent.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
              {collaborationContent.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 3-Column Collaboration Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collaborationPillars.map((pillar, idx) => (
            <Reveal key={pillar.id} delay={0.12 * (idx + 1)}>
              <SpotlightCard
                spotlightColor="rgba(255, 170, 0, 0.16)"
                className="h-full p-6 sm:p-8 flex flex-col justify-between border border-white/10 bg-[#0e1017]/90 rounded-3xl group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-[#ff8c1a] mb-5 shadow-inner">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ffaa00] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <div className="mt-1 text-xs font-medium text-[#ff8c1a]">
                    {pillar.subtitle}
                  </div>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* High Information Density Benefit Bullets */}
                  <div className="mt-5 space-y-2 border-t border-white/[0.08] pt-4">
                    {pillar.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffaa00] hover:text-white transition-colors"
                  >
                    <span>Discuss Partnership</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Bottom Collaboration Callout Banner */}
        <Reveal delay={0.3}>
          <div className="mt-10 sm:mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-orange-500/10 via-[#13151f] to-amber-500/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-xl">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c1a]">
                Simpler Tomorrow • Industry Co-Development
              </span>
              <h4 className="mt-1 text-lg sm:text-xl font-bold text-white">
                Have a mobile project or looking for technical collaboration?
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                Let&apos;s schedule an architectural consultation to explore how we can build together.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="md" className="shrink-0 group">
              <span>Partner with Q9</span>
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
