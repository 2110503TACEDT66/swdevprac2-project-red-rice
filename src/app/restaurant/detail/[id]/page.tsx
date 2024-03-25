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
            <header className="flex items-center">
                <h2 className="font-semibold text-2xl">{restaurant?.name}</h2>
            </header>
            <main className="py-10 flex justify-center lg:space-x-16 w-screen flex-wrap lg:flex-nowrap lg:px-44 space-y-10 lg:space-y-0">
                <section className="w-full lg:w-1/2">
                    <Image
                        src={restaurant?.imageUrl || '/img/restaurant.png'}
                        alt={restaurant?.name || 'Restaurant Image'}
                        width={527}
                        height={384}
                        className="rounded-2xl"
                    />
                </section>
                <section className="mx-auto rounded-lg p-12 w-full lg:w-1/2 text-lg shadow-lg space-y-10">
                    <section className="space-y-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        <hr className="w-full border-t border-gray-300" />
                        <p>{restaurant?.description}</p>
                        <h2 className="font-semibold text-2xl">Address</h2>
                        <hr className="w-full border-t border-gray-300" />
                        <p>{restaurant?.address}</p>
                        <h2 className="font-semibold text-2xl">Contact</h2>
                        <hr className="w-full border-t border-gray-300" />
                        <section className="space-y-2">
                            <div className="flex space-x-3 items-center">
                                <BiPhone size={24} />
                                <p className="text-wrap">
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
                                <p className="text-wrap">
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
                                <p className="text-wrap">
                                    {restaurant?.facebook}
                                </p>
                            </div>
                        </section>
                    </section>
                    <button className="bg-redrice-yellow px-6 py-4 text-white font-semibold rounded-2xl text-xl">
                        Book Reservation
                    </button>
                </section>
            </main>
        </div>
    );
};

export default RestaurantDetailPage;
