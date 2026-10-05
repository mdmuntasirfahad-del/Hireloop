// components/JobCTA.jsx  (HeroUI v3 + Tailwind)
// Put cta-bg.png in: public/images/cta-bg.png
import NextLink from "next/link";
import { buttonVariants } from "@heroui/react";

export default function JobCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-32 text-white sm:py-40">
      {/* Purple glow behind the dome */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-20 h-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(99,102,241,0.75) 0%, rgba(79,70,229,0.25) 45%, transparent 75%)",
        }}
      />

      {/* Grid dome image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-top bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/cta-bg.png')" }}
      />

      {/* Fade into black at the bottom */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black to-transparent"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-balance text-4xl font-medium leading-tight sm:text-5xl">
          Your next role is already looking for you
        </h2>
        <p className="mt-5 max-w-md text-balance text-sm text-zinc-400">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <NextLink
            href="/auth/signup"
            className={`${buttonVariants({ variant: "primary", size: "sm" })} !bg-white font-medium !text-black`}
          >
            Create a free account
          </NextLink>
          <NextLink
            href="/pricing"
            className={`${buttonVariants({ variant: "ghost", size: "sm" })} border border-white/10 !bg-zinc-950 font-medium !text-white`}
          >
            View pricing
          </NextLink>
        </div>
      </div>
    </section>
  );
}