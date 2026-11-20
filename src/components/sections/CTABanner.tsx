import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface CTABannerProps {
  headline?: string;
  paragraph?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  headline = "Simpler Tomorrow",
  paragraph = "At Q9 Technologies, we see every product as an opportunity to understand users better, solve a meaningful problem, and create something useful.",
  buttonText = "Get in touch",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-[#181a24]/95 dark:via-[#13151f]/95 dark:to-[#0c0d13]/98 px-8 py-16 sm:px-16 sm:py-24 text-center shadow-xl dark:shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_50px_rgba(255,106,0,0.1)] backdrop-blur-2xl">
            {/* Top illuminated laser line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff7a00] to-transparent shadow-[0_0_20px_rgba(255,122,0,0.8)]" />

            {/* Ambient inner radial glow */}
            <div
              className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.2)_0%,rgba(255,170,0,0.08)_40%,transparent_70%)] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="q9-eyebrow mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Q9 Technologies</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                <span className="animate-shimmer">{headline}</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
                {paragraph}
              </p>

              <div className="mt-10 flex justify-center">
                <Button href={buttonHref} variant="primary" size="lg" className="group">
                  <span>{buttonText}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
