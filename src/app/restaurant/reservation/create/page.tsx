import React from 'react';
import BackBtn from '@/components/adminmanage/backbtn';
import { mockRestaurant } from '@/mock/restaurant';
import Image from 'next/image';
import Instagram from '/public/img/instagram.svg';
import Twitter from '/public/img/twitter.svg';
import { BiPhone } from 'react-icons/bi';

const CreateReservationPage = () => {
    const restaurantData = mockRestaurant;
    return (
        <div>
            <header className="flex items-center">
                <BackBtn></BackBtn>
                <h2 className="font-semibold text-2xl">
                    Book a Table at {restaurantData.name}
                </h2>
            </header>
            <main className="px-44 py-10 flex space-x-16">
                <section className="rounded-lg p-12 space-y-40 w-1/2 text-lg">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="tableNumber"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                Number of Table
                            </label>
                            <input
                                type="text"
                                id="tableNumber"
                                name="tableNumber"
                                placeholder="e.g. 4"
                                className="bg-gray-50 border-2 font-light text-md border-gray-500 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-3/4 px-3 py-1"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="arrivalTime"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                When will you come?
                            </label>
                            <input
                                type="time"
                                id="arrivalTime"
                                name="arrivalTime"
                                className="bg-gray-50 border-2 font-light text-md border-gray-500 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-3/4 px-3 py-1"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="leaveTime"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                When you expect to leave?
                            </label>
                            <input
                                type="time"
                                id="leaveTime"
                                name="leaveTime"
                                className="bg-gray-50 border-2 font-light text-md border-gray-500 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-3/4 px-3 py-1"
                                required
                            />
                        </div>
                    </div>
                    <button className="bg-redrice-yellow px-5 py-4 text-white font-semibold rounded-2xl text-2xl w-3/4">
                        Reserve
                    </button>
                </section>
                <section className="w-1/2">
                    <Image
                        src={restaurantData.image}
                        alt={restaurantData.name}
                        width={527}
                        height={384}
                        className="rounded-2xl"
                    />
                </section>
            </main>
        </div>
    );
};

export default CreateReservationPage;
