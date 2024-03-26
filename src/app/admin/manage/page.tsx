import React from 'react';
import CardPanel from '@/components/adminmanage/cardpanel';
import SubBar from '@/components/subbar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOption';
import { getusers } from '@/lib/auth';
import { CircularProgress } from '@mui/material';

export default async function AdminManage() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) {
        return null;
    }
    const profile = await getusers(session.user.token);

    if (!session || !session.user.token) {
        return (
            <div className="pl-12 pr-10 w-full h-screen overflow-y-auto">
                <div className="h-[700px] flex justify-center items-center">
                    <CircularProgress />
                </div>
            </div>
        );
    }

    return (
        <main className="pl-12 pr-10 w-full h-auto overflow-y-auto">
            <div className="w-[50%] relative">
                <SubBar text="User Management" />
            </div>
            <CardPanel data={profile} />
        </main>
    );
}
