"use client";

import React from "react";
import { Smartphone, Layers, Code, Database, Cpu, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { technologiesData, technologiesContent } from "@/content/technologies";

export function TechnologiesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="h-6 w-6 text-[#ff8c1a]" />;
      case "Layers":
        return <Layers className="h-6 w-6 text-[#ffaa00]" />;
      case "Code":
        return <Code className="h-6 w-6 text-[#38bdf8]" />;
      case "Database":
        return <Database className="h-6 w-6 text-[#10b981]" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-[#ff8c1a]" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-[#ffaa00]" />;
    }
  };

  return (
    <Section variant="alt">
      <Container>
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="q9-eyebrow mb-2">
              <span>{technologiesContent.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {technologiesContent.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              {technologiesContent.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 2x2 Grid of Tech Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {technologiesData.map((group, idx) => (
            <Reveal key={group.id} delay={0.1 * (idx + 1)}>
              <SpotlightCard
                spotlightColor="rgba(255, 122, 0, 0.14)"
                className="h-full p-6 sm:p-8 flex flex-col justify-between border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0e1017]/90 rounded-3xl group shadow-sm dark:shadow-none"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 group-hover:border-[#ff7a00]/40 transition-colors shadow-inner">
                      {getIcon(group.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#ffaa00] transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* High-density Technology Badges */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {group.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.03] p-2.5 transition-all duration-200 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                      >
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {tech.name}
                        </div>
                        <div className="flex items-center justify-between mt-1 text-[10px]">
                          <span className="text-slate-500 dark:text-zinc-400 truncate">{tech.level}</span>
                          <span className="font-mono text-[#ea580c] dark:text-[#ff8c1a] bg-orange-500/10 px-1 py-0.2 rounded text-[9px] shrink-0">
                            {tech.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Note */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                    <span>Production Verified</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400 dark:text-zinc-500">Native Standards</span>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
