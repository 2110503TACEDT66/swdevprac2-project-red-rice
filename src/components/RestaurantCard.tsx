'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { getme } from '@/lib/auth';
import { getOneRestaurant } from '@/lib/restaurant';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface RestaurantCardProps {
    ID: any;
    name: string;
    imageUrl: string;
}

const RestaurantCard = ({ ID, name, imageUrl }: RestaurantCardProps) => {
    const [userRole, setUserRole] = useState('');
    const [restaurant, setRestaurant] = useState([]);

    const { data: session } = useSession();

    useEffect(() => {
        const fetchUsers = async () => {
            if (session?.user.token) {
                const user = await getme(session.user.token);
                setUserRole(user.role);
            }
        };
        fetchUsers();
    }, [session]);

    // useEffect(() => {
    //     const fetchRestaurant = async () => {
    //         if (session?.user.token) {
    //             const fetchRestaurant = await getOneRestaurant(ID,session.user.token);
    //             setRestaurant(fetchRestaurant.ID);
    //         }
    //     };
    //     fetchRestaurant();
    // }, [session]);

    return (
        <div
            key={ID}
            className="flex p-2 border-2 rounded-xl mx-2 w-1/2 flex-col shadow-md px-0"
            style={{ minWidth: '300px', maxWidth: '600px' }}
        >
            <div className="h-[300px]">
                <Image
                    src={imageUrl}
                    alt="restaurant"
                    width={500}
                    height={500}
                    className="object-center object-fill py-2 w-full h-[300px]"
                />
            </div>

            <div className="mx-4 flex flex-col justify-between h-full">
                <div>
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p className="text-md text-slate-500">OpenTime-CloseTime</p>
                </div>
                <div className="mt-auto mb-4 flex justify-between items-center">
                    <Rating name="read-only" value={5} readOnly />
                    <div className="space-x-1 items-center flex justify-center">
                        <button className="px-4 py-1 bg-redrice-yellow hover:bg-redrice-light-yellow text-white font-semibold rounded-md">
                            <Link href={`/restaurant/detail/${ID}`}>Detail</Link>
                        </button>
                        {userRole === 'admin' && (
                            <div>
                                <button className="rounded-full p-1 bg-redrice-blue text-white hover:bg-blue-400">
                                    <MdEdit />
                                </button>
                                <button className="rounded-full p-1 bg-redrice-red text-white hover:bg-red-400">
                                    <RiDeleteBin5Fill />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
