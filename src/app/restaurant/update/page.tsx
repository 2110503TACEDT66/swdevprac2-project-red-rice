import React from 'react';
import BackBtn from '@/components/adminmanage/backbtn';
import { mockRestaurant } from '@/mock/restaurant';
import { BiPencil } from 'react-icons/bi';
import Image from 'next/image';

const CreateReservationPage = () => {
    const restaurantData = mockRestaurant;
    return (
        <div>
            <header className="flex items-center">
                <BackBtn></BackBtn>
                <h2 className="font-semibold text-2xl">
                    Edit {restaurantData.name}
                </h2>
            </header>
            <main className="px-44 py-10 flex space-x-16">
                <section className="w-1/2">
                    <div className="relative w-[527px] h-[384px] rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gray-500 opacity-80 flex items-center justify-center z-10">
                            <BiPencil size={48} className="text-white" />
                        </div>
                        <Image
                            src={restaurantData.image}
                            alt={restaurantData.name}
                            layout="fill" 
                            className="rounded-2xl"
                        />
                    </div>
                </section>
                <section className="rounded-lg p-12 space-y-40 w-1/2 text-lg shadow-lg">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="restaurantName"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                Restaurant Name
                            </label>
                            <input
                                type="text"
                                id="restaurantName"
                                name="restaurantName"
                                placeholder="e.g. Mo-Mo-Paradise"
                                className="bg-gray-50 border-2 font-light text-md border-gray-500 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="address"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                placeholder="eg. Lu Lu พระรามได้ (ไทยดี) สาขา CentralWorld (ชั้น 7) 7th Fl., 999/9 Rama I Road, Pathumwan, Pathumwan, Bangkok 10330, Thailand"
                                className="bg-gray-50 border-2 font-light text-md border-gray-500 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label
                                htmlFor="telephone"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                Telephone
                            </label>
                            <input
                                type="tel"
                                id="telephone"
                                name="telephone"
                                placeholder="e.g. 0922698678"
                                className="bg-gray-50 border-2 font-light text-md border-gray-500 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="openTime"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                Open Time
                            </label>
                            <input
                                type="time"
                                id="openTime"
                                name="openTime"
                                placeholder="e.g. 13:00"
                                className="bg-gray-50 border-2 font-light text-md border-gray-500 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="closeTime"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                Close Time
                            </label>
                            <input
                                type="time"
                                id="closeTime"
                                name="closeTime"
                                placeholder="e.g. 2:00 am"
                                className="bg-gray-50 border-2 font-light text-md border-gray-500 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                            />
                        </div>
                    </div>
                    <button className="bg-redrice-blue px-5 py-3 text-white font-semibold rounded-3xl text-xl w-1/2">
                        Edit Restaurant
                    </button>
                </section>
            </main>
        </div>
    );
};

export default CreateReservationPage;
