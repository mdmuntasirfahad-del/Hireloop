// components/JobHero.jsx  (HeroUI v3 + Gravity UI icons + Tailwind)
import NextLink from "next/link";
import { buttonVariants } from "@heroui/react";
import { Magnifier, MapPin, Briefcase } from "@gravity-ui/icons";

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export default function JobHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-28 text-white sm:py-36">
      {/* Soft light at the top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-72"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 45%, transparent 75%)",
        }}
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-1.5 text-xs shadow-lg shadow-black/50">
          <Briefcase
            width={14}
            height={14}
            className="text-amber-400"
            aria-hidden
          />
          <span className="font-mono font-semibold text-white">50,000+</span>
          <span className="font-mono uppercase tracking-wide text-zinc-400">
            New jobs this month
          </span>
        </p>

        {/* Heading */}
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
          Find Your Dream Job Today
        </h1>
        <p className="mt-5 max-w-xl text-balance text-sm leading-relaxed text-zinc-400">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search */}
        <form
          action="/jobs"
          method="GET"
          role="search"
          className="mt-10 flex w-full max-w-2xl flex-col gap-2 rounded-2xl border border-white/10 bg-zinc-950 p-2 sm:flex-row sm:items-center"
        >
          <label className="flex flex-1 items-center gap-3 px-3 py-2">
            <Magnifier
              width={16}
              height={16}
              className="shrink-0 text-zinc-400"
              aria-hidden
            />
            <span className="sr-only">Job title, skill or company</span>
            <input
              type="text"
              name="q"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-xs text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </label>

          <div
            aria-hidden
            className="hidden h-6 w-px bg-white/10 sm:block"
          />

          <label className="flex flex-1 items-center gap-3 px-3 py-2">
            <MapPin
              width={16}
              height={16}
              className="shrink-0 text-zinc-400"
              aria-hidden
            />
            <span className="sr-only">Location or Remote</span>
            <input
              type="text"
              name="location"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-xs text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            aria-label="Search jobs"
            className={`${buttonVariants({ variant: "primary" })} !size-10 !min-w-0 shrink-0 self-end !rounded-lg !bg-indigo-500 !p-0 sm:self-auto`}
          >
            <Magnifier width={16} height={16} aria-hidden />
          </button>
        </form>

        {/* Trending */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-zinc-400">Trending Position</span>
          {trending.map((term) => (
            <NextLink
              key={term}
              href={`/jobs?q=${encodeURIComponent(term)}`}
              className="rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-zinc-200 transition-colors hover:bg-zinc-800"
            >
              {term}
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
}