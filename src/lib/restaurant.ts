import axios from 'axios';

const getOneRestaurant = async (id: string, token: string) => {
    try {
        const response = await axios.get(
            `https://redrice-backend-go.onrender.com/api/v1/restaurants/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const { data } = response;
        return data;
    } catch (error) {
        console.error('Get restaurant by ID error:', error);
        throw error;
    }
};

const getAllRestaurant = async (token: string) => {
    try {
        const response = await axios.get(
            'https://redrice-backend-go.onrender.com/api/v1/restaurants',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const { data } = response;
        return data;
    } catch (error) {
        console.error('Get all restaurant error:', error);
    }
};

const createRestaurant = async (formData: FormData, token: string) => {
    try {
        const response = await axios.post(
            'https://redrice-backend-go.onrender.com/api/v1/restaurants',
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error creating restaurant:', error);
        throw error;
    }
};

const updateRestaurant = async (
    id: string,
    formData: FormData,
    token: string
) => {
    try {
        const response = await axios.put(
            `https://redrice-backend-go.onrender.com/api/v1/restaurants/${id}`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Failed to update restaurant:', error);
        throw error;
    }
};

const deleteRestaurant = async (id: string, token: string) => {
    try {
        const response = await axios.delete(
            `https://redrice-backend-go.onrender.com/api/v1/restaurants/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error deleting restaurant:', error);
        throw error;
    }
};

export {
    getOneRestaurant,
    getAllRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
};
}

const getRestaurantById = async (id: string, token: string) => {
    try {
        const response = await axios.get(`https://redrice-backend-go.onrender.com/api/v1/restaurants/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const { data } = response;
        return data;
    } catch (error) {
        console.error('Get restaurant by id error:', error);
    }
}

export { getAllRestaurant, createRestaurant, updateRestaurant, getRestaurantById };
