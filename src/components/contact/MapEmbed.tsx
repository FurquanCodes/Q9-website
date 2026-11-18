import React from "react";
import { ExternalLink } from "lucide-react";
import { site } from "@/config/site";

export function MapEmbed() {
  return (
    <div className="mt-8">
      <div className="relative w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#13151f] shadow-2xl min-h-[320px] aspect-[16/10]">
        <iframe
          src={site.mapEmbedUrl}
          title="Q9 Technologies location map"
          className="absolute inset-0 h-full w-full border-0 filter contrast-[0.95] brightness-[0.88]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
        <span>Rawalpindi City Tehsil, Punjab, Pakistan</span>
        <a
          href={site.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-[#ffaa00] hover:text-white transition-colors"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
