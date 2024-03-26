'use client';
import React from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import { useSession } from 'next-auth/react';
import { getAllRestaurant } from '@/lib/restaurant';
import Restaurant from '@/types/restaurant';
import { useEffect, useState } from 'react';

const Restaurants = () => {
    const { data: session } = useSession();
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const fetchRestaurants = async () => {
            if (session?.user.token) {
                const fetchedRestaurants = await getAllRestaurant(
                    session.user.token
                );
                setRestaurants(fetchedRestaurants);
            }
        };
        fetchRestaurants();
    }, [session]);

    return (
        <div className="mt-5 md:mt-14 h-2/3 max-h-[550px] overflow-x-scroll ring-2 ring-slate-200 rounded-xl p-5 flex flex-row">
            {restaurants?.map((res: Restaurant) => ( 
                <RestaurantCard
                    key={res.ID}
                    name={res.name}
                    imageUrl={res.imageUrl}
                    ID={res.ID}
                    openTime={res.openTime}
                    closeTime={res.closeTime}
                />
            ))}
        </div>
    );
};

export default Restaurants;
