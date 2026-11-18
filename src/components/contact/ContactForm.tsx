"use client";

import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Loader2, RotateCcw } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/schema";
import { submitContactForm } from "@/lib/contact";
import { site } from "@/config/site";

interface ContactFormProps {
  onSuccess?: () => void;
  isModal?: boolean;
}

export function ContactForm({ onSuccess, isModal = false }: ContactFormProps) {
  const [isBotTimeChecked, setIsBotTimeChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [isRateLimited, setIsRateLimited] = useState(false);

  useEffect(() => {
    // 3-second anti-bot timer
    const botTimer = setTimeout(() => {
      setIsBotTimeChecked(true);
    }, 3000);

    return () => clearTimeout(botTimer);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "General inquiry",
      message: "",
      company_website: "",
    },
  });

  const messageValue = useWatch({ control, name: "message" }) || "";

  const onSubmit = async (data: ContactFormData) => {
    // 1. Time-on-page check: reject if submitted under 3 seconds (anti-bot)
    if (!isBotTimeChecked) {
      setSubmitStatus("error");
      setFeedbackMessage("Submission was too quick. Please take a moment and try again.");
      return;
    }

    if (isRateLimited) {
      setSubmitStatus("error");
      setFeedbackMessage("Please wait a moment before sending another message.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setFeedbackMessage("");

    try {
      const res = await submitContactForm(data);

      if (res.success) {
        setSubmitStatus("success");
        setFeedbackMessage(
          res.message ||
            "Thank you. Your message has been sent. We will get back to you soon."
        );
        reset();

        // 10-second client-side rate limit
        setIsRateLimited(true);
        setTimeout(() => {
          setIsRateLimited(false);
        }, 10000);

        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmitStatus("error");
        setFeedbackMessage(
          res.message ||
            `Something went wrong. Please try again or email us directly at ${site.email}.`
        );
      }
    } catch {
      setSubmitStatus("error");
      setFeedbackMessage(
        `Something went wrong. Please try again or email us directly at ${site.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitStatus("idle");
    setFeedbackMessage("");
    reset();
  };

  // Success Confirmation State
  if (submitStatus === "success") {
    return (
      <div
        className="rounded-[22px] border border-emerald-500/30 bg-gradient-to-b from-[#181b28] to-[#13151f] p-8 sm:p-10 text-center shadow-2xl animate-in fade-in duration-300"
        aria-live="polite"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 mb-5 border border-emerald-500/25">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-white">Message Sent</h3>
        <p className="mt-3 text-base text-[#9ca3af] max-w-md mx-auto leading-relaxed">
          {feedbackMessage}
        </p>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleReset}
            className="q9-btn-secondary inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>Send another message</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="q9-card p-6 sm:p-8 lg:p-10 relative space-y-6"
      noValidate
    >
      {/* Error Announcement Banner */}
      {submitStatus === "error" && (
        <div
          className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-red-400" aria-hidden="true" />
          <p>{feedbackMessage}</p>
        </div>
      )}

      {/* Honeypot Field (Hidden from human visitors) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">Website URL (leave empty)</label>
        <input
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold tracking-wide text-white mb-2"
          >
            Full Name <span className="text-[#ff7a00]">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-xl border border-white/10 bg-[#0e1017] px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold tracking-wide text-white mb-2"
          >
            Email Address <span className="text-[#ff7a00]">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-white/10 bg-[#0e1017] px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Phone (Optional) */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-bold tracking-wide text-white mb-2"
          >
            Phone Number <span className="text-xs text-zinc-500 font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+92 300 0000000"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full rounded-xl border border-white/10 bg-[#0e1017] px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-bold tracking-wide text-white mb-2"
          >
            Subject <span className="text-[#ff7a00]">*</span>
          </label>
          <select
            id="subject"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className="w-full rounded-xl border border-white/10 bg-[#0e1017] px-4 py-3 text-sm text-white transition-colors focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
            {...register("subject")}
          >
            <option value="General inquiry">General inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Careers">Careers</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      {/* Message with live counter */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="message"
            className="block text-sm font-bold tracking-wide text-white"
          >
            Message <span className="text-[#ff7a00]">*</span>
          </label>
          <span
            className={`text-xs ${
              messageValue.length > 1500 ? "text-red-400 font-bold" : "text-zinc-500"
            }`}
          >
            {messageValue.length} / 1500
          </span>
        </div>
        <textarea
          id="message"
          rows={isModal ? 4 : 5}
          placeholder="Tell us about your project or inquiry..."
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-xl border border-white/10 bg-[#0e1017] px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00] resize-y"
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isRateLimited}
        className="q9-btn-primary w-full flex items-center justify-center gap-2 h-12 text-sm sm:text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>Send message</span>
          </>
        )}
      </button>
    </form>
  );
}
