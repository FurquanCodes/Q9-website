"use client";

import React from "react";
import { ExternalLink, MapPin, Compass, Navigation } from "lucide-react";
import { site } from "@/config/site";

export function MapEmbed() {
  return (
    <div className="w-full">
      {/* Studio Map Console Frame */}
      <div className="relative w-full overflow-hidden rounded-[28px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1017] shadow-xl dark:shadow-2xl">
        {/* Top Console Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 bg-slate-50/95 dark:bg-[#13151f]/90 px-5 py-3.5 backdrop-blur-md">
          {/* Studio status indicator */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white tracking-wide">
              Q9 Rawalpindi Studio HQ
            </span>
            <span className="hidden sm:inline-block rounded-full bg-slate-200/60 dark:bg-white/[0.06] border border-slate-300 dark:border-white/10 px-2 py-0.5 text-[10px] font-mono text-slate-700 dark:text-zinc-300">
              Active Studio
            </span>
          </div>

          {/* GPS Coordinates Badge & Google Maps Action */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-zinc-400">
              <Compass className="h-3.5 w-3.5 text-[#ffaa00]" />
              <span>33.6425° N, 73.0694° E</span>
            </div>

            <a
              href={site.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#ff7a00]/40 bg-[#ff7a00]/15 px-3.5 py-1.5 text-xs font-bold text-[#ea580c] dark:text-[#ffaa00] hover:bg-[#ff7a00]/25 hover:text-white transition-all duration-300 shadow-sm"
            >
              <Navigation className="h-3.5 w-3.5" />
              <span>Get Directions</span>
              <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Commanding Large Map Viewport */}
        <div className="relative h-[440px] sm:h-[500px] lg:h-[560px] w-full bg-slate-100 dark:bg-[#11131e]">
          <iframe
            src={site.mapEmbedUrl}
            title="Q9 Technologies Rawalpindi Studio Location"
            className="absolute inset-0 h-full w-full border-0 filter contrast-[0.98] brightness-[0.95] dark:brightness-[0.88] dark:contrast-[0.95]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Bottom Studio Location Specs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-white/10 bg-slate-50/95 dark:bg-[#13151f]/95 px-5 py-3.5 text-xs text-slate-700 dark:text-zinc-300">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#ff8c1a] shrink-0" />
            <span className="font-medium text-slate-900 dark:text-white">{site.address.full}</span>
          </div>
          <div className="text-slate-500 dark:text-zinc-400 text-[11px]">
            Technical consultations by scheduled appointment • Monday – Friday (09:00 - 18:00 PKT)
          </div>
        </div>
      </div>
    </div>
  );
}
