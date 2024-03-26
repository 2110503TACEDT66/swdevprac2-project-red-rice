'use client';
import React from 'react';
import { BiPencil } from 'react-icons/bi';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import UploadImage from '@/components/UploadImage';
import { useEffect, useState } from 'react';
import { updateRestaurant } from '@/lib/restaurant';
import { useRouter } from 'next/navigation';
import ConfirmCreateRes from '@/components/ConfirmCreateRes';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const UpdateReservationPage = ({ params }: { params: { id: string } }) => {
    const { data: session } = useSession();
    const router = useRouter();
    const [restaurantData, setRestaurantData] = useState<any>();
    const [imageFile, setImageFile] = useState<File>();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            if (!session?.user.token || !params.id) return;
            try {
                const response = await axios.get(
                    `https://redrice-backend-go.onrender.com/api/v1/restaurants/${params.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${session.user.token}`,
                        },
                    }
                );
                setRestaurantData(response.data);
            } catch (error) {
                console.error('Failed to fetch restaurant data:', error);
            }
        };
        fetchRestaurantData();
    }, [session, params.id]);

    const handleFileSelect = (file: File) => {
        setImageFile(file);
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setRestaurantData((prevState: any) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onConfirm = async () => {
        if (!session?.user.token) return;

        const formData = new FormData();
        const { restaurantName, address, telephone, openTime, closeTime } =
            restaurantData;
        formData.append('name', restaurantName);
        formData.append('address', address);
        formData.append('telephone', telephone);
        formData.append('openTime', openTime);
        formData.append('closeTime', closeTime);
        if (imageFile) formData.append('image', imageFile);

        try {
            await updateRestaurant(params.id, formData, session.user.token);
            router.push('/restaurant');
        } catch (error) {
            console.error('Failed to update restaurant:', error);
        } finally {
            setModalOpen(false);
            router.push(
                '/complete/Your-Restaurant-has-been-Updated/restaurant'
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
                        <UploadImage onFileSelect={handleFileSelect} />
                    </div>
                    <Image
                        src={restaurantData.imageUrl}
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
