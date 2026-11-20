"use client";

import React from "react";
import { ArrowRight, Sparkles, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AppStudioShowcase } from "@/components/illustrations/AppStudioShowcase";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-36">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Eyebrow with pulsating luminous dot */}
            <Reveal delay={0.1}>
              <div className="q9-eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7a00] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7a00]" />
                </span>
                <span>{hero.eyebrow}</span>
              </div>
            </Reveal>

            {/* Kinetic Shimmer H1 Headline with Brand Orange Accent */}
            <Reveal delay={0.2}>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.12]">
                <span className="text-white">Great People </span>
                <span className="animate-shimmer">Building Useful </span>
                <span className="bg-gradient-to-r from-[#ff6a00] via-[#ffaa00] to-[#ffc04d] bg-clip-text text-transparent">
                  Apps
                </span>
              </h1>
            </Reveal>

            {/* Intro paragraph with rich readability */}
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-300">
                {hero.introParagraph}
              </p>
            </Reveal>

            {/* High-impact CTA Buttons in Brand Orange */}
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button href="/contact" variant="primary" size="lg" className="group">
                  <span>{hero.primaryCta}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
                <Button href="/products" variant="secondary" size="lg">
                  <Sparkles className="mr-2 h-4 w-4 text-[#ff8c1a]" />
                  <span>{hero.secondaryCta}</span>
                </Button>
              </div>
            </Reveal>

            {/* Bottom Proof Chips */}
            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <Smartphone className="h-3.5 w-3.5 text-[#ff8c1a]" />
                  <span>iOS & Android Native</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffaa00]" />
                  <span>Practical Categories</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <span className="text-[#ff8c1a] font-bold">Simpler Tomorrow</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Bespoke Mobile Studio Engineering Showcase */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
            <Reveal delay={0.3}>
              <AppStudioShowcase />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
