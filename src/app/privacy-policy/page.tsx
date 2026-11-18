import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { privacyContent } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Q9 Technologies mobile apps and website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow={privacyContent.eyebrow}
        title={privacyContent.title}
        subtitle={`Last updated: ${privacyContent.lastUpdated}`}
      />

      <Section variant="default">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Prominent Notice Banner */}
            <div className="mb-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-sm text-zinc-300">
              <strong className="text-[#ffaa00] font-semibold">Notice: </strong>
              {privacyContent.notice}
            </div>

            <div className="space-y-8">
              {privacyContent.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {sec.heading}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
