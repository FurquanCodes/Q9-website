import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  variant?: "default" | "alt" | "surface";
  className?: string;
}

export function Section({
  children,
  id,
  variant = "default",
  className,
  ...props
}: SectionProps) {
  const bgClasses = {
    default: "bg-[var(--bg)]",
    alt: "bg-[var(--bg-alt)] border-y border-[var(--border)]",
    surface: "bg-[var(--surface)]",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-14 sm:py-20 lg:py-24 relative overflow-hidden",
        bgClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
