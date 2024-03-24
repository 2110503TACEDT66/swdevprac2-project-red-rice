'use client';
import React from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import { getAllRestaurant } from '@/lib/restaurant';
import { useSession } from 'next-auth/react';

const Restaurants = () => {
    const session = useSession();
    if (session) {
        console.log(session);
    }
    return (
        <div className="mt-5 md:mt-14 h-2/3 max-h-[550px] overflow-x-scroll ring-2 ring-slate-200 rounded-xl p-5 flex flex-row">
            {Array.from({ length: 10 }).map((_, index) => (
                <RestaurantCard key={index} />
            ))}
        </div>
    );
};

export default Restaurants;
