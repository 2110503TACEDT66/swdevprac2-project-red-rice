'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { getme } from '@/lib/auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { deleteRestaurant } from '@/lib/restaurant';
import { CircularProgress } from '@mui/material';

interface RestaurantCardProps {
    ID: any;
    name: string;
    imageUrl: string;
    openTime: string;
    closeTime: string;
}

const RestaurantCard = ({
    ID,
    name,
    imageUrl,
    openTime,
    closeTime,
}: RestaurantCardProps) => {
    const [userRole, setUserRole] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [deleted, setDeleted] = useState(false);

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

    const handleDelete = async () => {
        if (!session?.user.token) return;

        try {
            await deleteRestaurant(ID, session.user.token);
            setDeleted(true);
        } catch (error) {
            console.error('Failed to delete restaurant:', error);
        }
    };

    if (deleted) {
        return null;
    }

    if (!session) {
        return (
            <div className="h-[700px] flex justify-center items-center">
                <CircularProgress />
            </div>
        );
    }

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
                    <p className="text-md text-slate-500">
                        {openTime}-{closeTime}
                    </p>
                </div>
                <div className="mt-auto mb-4 flex justify-between items-center">
                    <Rating name="read-only" value={5} readOnly />
                    <div className="space-x-1 items-center flex justify-center">
                        <button className="px-4 py-1 bg-redrice-yellow hover:bg-redrice-light-yellow text-white font-semibold rounded-md">
                            <Link href={`/restaurant/detail/${ID}`}>
                                Detail
                            </Link>
                        </button>
                        {userRole === 'admin' && (
                            <div>
                                <Link href={`/restaurant/update/${ID}`}>
                                    <button className="rounded-full p-1 bg-redrice-blue text-white hover:bg-blue-400">
                                        <MdEdit />
                                    </button>
                                </Link>
                                <button
                                    className="rounded-full p-1 bg-redrice-red text-white hover:bg-red-400"
                                    onClick={handleDelete}
                                >
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
