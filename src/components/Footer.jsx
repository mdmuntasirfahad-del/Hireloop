import Link from "next/link";
import { LogoGithub } from '@gravity-ui/icons';
import { LogoLinkedin } from '@gravity-ui/icons';
import { LogoFacebook } from '@gravity-ui/icons';
import Logo from "./Logo";

const productLinks = [
    {
        name: "Job Discovery",
        href: "/jobs",
    },
    {
        name: "Worker AI",
        href: "/worker-ai",
    },
    {
        name: "Companies",
        href: "/companies",
    },
    {
        name: "Salary Data",
        href: "/salary-data",
    },
];

const navigationLinks = [
    {
        name: "Help Center",
        href: "/help",
    },
    {
        name: "Career Library",
        href: "/career-library",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

const resourceLinks = [
    {
        name: "Brand Guideline",
        href: "/brand-guideline",
    },
    {
        name: "Newsroom",
        href: "/newsroom",
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505] text-white">

            {/* ================= BACKGROUND ================= */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.18]"
                aria-hidden="true"
            >
                <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
                        backgroundSize: "45px 45px",
                        maskImage:
                            "radial-gradient(ellipse at top, black 0%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at top, black 0%, transparent 70%)",
                    }}
                />
            </div>

            {/* ================= FOOTER CONTENT ================= */}
            <div className="relative mx-auto max-w-[1680px] px-6 pb-8 pt-16 sm:px-8 lg:px-10">

                {/* ================= TOP SECTION ================= */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

                    {/* ================= BRAND ================= */}
                    <div className="max-w-sm">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold tracking-tight"
                        >
                            {/* <span className="text-[#0085ff]">hire</span>
                            <span className="text-[#ff7200]">loop</span> */}
                            <Logo />
                        </Link>

                        {/* Description */}
                        <p className="mt-5 max-w-[270px] text-sm leading-6 text-white/40">
                            The AI-native career platform built for people who take their
                            careers seriously.
                        </p>
                    </div>

                    {/* ================= PRODUCT ================= */}
                    <div>
                        <h3 className="text-sm font-medium text-white/70">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/40 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================= NAVIGATION ================= */}
                    <div>
                        <h3 className="text-sm font-medium text-white/70">
                            Navigations
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/40 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================= RESOURCES ================= */}
                    <div>
                        <h3 className="text-sm font-medium text-white/70">
                            Resources
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {resourceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/40 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ================= BOTTOM SECTION ================= */}
                <div className="mt-16 flex flex-col gap-6 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    {/* Social Links */}
                    <div className="flex items-center gap-2">

                        {/* Facebook */}
                        <Link
                            href="#"
                            aria-label="Facebook"
                            className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white"
                        >
                            <LogoFacebook></LogoFacebook>

                        </Link>

                        {/* Instagram */}
                        <Link
                            href="#"
                            aria-label="Github"
                            className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/20 text-indigo-400 transition-all hover:bg-indigo-500/30 hover:text-indigo-300"
                        >
                            <LogoGithub></LogoGithub>

                        </Link>

                        {/* LinkedIn */}
                        <Link
                            href="#"
                            aria-label="LinkedIn"
                            className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white"
                        >
                            <LogoLinkedin></LogoLinkedin>
                        </Link>
                    </div>

                    {/* Copyright + Legal */}
                    <div className="flex flex-col gap-2 text-sm text-white/30 sm:flex-row sm:items-center sm:gap-5">

                        <p>
                            Copyright {new Date().getFullYear()} — Hireloop
                        </p>

                        <span className="hidden text-white/10 sm:block">
                            |
                        </span>

                        <Link
                            href="/terms"
                            className="transition-colors hover:text-white/60"
                        >
                            Terms &amp; Policy
                        </Link>

                        <span className="hidden text-white/10 sm:block">
                            -
                        </span>

                        <Link
                            href="/privacy"
                            className="transition-colors hover:text-white/60"
                        >
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}