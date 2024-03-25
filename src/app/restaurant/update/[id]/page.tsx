import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import UploadImage from '@/components/UploadImage';
import ConfirmCreateRes from '@/components/ConfirmCreateRes';

const EditRestaurantPage = ({params} : {params: {id : string}}) => {
    const { data: session } = useSession();
    const router = useRouter();
    const { id } = params;

    const [restaurant, setRestaurant] = useState({
        name: '',
        address: '',
        telephone: '',
        openTime: '',
        closeTime: '',
        image: '',
    });

    const [imageFile, setImageFile] = useState<File>();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        if (session && id) {
            fetchRestaurantData();
        }
    }, [id, session]);

    const fetchRestaurantData = async () => {
        try {
            const { data } = await axios.get(`https://redrice-backend-go.onrender.com/api/v1/restaurant/${id}`, {
                headers: {
                    'Authorization': `Bearer ${session?.user.token}`,
                },
            });
            setRestaurant(data);
        } catch (error) {
            console.error('Failed to fetch restaurant data:', error);
        }
    };

    const handleFileSelect = (file: File) => {
        setImageFile(file);
    };

    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setRestaurant((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleUpdateRestaurant = async () => {
        const formData = new FormData();
        formData.append('name', restaurant.name);
        formData.append('address', restaurant.address);
        formData.append('telephone', restaurant.telephone);
        formData.append('openTime', restaurant.openTime);
        formData.append('closeTime', restaurant.closeTime);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        try {
            await axios.put(`https://redrice-backend-go.onrender.com/api/v1/restaurant/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${session?.user.token}`,
                },
            });
            alert('Restaurant updated successfully');
            router.push('/path-to-redirect-after-success'); // Adjust this path as needed
        } catch (error) {
            console.error('Failed to update restaurant:', error);
        }
    };

    if (!session) {
        return <div>Access Denied</div>;
    }

    return (
        <div>
            <header className="flex items-center">
                <h2 className="font-semibold text-2xl">Edit Restaurant</h2>
            </header>
            <form onSubmit={handleUpdateRestaurant} className="py-10 flex justify-center lg:space-x-16 w-screen flex-wrap lg:flex-nowrap lg:px-44 space-y-10 lg:space-y-0">
                <section className="w-full lg:w-1/2">
                    <UploadImage onFileSelect={handleFileSelect} />
                </section>
                <section className="mx-auto rounded-lg p-12 w-full lg:w-1/2 text-lg shadow-lg space-y-10">
                    <button type="submit" className="bg-redrice-blue px-5 py-3 text-white font-semibold rounded-3xl text-xl w-full lg:w-1/2">
                        Update Restaurant
                    </button>
                </section>
            </form>
            {isPopupOpen && (
                <ConfirmCreateRes
                    restaurant={restaurant.name}
                    onConfirm={handleUpdateRestaurant}
                    onCancel={() => setIsPopupOpen(false)}
                />
            )}
        </div>
    );
};

export default EditRestaurantPage;
