import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, Users, GraduationCap, ArrowRight, HeartHandshake } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cultureContent } from "@/content/culture";
import { valuesContent } from "@/content/values";
import { Reveal } from "@/components/ui/Reveal";
import { constructMetadata, generateBreadcrumbsJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Our Culture & Values",
  description:
    "Explore the values guiding Q9 Technologies: trust, ownership, growth through merit, respect, and continuous learning.",
  path: "/culture",
  keywords: [
    "Q9 Technologies culture",
    "software house values",
    "engineering ownership",
    "growth through merit",
    "tech workplace culture Pakistan",
  ],
});

export default function CulturePage() {
  const { hero, items } = cultureContent;
  const { section: valuesSection, values } = valuesContent;

  const breadcrumbJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Culture & Values", path: "/culture" },
  ]);

  const cultureVisuals = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#ff8c1a]" />,
      glow: "rgba(255, 122, 0, 0.18)",
      bg: "bg-orange-500/10 border-orange-500/30",
    },
    {
      icon: <Award className="h-6 w-6 text-[#ffaa00]" />,
      glow: "rgba(255, 170, 0, 0.18)",
      bg: "bg-amber-500/10 border-amber-500/30",
    },
    {
      icon: <Users className="h-6 w-6 text-zinc-200" />,
      glow: "rgba(255, 255, 255, 0.12)",
      bg: "bg-white/[0.06] border-white/20",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-emerald-400" />,
      glow: "rgba(52, 211, 153, 0.16)",
      bg: "bg-emerald-500/10 border-emerald-500/30",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* 2. Four Culture Pillars in a Bento 2x2 Grid */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {items.map((item, idx) => {
              const visual = cultureVisuals[idx] || cultureVisuals[0];

              return (
                <Reveal key={item.id} delay={0.08 * (idx + 1)}>
                  <SpotlightCard
                    spotlightColor={visual.glow}
                    className="p-8 sm:p-10 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-md ${visual.bg}`}>
                          {visual.icon}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-mono">
                          Pillar 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors group-hover:text-[#ff8c1a]">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Six Core Values in an Architectural Grid */}
      <Section variant="alt">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={valuesSection.eyebrow}
              title={valuesSection.title}
              subtitle={valuesSection.subtitle}
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((val, idx) => (
              <Reveal key={val.id} delay={0.06 * (idx + 1)}>
                <SpotlightCard
                  spotlightColor="rgba(255, 140, 26, 0.14)"
                  className="p-8 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black font-mono text-[#ea580c] dark:text-[#ff8c1a] bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
                        {val.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#ff8c1a] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                      {val.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          {/* Dedicated Culture Closing Statement */}
          <div className="mt-16 sm:mt-24 text-center">
            <Reveal>
              <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#13151f]/80 p-8 shadow-xl">
                <HeartHandshake className="h-8 w-8 text-[#ff8c1a] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Built on Ownership & Mutual Respect
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Building a workplace where people and partners develop their capabilities, contribute meaningfully, and grow through opportunity and merit.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#ea580c] dark:text-[#ff8c1a] hover:text-[#c2410c] dark:hover:text-white transition-colors"
                >
                  <span>Get in touch with our team</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
