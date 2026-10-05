"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const navLinks = [
    {
        name: "Browse Jobs",
        href: "/jobs",
    },
    {
        name: "Company",
        href: "/company",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending, refetch } = useSession(); // Placeholder for future session handling
    const user = session?.user; // Assuming the session object has a user property
    console.log("User data:", user);
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    console.log("User signed out successfully.");
                    router.push('/auth/signin'); // Redirect to sign-in page after sign-out
                }
            }
        });
        refetch(); // Refresh the session state after signing out
    }


    return (
        <nav className="sticky top-0 z-50 w-full bg-black px-4 py-3 sm:px-6 lg:px-8">
            <header className="mx-auto flex h-[72px] max-w-[1680px] items-center justify-between rounded-2xl bg-[#242424] px-5 sm:px-7">

                {/* ================= LOGO ================= */}
                <Link
                    href="/"
                    className="shrink-0 text-3xl font-bold tracking-tight"
                >
                    {/* <span className="text-[#0085ff]">hire</span>
          <span className="text-[#ff7200]">loop</span> */}

                    <Logo></Logo>
                </Link>

                {/* ================= DESKTOP MENU ================= */}
                <div className="hidden items-center gap-10 md:flex">

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-[16px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Separator */}
                    <span
                        className="h-8 w-px bg-white/20"
                        aria-hidden="true"
                    />

                    {/* Sign In */}
                    {
                        user ? <>

                            Hi, {user.name || user.email} ! <br />
                            <Button onClick={handleSignOut} variant="outline">
                                Sign Out
                            </Button>
                        </> : <Link
                            href="/auth/signin"
                            className="text-[17px] font-medium text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
                        >
                            Sign In
                        </Link>
                    }

                    {/* Get Started */}
                    <Link
                        href="/get-started"
                        className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-7 py-3 text-[16px] font-medium text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-indigo-500/30"
                    >
                        Get Started
                    </Link>
                </div>

                {/* ================= MOBILE MENU BUTTON ================= */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
                >
                    <span className="sr-only">
                        {isMenuOpen ? "Close menu" : "Open menu"}
                    </span>

                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </header>

            {/* ================= MOBILE MENU ================= */}
            {isMenuOpen && (
                <div className="mx-auto mt-2 max-w-[1680px] rounded-2xl bg-[#242424] md:hidden">
                    <ul className="flex flex-col gap-1 p-4">

                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        <li
                            className="my-2 h-px bg-white/10"
                            aria-hidden="true"
                        />
                        {
                            user ? <>

                                Hi, {user.name || user.email} ! <br />
                                <Button onClick={handleSignOut} variant="outline" className="block w-full rounded-xl px-4 py-3 font-medium text-indigo-400 transition-colors hover:bg-white/10">
                                    Sign Out
                                </Button>
                            </> : <Link
                                href="/auth/signin"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full rounded-xl px-4 py-3 font-medium text-indigo-400 transition-colors 
                                text-center hover:bg-white/10"
                            >
                                Sign In
                            </Link>
                        }

                        <li>

                        </li>

                        <li>
                            <Link
                                href="/get-started"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-1 block rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-center font-medium text-white"
                            >
                                Get Started
                            </Link>
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
}