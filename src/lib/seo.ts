import type { Metadata } from "next";
import { site } from "@/config/site";

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
  ogImage?: string;
}

export function constructMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  keywords = [],
  ogImage = "/og-image.png",
}: PageSeoProps): Metadata {
  const canonicalUrl = `${site.url}${path}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${site.url}${ogImage}`;

  const defaultKeywords = [
    "Q9 Technologies",
    "software house Rawalpindi",
    "mobile app development Rawalpindi",
    "mobile app development company Pakistan",
    "iOS app developers",
    "Android app developers",
    "SwiftUI development",
    "Kotlin Jetpack Compose",
    "photography apps",
    "productivity apps",
    "utility apps",
    "Simpler Tomorrow",
  ];

  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
      },
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [fullOgImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.name,
    url: site.url,
    logo: `${site.url}/icon.png`,
    email: site.email,
    telephone: site.phoneTel,
    slogan: site.tagline,
    description:
      "Q9 Technologies is an engineering-driven mobile app development studio specializing in iOS (Swift) and Android (Kotlin) applications across photography, productivity, and utilities.",
    sameAs: [site.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneTel,
        contactType: "customer service",
        email: site.email,
        availableLanguage: ["English", "Urdu"],
      },
    ],
  };
}

export function generateProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#service`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: `${site.url}/og-image.png`,
    description: site.headline,
    telephone: site.phoneTel,
    email: site.email,
    priceRange: "$$",
    currenciesAccepted: "USD, PKR, EUR, GBP",
    paymentAccepted: "Bank Transfer, Wire Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.6425,
      longitude: 73.0694,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [site.linkedin],
    knowsAbout: [
      "Mobile Application Development",
      "iOS Native Engineering (Swift & SwiftUI)",
      "Android Native Engineering (Kotlin & Jetpack Compose)",
      "Mobile Photography Tools",
      "Productivity Software Engineering",
      "Utility Applications",
      "Mobile Architecture & Performance Optimization",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Software Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "iOS Native App Development",
            description: "High-performance native Swift & SwiftUI application engineering.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Android Native App Development",
            description: "Modern Kotlin & Jetpack Compose mobile software engineering.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Product Architecture & Refinement",
            description: "Telemetry, human interface design, and continuous engineering iterations.",
          },
        },
      ],
    },
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.headline,
    publisher: {
      "@id": `${site.url}/#organization`,
    },
  };
}

export function generateBreadcrumbsJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
