import React from 'react';
import CardPanel from '@/components/adminmanage/cardpanel';
import SubBar from '@/components/subbar';

export default function AdminManage() {
    return (
        <main className="pl-12 pr-10 w-full h-auto overflow-y-auto">
            <SubBar text="User Management"/>
            <CardPanel />
        </main>
    );
}
