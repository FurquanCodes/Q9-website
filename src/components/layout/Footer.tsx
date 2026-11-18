"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/config/site";
import { footerCompanyLinks, legalLinks } from "@/config/nav";
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#090a0f] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-zinc-400">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.06)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Brand block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo showTagline />
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-sm">
              We build mobile applications that solve everyday problems, simplify
              routine tasks, and create better digital experiences.
            </p>

            {/* Live Studio Status Indicator */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Software Studio Active</span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#13151f] text-[#ffaa00] transition-all hover:bg-[#ff6a00] hover:text-white hover:border-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00]"
                aria-label="Q9 Technologies on LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 text-[#ff7a00] shrink-0 mt-0.5 group-hover:text-[#ffaa00] transition-colors" aria-hidden="true" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 text-[#ff7a00] shrink-0 group-hover:text-[#ffaa00] transition-colors" aria-hidden="true" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-zinc-400">
                  <MapPin className="h-5 w-5 text-[#ff7a00] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-snug">{site.address.full}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {site.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {(features.privacyPage || features.termsPage) &&
              legalLinks.map((legal) => (
                <Link
                  key={legal.href}
                  href={legal.href}
                  className="hover:text-white transition-colors"
                >
                  {legal.label}
                </Link>
              ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#13151f] px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-[#ff7a00]/50 hover:text-white cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3 text-[#ff7a00]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
