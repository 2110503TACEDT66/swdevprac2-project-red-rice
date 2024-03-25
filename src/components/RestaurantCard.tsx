import React from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';
interface RestaurantCardProps {
    id: string;
    name: string;
    imageUrl: string;
}

const RestaurantCard = ({id, name, imageUrl} : RestaurantCardProps) => {
    return (
        <div
            key={id}
            className="flex p-2 border-2 rounded-xl mx-2 w-1/2 flex-col shadow-md px-0"
            style={{ minWidth: '300px', maxWidth: '600px' }}
        >
            <Image
                src={imageUrl}
                alt="restaurant"
                width={500}
                height={500}
                className="object-cover py-2"
            />
            <div className="mx-4 flex flex-col justify-between h-full">
                <div>
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p className="text-md text-slate-500">OpenTime-CloseTime</p>
                </div>
                <div className="mt-auto mb-4 flex justify-between items-center">
                    <Rating name="read-only" value={5} readOnly />
                    <div className="space-x-1 items-center flex justify-center">
                        <button className="px-4 py-1 bg-redrice-yellow hover:bg-redrice-light-yellow text-white font-semibold rounded-md">
                            Detail
                        </button>
                        <button className="rounded-full p-1 bg-redrice-blue text-white hover:bg-blue-400">
                            <MdEdit />
                        </button>
                        <button className="rounded-full p-1 bg-redrice-red text-white hover:bg-red-400">
                            <RiDeleteBin5Fill />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
