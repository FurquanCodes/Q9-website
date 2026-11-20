import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none text-center";

  const sizeStyles = {
    sm: "h-9 px-4 text-xs tracking-wide",
    md: "h-11 px-6 text-sm tracking-wide",
    lg: "h-13 px-8 text-base tracking-wide font-bold",
  };

  const variantStyles = {
    primary:
      "relative overflow-hidden bg-gradient-to-r from-[#ff6a00] via-[#ff7a00] to-[#ffaa00] text-white shadow-[0_8px_25px_rgba(255,106,0,0.35)] hover:shadow-[0_12px_32px_rgba(255,106,0,0.5)] hover:brightness-110 active:scale-[0.98]",
    secondary:
      "bg-white dark:bg-white/[0.04] text-slate-900 dark:text-white border border-slate-300 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:border-[#ff7a00]/50 hover:text-[#ea580c] dark:hover:text-white shadow-sm dark:shadow-none hover:shadow-[0_0_20px_rgba(255,106,0,0.15)] active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]",
  };

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
