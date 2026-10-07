'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card } from '@heroui/react';
import { Cube, Thunderbolt } from '@gravity-ui/icons';

// For companies with a logo, pass `logo` (image URL). Otherwise pass `Icon`.
const defaultCompanies = [
    { id: 1, name: 'Google Inc.', meta: 'Technology • Mountain View', jobs: 24, logo: '/logos/google.png' },
    { id: 2, name: 'Meta Platforms', meta: 'Social Media • Menlo Park', jobs: 18, logo: '/logos/meta.png' },
    { id: 3, name: 'Stripe', meta: 'Fintech • San Francisco', jobs: 12, Icon: Cube },
    { id: 4, name: 'Tesla', meta: 'Automotive • Austin', jobs: 31, Icon: Thunderbolt },
];

function CompanyLogo({ name, logo, Icon }) {
    return (
        <div className="h-12 w-12 shrink-0 rounded-lg bg-surface-secondary border border-border flex items-center justify-center overflow-hidden">
            {logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logo} alt={`${name} logo`} className="h-8 w-8 rounded object-cover" />
            ) : Icon ? (
                <Icon className="text-xl text-foreground" />
            ) : null}
        </div>
    );
}

export default function TopCompanies({
    companies = defaultCompanies,
    viewAllHref = '/dashboard/companies',
}) {
    return (
        <section className="w-full min-w-0">
            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-foreground">My Top Companies</h2>
                <Link href={viewAllHref} className="text-sm text-foreground hover:underline">
                    View all
                </Link>
            </div>

            {/* Card */}
            <Card className="rounded-2xl border border-border p-6">
                <ul className="flex flex-col gap-10 px-3 py-4">
                    {companies.map(({ id, name, meta, jobs, logo, Icon }) => (
                        <li key={id} className="flex items-center gap-6">
                            <CompanyLogo name={name} logo={logo} Icon={Icon} />

                            <div className="min-w-0 flex-1">
                                <p className="font-semibold text-foreground truncate">{name}</p>
                                <p className="text-xs text-muted truncate">{meta}</p>
                            </div>

                            <div className="text-right shrink-0">
                                <p className="text-lg font-bold text-foreground leading-tight">{jobs}</p>
                                <p className="text-[10px] font-semibold uppercase text-muted">Active jobs</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <Button
                    as={Link}
                    href={viewAllHref}
                    variant="outline"
                    className="w-full mt-2 font-medium"
                >
                    View All Companies
                </Button>
            </Card>
        </section>
    );
}