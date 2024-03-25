'use client';
import React, { useEffect, useState } from 'react';
import { mockRestaurant } from '@/mock/restaurant';
import Image from 'next/image';
import Instagram from '/public/img/instagram.svg';
import Twitter from '/public/img/twitter.svg';
import { BiPhone } from 'react-icons/bi';
import { getOneRestaurant } from '@/lib/restaurant';
import { useSession } from 'next-auth/react';
import Restaurant from '@/types/restaurant';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';

const RestaurantDetailPage = ({ params }: { params: { id: string } }) => {
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

    const { data: session } = useSession();

    useEffect(() => {
        const fetchRestaurant = async () => {
            if (session?.user.token) {
                const fetchRestaurant = await getOneRestaurant(
                    params.id,
                    session.user.token
                );
                setRestaurant(fetchRestaurant);
            }
        };
        fetchRestaurant();
    }, [session]);

    console.log(restaurant);
    return (
        <div>
            {restaurant ? (
                <main className="pl-12 pr-10 w-full h-screen overflow-y-auto">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        {restaurant?.name}
                    </h1>
                    <div className="w-full lg:gap-10 flex flex-row items-center flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0">
                            <Image
                                src={
                                    restaurant?.imageUrl ||
                                    '/img/downloadPic.jpeg'
                                }
                                alt={restaurant?.name || 'Restaurant Image'}
                                width={527}
                                height={384}
                                className="rounded-2xl"
                            />
                        </div>
                        <section className="rounded-[1rem] p-5 md:p-10 w-full lg:w-1/2 text-lg shadow-lg border-2 mt-6 lg:mt-0 mb-6 lg:min-h-[600px]">
                            <section className="space-y-2 md:space-y-4">
                                <h2 className="font-semibold text-md md:text-2xl">
                                    Description
                                </h2>
                                <hr className="w-full border-t border-gray-300" />
                                <p className="text-sm md:text-lg">
                                    {restaurant?.description}
                                </p>
                                <h2 className="font-semibold text-md md:text-2xl">
                                    Address
                                </h2>
                                <hr className="w-full border-t border-gray-300" />
                                <p className="text-sm md:text-lg">
                                    {restaurant?.address}
                                </p>
                                <h2 className="font-semibold text-md md:text-2xl">
                                    Contact
                                </h2>
                                <hr className="w-full border-t border-gray-300" />
                                <section className="space-y-2">
                                    <div className="flex space-x-3 items-center">
                                        <BiPhone size={24} />
                                        <p className="text-sm md:text-lg">
                                            {restaurant?.telephone}
                                        </p>
                                    </div>
                                    <div className="flex space-x-3">
                                        <Image
                                            src={Instagram}
                                            alt="instagram-icons"
                                            width={24}
                                            height={24}
                                        />
                                        <p className="text-sm md:text-lg">
                                            {restaurant?.instagram}
                                        </p>
                                    </div>
                                    <div className="flex space-x-3">
                                        <Image
                                            src={Twitter}
                                            alt="twitter-icons"
                                            width={24}
                                            height={24}
                                        />
                                        <p className="text-sm md:text-lg">
                                            {restaurant?.facebook}
                                        </p>
                                    </div>
                                </section>
                            </section>
                            <div className="flex justify-center">
                                <button className="bg-redrice-yellow hover:bg-redrice-light-yellow px-5 py-3 text-white font-semibold rounded-3xl text-xl w-full lg:w-1/2 mt-8">
                                    <Link href={`/restaurant/reservation/create/${restaurant?.ID}`}>
                                        Book Reservation
                                    </Link>
                                </button>
                            </div>
                        </section>
                    </div>
                </main>
            ) : (
                <div className="h-[700px] flex justify-center items-center">
                    <CircularProgress />
                </div>
            )}
        </div>
    );
};

export default RestaurantDetailPage;
