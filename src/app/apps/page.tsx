import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { appsContent } from "@/content/apps";
import { features } from "@/config/features";
import { Reveal } from "@/components/ui/Reveal";
import { constructMetadata, generateBreadcrumbsJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Apps & Products",
  description:
    "Explore mobile applications built by Q9 Technologies across photography, productivity, and utilities.",
  path: "/apps",
  keywords: [
    "Q9 Technologies apps",
    "photography apps",
    "productivity apps",
    "utility apps",
    "Android apps",
    "iOS apps",
  ],
});

export default function AppsPage() {
  // If feature flag is off, render 404
  if (!features.apps) {
    notFound();
  }

  const { hero, emptyState, apps } = appsContent;

  const breadcrumbJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Apps & Products", path: "/apps" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <Section variant="default">
        <Container>
          {apps.length === 0 ? (
            <Reveal>
              <div className="mx-auto max-w-xl text-center py-16 px-6 rounded-3xl border border-white/10 bg-[#13151f] shadow-2xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-[#ff8c1a] border border-orange-500/30 shadow-lg shadow-orange-500/20">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-white">{emptyState.title}</h2>
                <p className="mt-3 text-base text-zinc-400 leading-relaxed">
                  {emptyState.description}
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apps.map((app) => (
                <div key={app.id} className="q9-card p-6">
                  <h3 className="text-xl font-bold text-white">{app.name}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{app.description}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
