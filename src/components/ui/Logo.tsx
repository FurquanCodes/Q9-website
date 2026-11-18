import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] rounded-xl p-1 transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
      aria-label="Q9 Technologies Home"
    >
      <div className="relative h-11 w-44 sm:h-12 sm:w-52">
        <Image
          src="/images/q9-logo-transparent.png"
          alt="Q9 Technologies — Simpler Tomorrow"
          fill
          priority
          sizes="(max-width: 640px) 176px, 208px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
