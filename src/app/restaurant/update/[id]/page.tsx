'use client'
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

const CreateReservationPage = ({params} : {params: { id : string}}) => {
    const { data: session } = useSession();
    const router = useRouter();
    const [restaurantData, setRestaurantData] = useState<any>();
    const [imageFile, setImageFile] = useState<File>();
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        const fetchRestaurantData = async () => {
            if (!session?.user.token || !params.id) return;
            try {
                const response = await axios.get(`https://redrice-backend-go.onrender.com/api/v1/restaurants/${params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${session.user.token}`,
                    },
                });
                setRestaurantData(response.data);
            } catch (error) {
                console.error('Failed to fetch restaurant data:', error);
            }
        };
        fetchRestaurantData();
    }, [session, params.id]);

    const handleFileSelect = (file : File) => {
        setImageFile(file);
    };

    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setRestaurantData((prevState : any) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onConfirm = async () => {
        if (!session?.user.token) return;

        const formData = new FormData();
        const { restaurantName, address, telephone, openTime, closeTime } = restaurantData;
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
        }
    };

    if (!restaurantData) return null;
    return (
        <div>
            <header className="flex items-center">
                <h2 className="font-semibold text-2xl">
                    Edit {restaurantData.name}
                </h2>
            </header>
            <main className="py-10 flex justify-center lg:space-x-16 w-screen flex-wrap lg:flex-nowrap lg:px-44 space-y-10 lg:space-y-0">
                <section className="w-full lg:w-1/2">
                    <div className="relative w-full h-[384px] rounded-2xl overflow-hidden">
                    <Image
                        src={restaurantData.imageUrl} // Fallback to a default image if none is provided
                        alt={restaurantData.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                    />

                    {/* Overlay Upload Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80">
                        <UploadImage onFileSelect={handleFileSelect}/>
                        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg">
                            <BiPencil size={24} className="text-gray-800" />
                        </div>
                    </div>
                    </div>
                </section>
                <section className="mx-auto rounded-lg p-12 w-full lg:w-1/2 text-lg shadow-lg space-y-10">
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button 
                        className="bg-redrice-blue px-5 py-3 text-white font-semibold rounded-3xl text-xl w-full lg:w-1/2 "
                        type = "button"
                        onClick={() => setModalOpen(true)}
                        >
                        Edit Restaurant
                    </button>
                </section>
                {
                    modalOpen && (
                        <ConfirmCreateRes
                            restaurant={restaurantData.name}
                            onConfirm={onConfirm}
                            onCancel={() => setModalOpen(false)}
                        />
                    )
                }
            </main>
        </div>
    );
};

export default CreateReservationPage;
