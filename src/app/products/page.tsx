import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProductsShowcase } from "@/components/products/ProductsShowcase";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { productsContent } from "@/content/apps";
import { constructMetadata, generateBreadcrumbsJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Applications & Products",
  description:
    "Explore mobile applications and digital products engineered by Q9 Technologies across photography, productivity, and utilities.",
  path: "/products",
  keywords: [
    "Q9 Technologies products",
    "mobile apps portfolio",
    "iOS applications Rawalpindi",
    "Android apps Pakistan",
    "photography software",
    "productivity apps",
    "mobile utilities",
  ],
});

export default function ProductsPage() {
  const breadcrumbJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        eyebrow={productsContent.hero.eyebrow}
        title={productsContent.hero.title}
        subtitle={productsContent.hero.subtitle}
      />

      {/* 2. Products Showcase Section */}
      <ProductsShowcase />

      {/* 3. Technologies We Work On */}
      <TechnologiesSection />

      {/* 4. Collaboration & Working Together */}
      <CollaborationSection />
    </>
  );
}
