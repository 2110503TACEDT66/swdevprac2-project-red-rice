import React from 'react';
import RestaurantCard from '@/components/RestaurantCard';

const Restaurants = () => {
    return (
        <div className="mt-5 md:mt-14 h-2/3 max-h-[550px] overflow-x-scroll ring-2 ring-slate-200 rounded-xl p-5 flex flex-row">
            {Array.from({ length: 10 }).map((_, index) => (
                <RestaurantCard key={index} />
            ))}
        </div>
    );
};

export default Restaurants;
