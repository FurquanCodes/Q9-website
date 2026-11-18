import React from "react";
import { Container } from "@/components/layout/Container";
import { StatCounter } from "@/components/ui/StatCounter";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function FactsStrip() {
  const { facts } = homeContent;

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 mb-10 sm:mb-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-[#12141c]/95 via-[#181a24]/95 to-[#12141c]/95 p-2 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(255,106,0,0.08)] backdrop-blur-2xl">
            {/* Top subtle highlight shimmer */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff7a00]/60 to-transparent" />

            <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-white/[0.08]">
              {facts.map((fact) => (
                <div
                  key={fact.id}
                  className="group relative transition-colors duration-300 hover:bg-white/[0.03] rounded-2xl"
                >
                  <StatCounter
                    value={fact.value}
                    suffix={fact.suffix}
                    label={fact.label}
                    sublabel={fact.sublabel}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
