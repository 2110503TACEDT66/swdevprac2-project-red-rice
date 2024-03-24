import React from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import { getServerSession } from 'next-auth';
import { getAllRestaurant } from '@/lib/restaurant';
const Restaurants = async () => {
    const session = await getServerSession();
    const restaurants = await getAllRestaurant(session?.user.token ?? '');
    return (
        <div className="mt-5 md:mt-14 h-2/3 max-h-[550px] overflow-x-scroll ring-2 ring-slate-200 rounded-xl p-5 flex flex-row">
            {restaurants.map((res: any) => (
                <RestaurantCard key={res.id} name = {res.name} imageUrl={res.imageUrl} id = {res.id}/>
            ))}
        </div>
    );
};

export default Restaurants;
