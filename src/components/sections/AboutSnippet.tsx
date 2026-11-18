"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Smartphone, TrendingUp, Layers } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSnippet() {
  const { aboutSnippet } = homeContent;
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Real Problems First",
      desc: "Every application begins with a problem worth solving and understanding how users experience it.",
      icon: <CheckCircle2 className="h-4 w-4" />,
      iconColor: "text-[#ff8c1a] bg-orange-500/15",
      borderGlow: "border-[#ff7a00]/60 bg-white/[0.08] shadow-[0_0_20px_rgba(255,106,0,0.15)]",
    },
    {
      title: "Accessible & Intuitive",
      desc: "Developing straightforward, reliable solutions that fit naturally into daily routines.",
      icon: <Smartphone className="h-4 w-4" />,
      iconColor: "text-[#ffaa00] bg-amber-500/15",
      borderGlow: "border-amber-500/60 bg-white/[0.08] shadow-[0_0_20px_rgba(255,170,0,0.15)]",
    },
    {
      title: "Continuous Evolution",
      desc: "Testing, learning, and refinement to make better decisions with every single release.",
      icon: <TrendingUp className="h-4 w-4" />,
      iconColor: "text-emerald-400 bg-emerald-500/15",
      borderGlow: "border-emerald-500/60 bg-white/[0.08] shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    },
  ];

  return (
    <Section id="about-snippet" variant="alt">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Layered 3D App Lifecycle Glass Card Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal delay={0.2}>
              <div className="relative mx-auto max-w-lg rounded-[32px] border border-white/10 bg-gradient-to-br from-[#161822]/95 via-[#11131b]/95 to-[#0b0c12]/98 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(255,106,0,0.06)] backdrop-blur-2xl">
                {/* Ambient corner glow */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.15)_0%,transparent_70%)] blur-2xl"
                  aria-hidden="true"
                />

                {/* Card Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6a00] to-[#ffaa00] text-white shadow-lg shadow-orange-500/20">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">Our Purpose</h4>
                      <p className="text-xs text-[#ffaa00] font-medium">User-Centered App Lifecycle</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Process
                  </span>
                </div>

                {/* Layered Interactive Cards Inside */}
                <div className="mt-6 space-y-3.5">
                  {phases.map((phase, idx) => {
                    const isActive = activePhase === idx;

                    return (
                      <div
                        key={phase.title}
                        onClick={() => setActivePhase(idx)}
                        onMouseEnter={() => setActivePhase(idx)}
                        className={`group rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                          isActive
                            ? phase.borderGlow
                            : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ${
                              isActive ? "scale-110" : ""
                            } ${phase.iconColor} mt-0.5`}
                          >
                            {phase.icon}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-white tracking-tight">
                              {phase.title}
                            </span>
                            <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                              {phase.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Footer Info */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-[#ffaa00]" />
                    <span>Android & iOS Ecosystem</span>
                  </div>
                  <span className="font-bold text-[#ff8c1a]">Simpler Tomorrow</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Copy & Link */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal delay={0.1}>
              <div className="q9-eyebrow mb-4">
                <span>{aboutSnippet.eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {aboutSnippet.title}
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
                {aboutSnippet.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Button href={aboutSnippet.ctaHref} variant="secondary" size="md" className="group">
                  <span>{aboutSnippet.ctaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
