import React from 'react';
import CardPanel from '@/components/adminmanage/cardpanel';
import SubBar from '@/components/adminmanage/subbar/subbar';
import Footer from '@/components/adminmanage/footer/footer';
export default function AdminManage() {
    return (
        <main className="w-full h-full relative top-[20px] justify-center overflox-x-hidden">
            <SubBar />
            <CardPanel />
            <Footer />
        </main>
    );
}
