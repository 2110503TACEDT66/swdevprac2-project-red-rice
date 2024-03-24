import React from 'react';
import BackBtn from '@/components/adminmanage/backbtn';
import { mockRestaurant } from '@/mock/restaurant';
import Image from 'next/image';
import Instagram from '/public/img/instagram.svg';
import Twitter from '/public/img/twitter.svg';
import { BiPhone } from 'react-icons/bi';

const RestaurantDetailPage = ({ params }: { params: { id: string } }) => {
    const restaurantData = mockRestaurant;

    return (
        <div>
            <header className="flex items-center">
                <BackBtn></BackBtn>
                <h2 className="font-semibold text-2xl">
                    {restaurantData.name}
                </h2>
            </header>
            <main className="py-10 flex justify-center lg:space-x-16 w-screen flex-wrap lg:flex-nowrap lg:px-44 space-y-10 lg:space-y-0">
                <section className="w-full lg:w-1/2">
                    <Image
                        src={restaurantData.image}
                        alt={restaurantData.name}
                        width={527}
                        height={384}
                        className="rounded-2xl"
                    />
                </section>
                <section className="mx-auto rounded-lg p-12 w-full lg:w-1/2 text-lg shadow-lg space-y-10">
                    <section className="space-y-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        <hr className="w-full border-t border-gray-300" />
                        <p>{restaurantData.description}</p>
                        <h2 className="font-semibold text-2xl">Address</h2>
                        <hr className="w-full border-t border-gray-300" />
                        <p>{restaurantData.address}</p>
                        <h2 className="font-semibold text-2xl">Contact</h2>
                        <hr className="w-full border-t border-gray-300" />
                        <section className="space-y-2">
                            <div className="flex space-x-3 items-center">
                                <BiPhone size={24} />
                                <p className="text-wrap">
                                    {restaurantData.phone}
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
                                    {restaurantData.instagram}
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
                                    {restaurantData.facebook}
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
