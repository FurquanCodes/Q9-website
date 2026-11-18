import type { Metadata } from "next";
import { site } from "@/config/site";

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageSeoProps): Metadata {
  const canonicalUrl = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
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
          url: `${site.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [`${site.url}/og-image.png`],
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
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.png`,
    email: site.email,
    telephone: site.phoneTel,
    slogan: site.tagline,
    description:
      "Q9 Technologies is a mobile app development company focused on Android and iOS applications across photography, productivity, utilities, and other practical categories.",
    sameAs: [site.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.headline,
  };
}
