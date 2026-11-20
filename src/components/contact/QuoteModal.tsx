"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      // Focus modal container
      if (modalRef.current) {
        modalRef.current.focus();
      }

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
        if (previouslyFocusedElementRef.current) {
          previouslyFocusedElementRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050608]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[24px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10121a] p-6 sm:p-8 shadow-2xl focus:outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-6">
          <div>
            <h2 id="quote-modal-title" className="text-xl font-bold text-slate-900 dark:text-white">
              Start a Project
            </h2>
            <p className="text-xs text-[#ea580c] dark:text-[#ffaa00]">Tell us about your next mobile idea</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161822] text-slate-700 dark:text-white hover:border-[#ff7a00]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Reusing ContactForm */}
        <ContactForm isModal onSuccess={onClose} />
      </div>
    </div>
  );
}
