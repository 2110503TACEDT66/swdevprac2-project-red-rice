import React from 'react';
import Restaurants from '@/components/Restaurants';
import { FaPlus } from 'react-icons/fa';
import Searchbox from '@/components/Searchbox';

const page = () => {
    return (
        <main className="pl-12 pr-10 w-full h-screen overflow-y-auto">
            <div className="flex justify-between items-center flex-wrap">
                <div className="flex flex-row gap-4">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        Choose Restaurant
                    </h1>
                    <button className="rounded-full p-3 bg-redrice-yellow hover:bg-redrice-light-yellow text-white">
                        <FaPlus />
                    </button>
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
