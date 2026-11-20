import type { Metadata } from "next";
import { Clock, Globe, PhoneCall, Building2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { constructMetadata, generateBreadcrumbsJsonLd } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Q9 Technologies. Contact our mobile software engineering studio via email, phone, LinkedIn, or visit our Rawalpindi HQ.",
  path: "/contact",
  keywords: [
    "contact Q9 Technologies",
    "software company Rawalpindi phone",
    "hire mobile app developers Pakistan",
    "Q9 Technologies address",
    "mobile app consultation",
  ],
});

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Studio Inquiries"
        title="Contact Q9 Technologies"
        subtitle="Let's discuss your product roadmap, mobile engineering requirements, and collaborative opportunities."
      />

      {/* 2. Agency Studio Metrics Strip */}
      <section className="relative z-20 -mt-6 sm:-mt-8 mb-4">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-[#13151f]/90 p-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-3 p-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#ff8c1a]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Response SLA</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">&lt; 24 Hours Reply</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-[#ffaa00]">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Studio Timezone</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">PKT (UTC+5)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/20 text-zinc-200">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Direct Line</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">{site.phoneDisplay}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Headquarters</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">Rawalpindi, Pakistan</div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. Main Split Section: Desk Inquiries & Modern Contact Form */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Left Column: Direct Channels & Studio Credentials (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={0.1}>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff8c1a]">Direct Channels</span>
                  <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">Reach Us Directly</h2>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    Connect with our engineering leadership through phone, email, or our verified LinkedIn network.
                  </p>
                </div>
                <ContactInfo />
              </Reveal>

              {/* Studio Desk Working Hours Card */}
              <Reveal delay={0.2}>
                <div className="rounded-[22px] border border-white/10 bg-[#13151f] p-5 shadow-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ffaa00]">Studio Hours</span>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>Monday – Friday:</span>
                      <span className="font-semibold text-white font-mono">09:00 – 18:00 PKT</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Saturday – Sunday:</span>
                      <span className="font-mono text-zinc-500">By Special Project Appointment</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.08] text-xs text-zinc-400">
                    We respond to technical project inquiries and RFP submissions within 1 business day.
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Modern Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff8c1a]">Project Inquiry</span>
                  <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">Send Us a Message</h2>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    Tell us about your project requirements, scope, or general inquiry. Our team will review and reply promptly.
                  </p>
                </div>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Dedicated Full-Width Studio Map HQ Section */}
      <Section variant="alt">
        <Container>
          <Reveal>
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <div className="q9-eyebrow mb-2">
                <span>Studio Location</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Visit Our Rawalpindi Studio HQ
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
                Located in Rawalpindi City Tehsil, Punjab, Pakistan. Our studio space is designed for collaborative sprint planning and technical product architecture sessions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <MapEmbed />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
