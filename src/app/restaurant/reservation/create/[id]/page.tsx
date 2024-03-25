'use client';
import React, { useState, useEffect } from 'react';
import { mockRestaurant } from '@/mock/restaurant';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ConfirmReserve from '@/components/ConfirmReserve';
import { getRestaurantById } from '@/lib/restaurant';
import { createReservation } from '@/lib/reservation';
import { createReservationRequest } from '@/lib/reservation';

const CreateReservationPage = ({params} : {params : {id : string}}) => {
    
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { data: session } = useSession();
    const [restaurantData, setRestaurantData] = useState<any>();

    // state for the forms
    const [formData, setFormData] = useState({
        tableNumber: '',
        arrivalTime: '',
        leaveTime: '',
    });

    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const router = useRouter();
    const onConfirm = async () => {
        if (!session?.user.token) return;

        try {
            const request: createReservationRequest = {dateTime: formData.arrivalTime , restaurantId: parseInt(params.id)}
            const response = await createReservation(session.user.token, request);
            console.log('Reservation successful:', response);
        } catch (error) {
            console.error('Reservation error:', error);
        } finally {
            router.push('/complete/Your-Reservation-has-been-Create/reservation');
        }
    }

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                if (!session?.user.token || !params.id) return;
                const response = await getRestaurantById(params.id, session.user.token);
                setRestaurantData(response);
            } catch (error) {
                console.error('Failed to fetch restaurant data:', error);
            }
        };
        fetchRestaurantData();
    }, [session, params.id]);

    return (
        <div className="pl-12 pr-10 w-full h-screen overflow-y-auto">
            <h1 className="text-3xl md:text-4xl font-semibold">
                Book a Table at {restaurantData?.name}
            </h1>

            <main className="w-full lg:gap-10 flex flex-row items-center flex-wrap lg:flex-nowrap lg:h-[700px]">
                <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0">
                    <Image
                        src={restaurantData?.imageUrl}
                        alt={restaurantData?.name}
                        width={500}
                        height={500}
                        className="rounded-2xl object-cover"
                    />
                </div>

                <div className="rounded-[1rem] p-5 md:p-10 w-full lg:w-1/2 text-lg shadow-lg border-2 mt-6 lg:mt-0 mb-6">
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
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1"
                                required
                                onChange={handleInputChange}
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
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1"
                                required
                                onChange={handleInputChange}
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
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-2xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-redrice-yellow hover:bg-redrice-light-yellow px-5 py-3 text-white font-semibold rounded-3xl text-xl w-full lg:w-1/2 mt-8"
                            onClick={() => {
                                setIsPopupOpen(true);
                            }}
                        >
                            Reserve
                        </button>
                    </div>
                    {isPopupOpen && (
                        <div>
                            <ConfirmReserve 
                                restaurant={restaurantData?.name} 
                                onConfirm={onConfirm}
                                onCancel={() => {
                                    setIsPopupOpen(false);
                                }}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CreateReservationPage;
