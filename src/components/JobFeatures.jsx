// components/JobFeatures.jsx  (HeroUI v3 + Gravity UI icons + Tailwind)
import { Card } from "@heroui/react";
import {
    Magnifier,
    ChartLineArrowUp,
    ChartColumn,
    Bookmark,
    LayoutHeaderCursor,
    FileText,
    NutHex,
    ChartLine,
} from "@gravity-ui/icons";

const features = [
    {
        icon: Magnifier,
        title: "Smart Search",
        description: "Find your ideal job with advanced filters.",
    },
    {
        icon: ChartLineArrowUp,
        title: "Salary Insights",
        description: "Get real salary data to negotiate confidently.",
    },
    {
        icon: ChartColumn,
        title: "Top Companies",
        description: "Apply to vetted companies that are hiring.",
    },
    {
        icon: Bookmark,
        title: "Saved Jobs",
        description: "Manage apps & favorites on your dashboard.",
    },
    {
        icon: LayoutHeaderCursor,
        title: "One-Click Apply",
        description: "Simplify your job applications for an easier process!",
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create professional resumes with modern templates.",
    },
    {
        icon: NutHex,
        title: "Skill-Based Matching",
        description: "Discover jobs that match your skills and experience.",
    },
    {
        icon: ChartLine,
        title: "Career Growth Resources",
        description: "Boost your career with quick interview tips.",
    },
];

export default function JobFeatures({ items = features }) {
    return (
        <section className="bg-[#161616] px-6 py-24 text-white">
            <div>
                {/* Heading */}
                <div className="text-center">
                    <p className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-zinc-300">
                        <span className="h-1.5 w-1.5 bg-indigo-500" aria-hidden />
                        Features Job
                        <span className="h-1.5 w-1.5 bg-indigo-500" aria-hidden />
                    </p>
                    <h2 className="mx-auto mt-4 max-w-sm text-balance text-4xl font-medium leading-tight sm:text-5xl">
                        Everything you need to succeed
                    </h2>
                </div>

                {/* Features grid */}
                <ul className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map(({ icon: Icon, title, description }) => (
                        <li key={title} className="flex items-start gap-4">
                            {/* Icon tile */}
                            <Card className="size-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900 shadow-none">
                                <Card.Content className="flex size-full items-center justify-center p-0">
                                    <Icon
                                        width={20}
                                        height={20}
                                        className="text-fuchsia-300"
                                        aria-hidden
                                    />
                                </Card.Content>
                            </Card>

                            {/* Text */}
                            <div>
                                <h3 className="text-base font-medium">{title}</h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                                    {description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}