'use client';

import React from 'react';
import Link from 'next/link';
import { Chip, Table } from '@heroui/react';

const defaultApplications = [
    { id: 1, name: 'Julianne Moore', role: 'Senior Product Designer', date: 'Oct 24, 2023', experience: '6 years', status: 'Interviewing' },
    { id: 2, name: 'Robert Downey', role: 'Backend Engineer', date: 'Oct 23, 2023', experience: '4 years', status: 'New' },
    { id: 3, name: 'Emma Stone', role: 'Marketing Lead', date: 'Oct 22, 2023', experience: '8 years', status: 'Reviewing' },
    { id: 4, name: 'Chris Pratt', role: 'Product Manager', date: 'Oct 21, 2023', experience: '5 years', status: 'Rejected' },
];

const statusStyles = {
    Interviewing: { color: 'success', className: 'border border-success/40' },
    New: { color: 'default', className: 'border border-border' },
    Reviewing: { color: 'warning', className: 'border border-warning/40' },
    Rejected: { color: 'danger', className: 'border border-danger/40' },
};

const columns = [
    { id: 'name', name: 'Candidate Name', className: '' },
    { id: 'role', name: 'Role', className: '' },
    { id: 'date', name: 'Date Applied', className: '' },
    { id: 'experience', name: 'Experience', className: 'text-center' },
    { id: 'status', name: 'Status', className: '' },
];

export const RecentApplications = ({
    applications = defaultApplications,
    viewAllHref = '/dashboard/applications',
}) => {
    return (
        <section className="w-full min-w-0">
            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-foreground">Recent Applications</h2>
                <Link href={viewAllHref} className="text-sm text-foreground hover:underline">
                    View all
                </Link>
            </div>

            {/* Table */}
            <Table className="rounded-2xl border border-border overflow-hidden">
                <Table.ScrollContainer>
                    <Table.Content aria-label="Recent applications" className="min-w-[700px]">
                        <Table.Header className="bg-surface-secondary border-b border-border">
                            {columns.map((col) => (
                                <Table.Column
                                    key={col.id}
                                    id={col.id}
                                    isRowHeader={col.id === 'name'}
                                    className={`text-sm font-medium text-muted py-6 ${col.className}`}
                                >
                                    {col.name}
                                </Table.Column>
                            ))}
                        </Table.Header>

                        <Table.Body>
                            <Table.Collection items={applications}>
                                {(app) => {
                                    const status = statusStyles[app.status] ?? statusStyles.New;
                                    return (
                                        <Table.Row className="h-[108px] border-b border-border last:border-b-0">
                                            <Table.Cell>
                                                <div className="flex items-center gap-4">
                                                    <div className="h-9 w-9 shrink-0 rounded-full bg-surface-tertiary border border-border" />
                                                    <span className="font-semibold text-foreground">{app.name}</span>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell className="text-muted">{app.role}</Table.Cell>
                                            <Table.Cell className="text-muted">{app.date}</Table.Cell>
                                            <Table.Cell className="text-center text-muted">{app.experience}</Table.Cell>
                                            <Table.Cell>
                                                <Chip
                                                    color={status.color}
                                                    size="sm"
                                                    variant="soft"
                                                    className={status.className}
                                                >
                                                    {app.status}
                                                </Chip>
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                }}
                            </Table.Collection>
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </section>
    );
}