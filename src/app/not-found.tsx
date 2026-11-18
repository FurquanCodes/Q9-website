import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center pt-32 pb-20 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.15)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10 max-w-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ffaa00] rounded-full border border-[#ff7a00]/30 bg-[#ff7a00]/10 px-4 py-1.5 inline-block mb-6 shadow-[0_0_15px_rgba(255,106,0,0.15)]">
          404 Error
        </span>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white font-mono">
          404
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
          Page not found
        </h2>

        <p className="mt-3 text-base text-zinc-400 leading-relaxed">
          The page you are looking for does not exist.
        </p>

        <p className="mt-2 text-xs font-semibold text-[#ff8c1a] uppercase tracking-wider">
          {site.name} — {site.tagline}
        </p>

        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary" size="md">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
