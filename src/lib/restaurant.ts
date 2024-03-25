import axios from 'axios';

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

        const response = await axios.post('https://redrice-backend-go.onrender.com/api/v1/restaurants', formData, {
            headers: {
                'Authorization': `Bearer ${token}`, 
            },
        });

        return response.data; 
    } catch (error) {
        console.error('Error creating restaurant:', error);
        throw error; 
    }
};

export { getAllRestaurant, createRestaurant };
