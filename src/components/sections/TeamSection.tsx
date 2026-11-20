"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { teamMembers, teamContent } from "@/content/team";

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

function TeamAvatar({
  name,
  initials,
  avatarUrl,
}: {
  name: string;
  initials: string;
  avatarUrl?: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative mx-auto mb-5 h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-[26px] border-2 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-gradient-to-br dark:from-[#181a26] dark:via-[#10121a] dark:to-[#090a0f] p-1.5 shadow-xl dark:shadow-2xl transition-all duration-300 group-hover:border-[#ff7a00]/50 group-hover:shadow-[0_0_25px_rgba(255,106,0,0.25)]">
      {avatarUrl && !imageError ? (
        <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-slate-200 dark:bg-[#12141c]">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            sizes="128px"
            className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
            priority
          />
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-[20px] bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent border border-white/5">
          <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#ffaa00] bg-clip-text text-transparent">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}

export function TeamSection() {
  return (
    <Section variant="surface">
      <Container>
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-12">
            <div className="q9-eyebrow mb-2">
              <span>{teamContent.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {teamContent.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              {teamContent.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 4-Column Responsive Executive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Reveal key={member.id} delay={0.1 * (index + 1)}>
              <SpotlightCard
                spotlightColor="rgba(255, 122, 0, 0.16)"
                className="h-full flex flex-col justify-between p-6 text-center group border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0e1017]/90 hover:border-[#ff7a00]/40 transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <div>
                  {/* Avatar / Initials Container */}
                  <TeamAvatar
                    name={member.name}
                    initials={member.initials}
                    avatarUrl={member.avatarUrl}
                  />

                  {/* Name & Role */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#ffaa00] transition-colors">
                    {member.name}
                  </h3>
                  <div className="mt-1 inline-flex items-center rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 px-3 py-0.5 text-xs font-semibold text-[#ea580c] dark:text-[#ff8c1a]">
                    {member.role}
                  </div>
                  <div className="mt-1 text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    {member.department}
                  </div>

                  {/* Bio */}
                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed text-left">
                    {member.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] px-2 py-0.5 text-[10px] text-slate-700 dark:text-zinc-400"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified LinkedIn Action */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:border-[#ff7a00]/50 hover:bg-[#ff7a00]/10 transition-all duration-200 shadow-sm dark:shadow-none"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <LinkedinIcon className="h-4 w-4 text-[#ff8c1a]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
