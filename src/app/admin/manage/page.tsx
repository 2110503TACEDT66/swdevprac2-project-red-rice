import React from 'react';
import CardPanel from '@/components/adminmanage/cardpanel';
import SubBar from '@/components/subbar';
import { getServerSession } from "next-auth"
import { authOptions } from '@/utils/authOption';
import { getusers } from '@/lib/auth';

export default async function AdminManage() {

    const session =await getServerSession(authOptions)
    if(!session || !session.user.token){
        return null
    }
    const profile =await getusers(session.user.token)
    return (
        <main className="pl-12 pr-10 w-full h-auto overflow-y-auto">
            <div className='w-[50%] relative left-[8%] '>
            <SubBar text="User Management" />
            </div>
            <CardPanel data={profile} />
        </main>
    );
}
