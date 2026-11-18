import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.8a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

export function ContactPreview() {
  const { contactPreview } = homeContent;

  return (
    <Section id="contact-preview" variant="alt">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={contactPreview.eyebrow}
            title={contactPreview.title}
            subtitle={contactPreview.subtitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <Reveal delay={0.08}>
            <a
              href={`mailto:${site.email}`}
              className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] rounded-[24px]"
            >
              <SpotlightCard
                spotlightColor="rgba(255, 106, 0, 0.22)"
                className="flex flex-col h-full group"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-orange-500/15 border border-orange-400/30 text-[#ff6a00] mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c1a]">
                  Email
                </span>
                <span className="mt-2 text-sm font-semibold text-white break-all transition-colors group-hover:text-[#ff8c1a]">
                  {site.email}
                </span>
                <span className="mt-1 text-xs text-zinc-500">
                  Send us an email
                </span>
              </SpotlightCard>
            </a>
          </Reveal>

          {/* Phone */}
          <Reveal delay={0.16}>
            <a
              href={`tel:${site.phoneTel}`}
              className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffaa00] rounded-[24px]"
            >
              <SpotlightCard
                spotlightColor="rgba(255, 170, 0, 0.22)"
                className="flex flex-col h-full group"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-400/30 text-[#ffaa00] mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ffaa00]">
                  Phone
                </span>
                <span className="mt-2 text-sm font-semibold text-white transition-colors group-hover:text-[#ffaa00]">
                  {site.phoneDisplay}
                </span>
                <span className="mt-1 text-xs text-zinc-500">
                  Direct mobile & voice
                </span>
              </SpotlightCard>
            </a>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.24}>
            <a
              href={site.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-[24px]"
            >
              <SpotlightCard
                spotlightColor="rgba(16, 185, 129, 0.22)"
                className="flex flex-col h-full group"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Office
                </span>
                <span className="mt-2 text-sm font-semibold text-white leading-snug transition-colors group-hover:text-emerald-400">
                  {site.address.line1}, {site.address.city}
                </span>
                <span className="mt-1 text-xs text-zinc-500">
                  View on Google Maps
                </span>
              </SpotlightCard>
            </a>
          </Reveal>

          {/* LinkedIn */}
          <Reveal delay={0.32}>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-[24px]"
            >
              <SpotlightCard
                spotlightColor="rgba(255, 255, 255, 0.15)"
                className="flex flex-col h-full group"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-zinc-200 mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <LinkedinIcon className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  LinkedIn
                </span>
                <span className="mt-2 text-sm font-semibold text-white transition-colors group-hover:text-white">
                  Q9 Technologies
                </span>
                <span className="mt-1 text-xs text-zinc-500">
                  Official company page
                </span>
              </SpotlightCard>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 text-center">
          <Reveal delay={0.4}>
            <Button href={contactPreview.ctaHref} variant="primary" size="lg" className="group">
              <span>{contactPreview.ctaText}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
