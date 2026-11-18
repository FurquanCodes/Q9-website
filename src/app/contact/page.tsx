import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Q9 Technologies by email, phone, LinkedIn, or visit us in Rawalpindi, Pakistan.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Let's talk about your next idea."
      />

      {/* 2. Split Layout: Form & Info */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Left Column: Interactive Contact Form (7 cols / ~58%) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Reveal delay={0.1}>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Fill in the form below and we will get back to you promptly.
                  </p>
                </div>
                <ContactForm />
              </Reveal>
            </div>

            {/* Right Column: Contact Info Cards + Map (5 cols / ~42%) */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <Reveal delay={0.2}>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white">Reach Us Directly</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Contact our team through phone, email, or visit our Rawalpindi office.
                  </p>
                </div>
                <ContactInfo />
                <MapEmbed />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
