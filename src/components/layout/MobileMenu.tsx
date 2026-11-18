"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { NavItem } from "@/config/nav";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavItem[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#090a0f]/98 backdrop-blur-2xl lg:hidden p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <Logo />

        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#12141c] text-white hover:border-[#ff7a00]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] cursor-pointer"
          aria-label="Close navigation menu"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="my-auto py-8 flex flex-col gap-2">
        {links.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between min-h-[52px] px-5 py-3 rounded-2xl text-lg font-bold transition-all",
                isActive
                  ? "bg-gradient-to-r from-[#ff6a00]/20 to-[#ffaa00]/10 text-white border border-[#ff7a00]/40 shadow-[0_0_20px_rgba(255,106,0,0.15)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
              )}
            >
              <span>{item.label}</span>
              <ArrowRight className="h-5 w-5 text-[#ff7a00] opacity-80" aria-hidden="true" />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions & Contact Info */}
      <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-4">
        <Button
          href="/contact"
          variant="primary"
          size="lg"
          className="w-full text-base justify-center shadow-lg"
        >
          Contact us
        </Button>
        <div className="text-center text-xs text-zinc-400">
          <p className="text-zinc-300 font-medium">{site.tagline}</p>
          <p className="mt-1">{site.email}</p>
        </div>
      </div>
    </div>
  );
}
