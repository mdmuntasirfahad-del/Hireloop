// components/JobDiscovery.jsx  (HeroUI v3)
import NextLink from "next/link";
import { Card, buttonVariants } from "@heroui/react";
import { MapPin, Briefcase, CircleDollar, ArrowRight } from "@gravity-ui/icons";

// Replace with data from your API / database
const jobs = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting initiatives",
  location: "New York, USA",
  type: "Hybrid",
  salary: "€25–€40/hour",
}));

function Tag({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800/80 px-2.5 py-1 text-xs text-zinc-200">
      <Icon width={12} height={12} className="text-fuchsia-300" aria-hidden />
      {children}
    </span>
  );
}

export default function JobDiscovery({ items = jobs }) {
  return (
    <section className="bg-black px-6 py-50 text-white">
      <div>
        {/* Heading */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-300">
            <span className="h-1.5 w-1.5 bg-indigo-500" aria-hidden />
            Smart job discovery
            <span className="h-1.5 w-1.5 bg-indigo-500" aria-hidden />
          </p>
          <h2 className="mx-auto mt-3 max-w-md text-balance text-3xl font-medium leading-tight sm:text-4xl">
            The roles you&apos;d never find by searching
          </h2>
        </div>

        {/* Cards */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((job) => (
            <li key={job.id}>
              <Card className="h-full rounded-2xl bg-zinc-900 text-white shadow-none">
                <Card.Content className="flex h-full flex-col gap-3 p-5">
                  <h3 className="text-xl font-medium">{job.title}</h3>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Tag icon={MapPin}>{job.location}</Tag>
                    <Tag icon={Briefcase}>{job.type}</Tag>
                    <Tag icon={CircleDollar}>{job.salary}</Tag>
                  </div>

                  <NextLink
                    href={`/jobs/${job.id}`}
                    className={`${buttonVariants({ variant: "ghost", size: "sm" })} mt-auto w-fit text-white`}
                  >
                    Apply now
                    <ArrowRight width={14} height={14} aria-hidden />
                  </NextLink>
                </Card.Content>
              </Card>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <NextLink
            href="/jobs"
            className={`${buttonVariants({ variant: "primary" })} !bg-white font-medium !text-black`}
          >
            View all open jobs
          </NextLink>
        </div>
      </div>
    </section>
  );
}