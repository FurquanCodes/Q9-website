"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Camera, CheckSquare, Wrench, Smartphone, ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { productsList, productsContent } from "@/content/apps";

export function ProductsShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProducts = productsList.filter((product) => {
    if (activeFilter === "all") return true;
    return product.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Photography":
        return <Camera className="h-5 w-5 text-[#ff8c1a]" />;
      case "Productivity":
        return <CheckSquare className="h-5 w-5 text-[#ffaa00]" />;
      case "Utilities":
        return <Wrench className="h-5 w-5 text-emerald-400" />;
      default:
        return <Sparkles className="h-5 w-5 text-[#ff7a00]" />;
    }
  };

  return (
    <Section variant="default">
      <Container>
        {/* Category Filter Pills */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {productsContent.filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff6a00] to-[#ffaa00] text-white shadow-[0_0_20px_rgba(255,106,0,0.35)]"
                      : "border border-slate-200 dark:border-white/10 bg-white dark:bg-[#13151f] text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-[#ff7a00]/40 shadow-sm dark:shadow-none"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product, idx) => (
            <Reveal key={product.id} delay={0.1 * (idx + 1)}>
              <SpotlightCard
                spotlightColor="rgba(255, 122, 0, 0.16)"
                className="h-full p-6 sm:p-8 flex flex-col justify-between border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0e1017]/90 rounded-3xl group shadow-sm dark:shadow-none"
              >
                <div>
                  {/* Top Row: Category Icon & Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 group-hover:border-[#ff7a00]/40 transition-colors">
                        {getCategoryIcon(product.category)}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] dark:text-[#ff8c1a]">
                        {product.category}
                      </span>
                    </div>

                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                      {product.status}
                    </span>
                  </div>

                  {/* Product Title & Tagline */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#ffaa00] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-zinc-300">
                    {product.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mt-5 space-y-2 border-t border-slate-200 dark:border-white/[0.08] pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Engineering Highlights
                    </span>
                    {product.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-[#ff8c1a] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Telemetry Specs */}
                  <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-black/40 p-3 text-[11px]">
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase tracking-wider">Engine</span>
                      <div className="font-mono text-slate-800 dark:text-zinc-200 truncate">{product.specs.engine}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase tracking-wider">Target FPS</span>
                      <div className="font-mono text-emerald-600 dark:text-emerald-400 truncate">{product.specs.targetFps}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase tracking-wider">Storage</span>
                      <div className="font-mono text-[#d97706] dark:text-[#ffaa00] truncate">{product.specs.sync}</div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Platforms & Request Action */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {product.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-zinc-300"
                      >
                        <Smartphone className="h-3 w-3 text-[#ff8c1a]" />
                        <span>{platform} Native</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] dark:text-[#ffaa00] hover:text-[#c2410c] dark:hover:text-white transition-colors"
                  >
                    <span>Beta Access</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
