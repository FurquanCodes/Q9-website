"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { site } from "@/config/site";
import { features } from "@/config/features";

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

export function ContactInfo() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Email Card */}
      <a
        href={`mailto:${site.email}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] rounded-[22px]"
      >
        <SpotlightCard
          spotlightColor="rgba(255, 122, 0, 0.16)"
          className="flex items-center justify-between p-5 group"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30 text-[#ff8c1a] transition-transform duration-300 group-hover:scale-105 shadow-md">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] dark:text-[#ff8c1a]">
                Email
              </span>
              <p className="mt-1 text-sm sm:text-base font-semibold text-slate-900 dark:text-white break-all transition-colors group-hover:text-[#ff8c1a]">
                {site.email}
              </p>
              <span className="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
                Direct email correspondence
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => copyToClipboard(site.email, "email", e)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#13151f] text-slate-700 dark:text-zinc-400 hover:border-[#ff7a00]/50 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Copy email address"
            title="Copy email"
          >
            {copiedKey === "email" ? (
              <Check className="h-4 w-4 text-emerald-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </SpotlightCard>
      </a>

      {/* Phone Card */}
      <a
        href={`tel:${site.phoneTel}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] rounded-[22px]"
      >
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.12)"
          className="flex items-center justify-between p-5 group"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/20 text-slate-700 dark:text-zinc-200 transition-transform duration-300 group-hover:scale-105 shadow-md">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-300">
                Phone
              </span>
              <p className="mt-1 text-sm sm:text-base font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-[#ff8c1a]">
                {site.phoneDisplay}
              </p>
              <span className="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
                Voice & mobile calls
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => copyToClipboard(site.phoneTel, "phone", e)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#13151f] text-slate-700 dark:text-zinc-400 hover:border-[#ff7a00]/50 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Copy phone number"
            title="Copy phone"
          >
            {copiedKey === "phone" ? (
              <Check className="h-4 w-4 text-emerald-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </SpotlightCard>
      </a>

      {/* Address Card */}
      <a
        href={site.mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] rounded-[22px]"
      >
        <SpotlightCard
          spotlightColor="rgba(255, 170, 0, 0.16)"
          className="flex items-start gap-4 p-5 group"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#d97706] dark:text-[#ffaa00] transition-transform duration-300 group-hover:scale-105 shadow-md">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#d97706] dark:text-[#ffaa00]">
              Office Location
            </span>
            <p className="mt-1 text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug transition-colors group-hover:text-[#ff8c1a]">
              {site.address.full}
            </p>
            <span className="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
              Open location on Google Maps
            </span>
          </div>
        </SpotlightCard>
      </a>

      {/* LinkedIn Card */}
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] rounded-[22px]"
      >
        <SpotlightCard
          spotlightColor="rgba(255, 122, 0, 0.16)"
          className="flex items-start gap-4 p-5 group"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30 text-[#ff8c1a] transition-transform duration-300 group-hover:scale-105 shadow-md">
            <LinkedinIcon className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] dark:text-[#ff8c1a]">
              LinkedIn
            </span>
            <p className="mt-1 text-sm sm:text-base font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-[#ff8c1a]">
              Q9 Technologies
            </p>
            <span className="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
              Official company page
            </span>
          </div>
        </SpotlightCard>
      </a>

      {/* WhatsApp Card (Feature Flagged) */}
      {features.whatsapp && (
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] rounded-[22px]"
        >
          <SpotlightCard
            spotlightColor="rgba(34, 197, 94, 0.2)"
            className="flex items-start gap-4 p-5 group"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 transition-transform duration-300 group-hover:scale-105 shadow-md">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                WhatsApp
              </span>
              <p className="mt-1 text-sm sm:text-base font-semibold text-white">
                {site.phoneDisplay}
              </p>
            </div>
          </SpotlightCard>
        </a>
      )}
    </div>
  );
}
