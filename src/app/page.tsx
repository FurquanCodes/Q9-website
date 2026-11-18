import { Hero } from "@/components/sections/Hero";
import { FactsStrip } from "@/components/sections/FactsStrip";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ApproachGrid } from "@/components/sections/ApproachGrid";
import { CultureHighlight } from "@/components/sections/CultureHighlight";
import { MissionVision } from "@/components/sections/MissionVision";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactPreview } from "@/components/sections/ContactPreview";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Facts strip (truthful only: 2 platforms, 4 approach steps, 6 values) */}
      <FactsStrip />

      {/* 3. What we build (Photography, Productivity, Utilities, More practical apps) */}
      <WhatWeBuild />

      {/* 4. About snippet (Split layout with purpose & CSS abstract visual) */}
      <AboutSnippet />

      {/* 5. Our approach (4 lifecycle steps) */}
      <ApproachGrid />

      {/* 6. Why Q9 / Culture highlight (Trio: Trust, Merit, Respect) */}
      <CultureHighlight />

      {/* 7. Mission and Vision (Two-column card block) */}
      <MissionVision />

      {/* 8. CTA banner ("Simpler Tomorrow") */}
      <CTABanner />

      {/* 9. Contact preview (Email, Phone, Address, LinkedIn) */}
      <ContactPreview />
    </>
  );
}
