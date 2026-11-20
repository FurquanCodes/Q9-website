import { Hero } from "@/components/sections/Hero";
import { FactsStrip } from "@/components/sections/FactsStrip";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ApproachGrid } from "@/components/sections/ApproachGrid";
import { CultureHighlight } from "@/components/sections/CultureHighlight";
import { MissionVision } from "@/components/sections/MissionVision";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactPreview } from "@/components/sections/ContactPreview";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero ("Simpler Tomorrow: Great People Building Useful Apps") */}
      <Hero />

      {/* 2. Facts strip (Scroll-triggered count-up: 2 platforms, 4 approach steps, 6 values) */}
      <FactsStrip />

      {/* 3. What we build (Photography, Productivity, Utilities, Practical Apps) */}
      <WhatWeBuild />

      {/* 4. Technologies We Work On (High-density minimal engineering stack) */}
      <TechnologiesSection />

      {/* 5. Industry Collaboration & Co-Development */}
      <CollaborationSection />

      {/* 6. About snippet (Split layout with purpose & CSS abstract visual) */}
      <AboutSnippet />

      {/* 7. Our approach (4 lifecycle steps) */}
      <ApproachGrid />

      {/* 8. Why Q9 / Culture highlight (Trust, Ownership, Growth through Merit) */}
      <CultureHighlight />

      {/* 9. Mission and Vision (Two-column card block) */}
      <MissionVision />

      {/* 10. CTA banner ("Simpler Tomorrow") */}
      <CTABanner />

      {/* 11. Contact preview (Email, Phone, Address, LinkedIn) */}
      <ContactPreview />
    </>
  );
}
