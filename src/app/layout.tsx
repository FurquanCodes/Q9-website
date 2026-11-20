import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { site } from "@/config/site";
import {
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
  generateProfessionalServiceJsonLd,
} from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.headline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Q9 Technologies is a mobile app development company building useful Android and iOS apps across photography, productivity, utilities, and more.",
  keywords: [
    "Q9 Technologies",
    "software house Rawalpindi",
    "mobile app development Rawalpindi",
    "mobile app development company Pakistan",
    "Android apps",
    "iOS apps",
    "SwiftUI development",
    "Kotlin Jetpack Compose",
    "photography apps",
    "productivity apps",
    "utility apps",
    "Simpler Tomorrow",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  robots: {
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.headline}`,
    description:
      "We build mobile applications that solve everyday problems, simplify routine tasks, and create better digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.headline}`,
    description:
      "We build mobile applications that solve everyday problems, simplify routine tasks, and create better digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = generateOrganizationJsonLd();
  const websiteJsonLd = generateWebSiteJsonLd();
  const professionalServiceJsonLd = generateProfessionalServiceJsonLd();

  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("q9-theme");if(t==="light"){document.documentElement.setAttribute("data-theme","light");document.documentElement.classList.add("light");}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--primary)] selection:text-white">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-white focus:rounded-lg focus:outline-none"
          >
            Skip to content
          </a>
          <BackgroundBeams />
          <Navbar />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
