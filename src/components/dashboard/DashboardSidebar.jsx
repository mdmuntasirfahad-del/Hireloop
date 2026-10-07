"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Avatar } from "@heroui/react";

import {
    SquareChartColumn,
    Factory,
    Briefcase,
    CreditCard,
    Gear,
    LayoutSideContent,
} from "@gravity-ui/icons";

import { useSession } from "@/lib/auth-client";
import { Button, Drawer } from "@heroui/react";


const menuItems = [
    {
        name: "Dashboard",
        href: "/dashboard/recruiter",
        icon: SquareChartColumn,
    },
    {
        name: "My Company",
        href: "/dashboard/recruiter/my-company",
        icon: Factory,
    },
    {
        name: "Manage Jobs",
        href: "/jobs",
        icon: Briefcase,
    },
    {
        name: "Applications",
        href: "/applications",
        icon: CreditCard,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Gear,
    },
];


// ===============================
// Navigation Menu
// ===============================

const MenuItem = ({ pathname }) => (
    <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
            const Icon = item.icon;

            // Check current URL
            const isActive = pathname === item.href;

            return (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`
                        group relative flex h-[53px] items-center gap-5
                        px-2.5
                        transition-colors
                        ${
                            isActive
                                ? "bg-[#29292a] text-white"
                                : "text-[#808080] hover:bg-[#1d1d1e] hover:text-white"
                        }
                    `}
                >

                    {/* Active right border */}
                    {isActive && (
                        <span className="absolute right-0 top-0 h-full w-[4px] bg-white" />
                    )}

                    {/* Icon */}
                    <Icon
                        width={24}
                        height={24}
                        className="shrink-0"
                    />

                    {/* Menu name */}
                    <span className="text-[17px] font-medium">
                        {item.name}
                    </span>

                </Link>
            );
        })}
    </nav>
);


// ===============================
// Logo
// ===============================

const logo = (
    <div className="mb-10 px-0">
        <Link
            href="/"
            className="text-[34px] font-bold tracking-[-1.8px]"
        >
            HireLoop
        </Link>
    </div>
);


// ===============================
// Profile
// ===============================

const profile = (user) => (
    <div className="mb-16">

        <div className="flex items-center gap-3">

            <Avatar
                size="md"
                className="h-11 w-11 shrink-0"
            >
                <Avatar.Image
                    src="/images/profile.jpg"
                    alt={user?.name || "User"}
                />

                <Avatar.Fallback>
                    {user?.name?.charAt(0) || "U"}
                </Avatar.Fallback>
            </Avatar>


            <div>

                <h3 className="text-[17px] font-medium leading-5">
                    {user?.name || user?.email || "User Name"}
                </h3>

                <p className="mt-0.5 text-[14px] text-[#858585]">
                    {user?.role || "User Role"}
                </p>

            </div>

        </div>


        {/* Premium badge */}
        <div className="mt-2.5">

            <span
                className="
                    inline-flex
                    rounded-[4px]
                    border
                    border-[#686868]
                    px-2
                    py-[2px]
                    text-[10px]
                    font-semibold
                    tracking-wide
                    text-[#d6d6d6]
                "
            >
                PREMIUM ACCOUNT
            </span>

        </div>

    </div>
);


// ===============================
// Sidebar
// ===============================

export default function DashboardSidebar() {

    const pathname = usePathname();

    const {
        data: session,
        isPending,
        refetch,
    } = useSession();

    const user = session?.user;


    return (
        <>

            {/* =====================================
                DESKTOP SIDEBAR
            ===================================== */}

            <aside
                className="
                    hidden
                    lg:flex
                    min-h-screen
                    w-[282px]
                    flex-col
                    border-r
                    border-[#1a1a1b]
                    bg-[#111112]
                    px-5
                    py-5
                    text-white
                "
            >

                {/* Logo */}
                {logo}


                {/* Profile */}
                {profile(user)}


                {/* Navigation */}
                <MenuItem pathname={pathname} />

            </aside>


            {/* =====================================
                MOBILE DRAWER
            ===================================== */}

            <Drawer>

                {/* Drawer Button */}

                <Button
                    className="lg:hidden"
                    variant="secondary"
                >
                    <LayoutSideContent />
                    Sidebar
                </Button>


                {/* Drawer */}

                <Drawer.Backdrop>

                    <Drawer.Content placement="left">

                        <Drawer.Dialog>

                            {/* Drawer Close */}

                            <Drawer.CloseTrigger />


                            {/* Drawer Header */}

                            <Drawer.Header>

                                <Drawer.Heading>
                                    {logo}
                                </Drawer.Heading>

                            </Drawer.Header>


                            {/* Drawer Body */}

                            <Drawer.Body>

                                {/* Profile */}
                                {profile(user)}


                                {/* Navigation */}
                                <MenuItem pathname={pathname} />

                            </Drawer.Body>

                        </Drawer.Dialog>

                    </Drawer.Content>

                </Drawer.Backdrop>

            </Drawer>

        </>
    );
}