"use client";
import React from 'react';
import { useSession } from '@/lib/auth-client';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { FileText, Persons, Thunderbolt, CircleCheck } from "@gravity-ui/icons";
import { RecentApplications } from '@/components/dashboard/RecentApplications';
import TopCompanies from '@/components/dashboard/TopCompanies';


const RecruiterDashboardHomePage = () => {

    const { data: session, isPending } = useSession();

    if (isPending) {
        return <div>Loading...</div>;
    }

    const user = session?.user;

    const recruiterStats = [
        { id: 'total-jobs', title: 'Total Job Posts', value: '48', icon: FileText },
        { id: 'total-applicants', title: 'Total Applicants', value: '1,284', icon: Persons },
        { id: 'active-jobs', title: 'Active Jobs', value: '18', icon: Thunderbolt },
        { id: 'jobs-closed', title: 'Jobs Closed', value: '32', icon: CircleCheck },
    ];

    return (
        <div className="p-8">
            <h1 className='text-4xl '>Welcome back, {user?.name || user?.email}</h1>
            <DashboardStats statsData={recruiterStats}></DashboardStats>

            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 p-4 md:p-6 bg-background">

                <RecentApplications></RecentApplications>
                <TopCompanies></TopCompanies>

            </div>

        </div>
    );
};

export default RecruiterDashboardHomePage;