'use client';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { updateRestaurant } from '@/lib/restaurant';
import { useRouter } from 'next/navigation';
import ConfirmCreateRes from '@/components/ConfirmCreateRes';
import { CircularProgress } from '@mui/material';
import { updateReservation } from '@/lib/reservation';
import { convertTimeToISO } from '@/utils/dateConverter';
import { getReservation } from '@/lib/reservation';

const UpdateReservationPage = ({ params }: { params: { id: string } }) => {
    const { data: session } = useSession();
    const router = useRouter();
    const [restaurantData, setRestaurantData] = useState<any>();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            if (!session?.user.token || !params.id) return;
            const data = await getReservation(session.user.token, params.id);
            setRestaurantData(data);
        };
        fetchRestaurantData();
    }, [session, params.id]);


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        if (name == 'arrivalTime') {
            const dateTimeISO = convertTimeToISO(value);
            setRestaurantData((prevState: any) => ({
                ...prevState,
                dateTime: dateTimeISO,
            }));
            return;
        }
        setRestaurantData((prevState: any) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onConfirm = async () => {
        console.log('Restaurant data:', restaurantData);
        if (!session?.user.token) return;
        try {
            const data = await updateReservation(session?.user.token, params.id, {
                dateTime: restaurantData.arrivalTime,
            });
            console.log('Updated reservation:', data);
            
        } catch (error) {
            console.error('Failed to update restaurant:', error);
        } finally {
            setModalOpen(false);
            router.push(
                '/complete/Your-Reservation-has-been-Updated/reservation'
            );
        }
    };

    if (!restaurantData) {
        return (
            <div className="h-[700px] flex justify-center items-center">
                <CircularProgress />
            </div>
        );
    }

    return (
        <main className="pl-12 pr-10 w-full h-screen overflow-y-auto">
            <h1 className="text-3xl md:text-4xl font-semibold">
                Edit {restaurantData.name}
            </h1>

            <section className="w-full lg:gap-10 flex flex-row items-center flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0 relative">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-50">
                    </div>
                    <Image
                        src={'https://i.pinimg.com/564x/a5/12/d1/a512d1f51eccf437d733ea952beb88b9.jpg'}
                        alt={restaurantData.name}
                        width={500}
                        height={0}
                        className="rounded-2xl object-cover w-full md:w-2/3 lg:w-full h-[300px] md:h-[300px] lg:h-[500px]"
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
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="bg-redrice-blue hover:bg-blue-400 px-5 py-3 text-white font-semibold rounded-3xl text-xl w-full lg:w-1/2 mt-8"
                            onClick={() => setModalOpen(true)}
                        >
                            Edit Reservation
                        </button>
                    </div>
                    {modalOpen && (
                        <ConfirmCreateRes
                            restaurant={restaurantData.name}
                            onConfirm={onConfirm}
                            onCancel={() => setModalOpen(false)}
                        />
                    )}
                </div>
            </section>
        </main>
    );
};

export default UpdateReservationPage;
