import React from 'react';
import CardPanel from '@/components/adminmanage/cardpanel';
import SubBar from '@/components/subbar';
import { getusers } from '@/lib/auth';
import { getServerSession } from "next-auth"
import { authOptions } from '@/utils/authOption';
export default async function AdminManage() {
    const session =await getServerSession(authOptions)
    if(!session || !session.user.token){
        return null
    }
    const data =await getusers(session.user.token)
    console.log(data)
    return (
        <main className="pl-12 pr-10 w-full h-auto overflow-y-auto">
            <SubBar text="User Management"/>
            <CardPanel data={data}/>
        </main>
    );
}
