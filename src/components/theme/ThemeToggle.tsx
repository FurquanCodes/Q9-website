"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isMounted) {
    return (
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#12141c] text-slate-500 dark:text-zinc-400 opacity-60 ${className || ""}`}
        aria-hidden="true"
      >
        <Moon className="h-4 w-4" />
      </div>
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] ${
        isLight
          ? "border-slate-300 bg-white text-slate-700 hover:text-[#ff6a00] hover:border-[#ff6a00]/50 shadow-sm"
          : "border-white/10 bg-[#12141c] text-zinc-300 hover:text-[#ffaa00] hover:border-[#ff7a00]/50 shadow-inner"
      } ${className || ""}`}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? (
        <Sun className="h-4 w-4 text-[#ff7a00] transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-[#ffaa00] transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
