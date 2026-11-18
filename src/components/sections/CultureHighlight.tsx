import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cultureContent } from "@/content/culture";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function CultureHighlight() {
  const { items } = cultureContent;
  const { cultureHighlight } = homeContent;

  const highlightItems = items.slice(0, 3);
  const visualMeta = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#ff6a00]" />,
      glow: "rgba(255, 106, 0, 0.22)",
      iconBg: "bg-orange-500/15 border-orange-400/30",
    },
    {
      icon: <Award className="h-6 w-6 text-[#ffaa00]" />,
      glow: "rgba(255, 170, 0, 0.22)",
      iconBg: "bg-amber-500/15 border-amber-400/30",
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      glow: "rgba(16, 185, 129, 0.22)",
      iconBg: "bg-emerald-500/15 border-emerald-400/30",
    },
  ];

  return (
    <Section id="culture-highlight" variant="alt">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={cultureHighlight.eyebrow}
            title={cultureHighlight.title}
            subtitle={cultureHighlight.subtitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightItems.map((item, idx) => {
            const visual = visualMeta[idx] || visualMeta[0];

            return (
              <Reveal key={item.id} delay={0.08 * (idx + 1)}>
                <SpotlightCard
                  spotlightColor={visual.glow}
                  className="flex flex-col justify-between h-full group"
                >
                  <div>
                    <div
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl border mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg ${visual.iconBg}`}
                    >
                      {visual.icon}
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#ff8c1a]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {item.description}
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
              href={cultureHighlight.ctaHref}
              className="inline-flex items-center gap-2 font-bold text-sm sm:text-base text-[#ffaa00] hover:text-white transition-colors group"
            >
              <span>{cultureHighlight.ctaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
