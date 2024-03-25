'use client';
import React, { useRef, useState } from 'react';
import UploadImage from '@/components/UploadImage';
import ConfirmCreateRes from '@/components/ConfirmCreateRes';
import { createRestaurant } from '@/lib/restaurant';
import { useSession } from 'next-auth/react';

const CreateReservationPage = () => {
    const { data: session } = useSession();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [restaurant, setRestaurant] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [openTime, setOpenTime] = useState('');
    const [closeTime, setCloseTime] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const formRef = useRef<HTMLFormElement>(null);
    
    const onFileSelect = (file: File) => {
        setImage(file);
    }

    const handleConfirm = async () => {
        const formData = new FormData();
        formData.append('name', restaurant);
        if (image) formData.append('image', image);
        formData.append('address', address);
        formData.append('telephone', telephone);
        formData.append('openTime', openTime);
        formData.append('closeTime', closeTime);
        formData.append('facebook', facebook);
        formData.append('instagram', instagram);
        try {
            if (session?.user?.token) {
                console.log(session.user.role)
                const response = await createRestaurant(formData, session.user.token);
                console.log('Create restaurant successful:', response);
            } else {
                throw new Error('No token found');
            }
        
        } catch (error) {
            console.error('Failed to create restaurant:', error);
        } finally {
            setIsPopupOpen(false); 
        }
    };
    
    const handleCancel = () => {
        setIsPopupOpen(false); 
    };

    return (
        <div className="pl-12 pr-10 w-full h-screen overflow-y-auto">
            <h1 className="text-3xl md:text-4xl font-semibold">
                Create Restaurant
            </h1>

            <form ref = {formRef} className="w-full lg:gap-10 flex flex-row items-center flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0">
                    <UploadImage onFileSelect={onFileSelect}/>
                </div>

                <div className="rounded-[1rem] p-5 md:p-10 w-full lg:w-1/2 text-lg shadow-lg border-2 mt-6 lg:mt-0 mb-6">
                    <div className="space-y-4">
                        {/* Restaurant Name input field */}
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
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                                onChange={(e) => {
                                    setRestaurant(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                description
                            </label>
                            <input
                                type="textarea"
                                id="description"
                                name="description"
                                placeholder=""
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        {/* Address input field */}
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
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            ></textarea>
                        </div>
                        {/* Telephone input field */}
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
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </div>

                        {/* Open Time input field */}
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
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                                onChange={(e) => setOpenTime(e.target.value)}
                            />
                        </div>

                        {/* Close Time input field */}
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
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                                onChange={(e) => setCloseTime(e.target.value)}
                            />
                        </div>
                        
                        <div className='flex space-x-4'>
                            <div>
                            <label
                                htmlFor="facebook"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                facebook
                            </label>
                            <input
                                type="text"
                                id="facebook"
                                name="facebook"
                                placeholder="e.g. pathumwan"
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                                onChange={(e) => setFacebook(e.target.value)}
                            />
                            </div>
                            <div>
                            <label
                                htmlFor="instagram"
                                className="block mb-2 text-md font-semibold text-gray-900"
                            >
                                instagram
                            </label>
                            <input
                                type="text"
                                id="instagram"
                                name="instagram"
                                placeholder="e.g. pathumwan"
                                className="bg-gray-50 border-2 font-light text-md border-gray-200 text-gray-900 rounded-xl focus:ring-redrice-yellow focus:border-redrice-yellow block w-full px-3 py-1.5"
                                required
                                onChange={(e) => setInstagram(e.target.value)}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="bg-redrice-yellow hover:bg-redrice-light-yellow px-5 py-3 text-white font-semibold rounded-3xl text-xl w-full lg:w-1/2 mt-8"
                            onClick={() => {
                                setIsPopupOpen(true);
                            }}
                        >
                            Create Restaurant
                        </button>
                    </div>
                    {isPopupOpen && (
                <div>
                    <ConfirmCreateRes 
                        restaurant={restaurant} 
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CreateReservationPage;
