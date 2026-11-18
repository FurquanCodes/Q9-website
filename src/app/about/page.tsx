import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Sparkles, Smartphone, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { aboutContent } from "@/content/about";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Q9 Technologies, our mission, our vision, and how we build apps that serve real needs.",
};

export default function AboutPage() {
  const { hero, introParagraphs, ongoingProcessCallout, mission, vision, lookingAhead } =
    aboutContent;

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* 2. Bespoke Story & Purpose Narrative Grid */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-zinc-400">
              <Reveal delay={0.1}>
                <div className="q9-eyebrow mb-3">
                  <span>Our Foundation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Building Products That Serve Real Needs
                </h2>
              </Reveal>

              {introParagraphs.map((paragraph, idx) => (
                <Reveal key={idx} delay={0.12 * (idx + 1)}>
                  <p className="text-zinc-300 font-normal">{paragraph}</p>
                </Reveal>
              ))}

              {/* Ongoing Process Callout Card */}
              <Reveal delay={0.4}>
                <div className="mt-8 rounded-2xl border border-[rgba(255,140,26,0.35)] bg-gradient-to-r from-[#181b28]/95 to-[#13151f]/95 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
                  <div className="h-1 w-10 rounded-full bg-[#ff7a00] mb-4" />
                  <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                    &ldquo;{ongoingProcessCallout}&rdquo;
                  </p>
                  <span className="mt-3 inline-block text-xs font-bold uppercase tracking-widest text-[#ff8c1a]">
                    Q9 Development Philosophy
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right Architecture Highlights Column */}
            <div className="lg:col-span-5 space-y-4">
              <Reveal delay={0.2}>
                <SpotlightCard spotlightColor="rgba(255, 122, 0, 0.16)" className="p-6">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#ff8c1a]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Problem Solving First</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Every app begins with a problem worth solving. We identify opportunities to make the user experience simpler and more natural.
                  </p>
                </SpotlightCard>
              </Reveal>

              <Reveal delay={0.3}>
                <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.12)" className="p-6">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/20 text-zinc-200">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Full App Lifecycle</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    From finding product opportunities to design, launch, and evaluating performance, we stay involved at every step.
                  </p>
                </SpotlightCard>
              </Reveal>

              <Reveal delay={0.4}>
                <SpotlightCard spotlightColor="rgba(52, 211, 153, 0.14)" className="p-6">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Guided by Feedback</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    We rely on real feedback, usability testing, and performance insights to continuously evolve our products.
                  </p>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Bespoke Mission & Vision Comparison */}
      <Section variant="alt">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="q9-eyebrow mb-3">
              <span>Core Direction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <SpotlightCard spotlightColor="rgba(255, 122, 0, 0.18)" className="h-full p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30 text-[#ff8c1a]">
                      <Target className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ff8c1a] rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1">
                      {mission.eyebrow}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
                    {mission.statement}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.2}>
              <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.14)" className="h-full p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/20 text-zinc-200">
                      <Eye className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 rounded-full border border-white/20 bg-white/[0.05] px-3 py-1">
                      {vision.eyebrow}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
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

      {/* 4. Looking Ahead: Executive Statement */}
      <Section variant="default">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#181b28]/80 to-[#13151f]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
              <div className="q9-eyebrow mb-4">
                <span>{lookingAhead.eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {lookingAhead.title}
              </h2>
              <div className="mt-6 space-y-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
                {lookingAhead.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-lg font-black text-[#ff8c1a] tracking-tight">
                  {lookingAhead.signoff}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#ff8c1a] transition-colors"
                >
                  <span>Connect with us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
