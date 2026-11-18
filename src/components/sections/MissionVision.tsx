import React from "react";
import { Target, Eye } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { aboutContent } from "@/content/about";
import { Reveal } from "@/components/ui/Reveal";

export function MissionVision() {
  const { mission, vision } = aboutContent;

  return (
    <Section id="mission-vision" variant="default">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <Reveal delay={0.1}>
            <SpotlightCard
              spotlightColor="rgba(255, 106, 0, 0.25)"
              className="flex flex-col justify-between h-full p-8 sm:p-10 group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-orange-500/15 border border-orange-400/30 text-[#ff6a00] transition-transform duration-300 group-hover:scale-110 shadow-lg">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff8c1a] rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1">
                    {mission.eyebrow}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 transition-colors group-hover:text-[#ff8c1a]">
                  {mission.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
                  {mission.statement}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Vision Card */}
          <Reveal delay={0.2}>
            <SpotlightCard
              spotlightColor="rgba(255, 170, 0, 0.25)"
              className="flex flex-col justify-between h-full p-8 sm:p-10 group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-400/30 text-[#ffaa00] transition-transform duration-300 group-hover:scale-110 shadow-lg">
                    <Eye className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ffaa00] rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1">
                    {vision.eyebrow}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 transition-colors group-hover:text-[#ffaa00]">
                  {vision.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
                  {vision.statement}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
