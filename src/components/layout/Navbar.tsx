"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { QuoteModal } from "@/components/contact/QuoteModal";
import { navLinks, NavItem } from "@/config/nav";
import { features } from "@/config/features";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLinks: NavItem[] = navLinks;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400 h-24 flex items-center",
          isScrolled
            ? "bg-[#090a0f]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo on Left */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#12141c]/80 px-3 py-1.5 backdrop-blur-md shadow-inner"
            aria-label="Main Navigation"
          >
            {activeLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full",
                    isActive
                      ? "text-white bg-gradient-to-r from-orange-600/25 to-amber-500/15 border border-[#ff7a00]/40 shadow-[0_0_16px_rgba(255,122,0,0.25)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#ff7a00] rounded-full shadow-[0_0_8px_#ff7a00]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button, Theme Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            {features.quoteModal ? (
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsQuoteOpen(true)}
                className="hidden sm:inline-flex group shadow-lg"
              >
                <span>Contact us</span>
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            ) : (
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="hidden sm:inline-flex group shadow-lg"
              >
                <span>Contact us</span>
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            )}

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#12141c] text-white transition-colors hover:border-[#ff7a00]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] lg:hidden cursor-pointer"
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6 text-[#ff7a00]" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={activeLinks}
      />

      {/* Quote Modal (Active when features.quoteModal is true) */}
      {features.quoteModal && (
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
        />
      )}
    </>
  );
}
