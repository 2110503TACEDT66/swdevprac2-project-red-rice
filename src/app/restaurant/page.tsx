'use client';
import React, { useEffect, useState } from 'react';
import Restaurants from '@/components/Restaurants';
import { FaPlus } from 'react-icons/fa';
import Searchbox from '@/components/Searchbox';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { getme } from '@/lib/auth';

const page = () => {
    const [userRole, setUserRole] = useState('');

    const { data: session } = useSession();

    useEffect(() => {
        const fetchRestaurants = async () => {
            if (session?.user.token) {
                const user = await getme(session.user.token);
                setUserRole(user.role);
            }
        };
        fetchRestaurants();
    }, [session]);
    
    return (
        <main className="pl-12 pr-10 w-full h-screen overflow-y-auto">
            <div className="flex justify-between items-center flex-wrap">
                <div className="flex flex-row gap-4">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        Choose Restaurant
                    </h1>
                    {userRole === 'admin' && (
                        <button className="rounded-full p-3 bg-redrice-yellow hover:bg-redrice-light-yellow text-white">
                            <Link href="/restaurant/create">
                                <FaPlus />
                            </Link>
                        </button>
                    )}
                </div>
                <div className="mt-3 md:mt-0 w-full md:w-1/3">
                    <Searchbox />
                </div>
            </div>

            <Restaurants />
        </main>
    );
};

export default page;
