import axios from 'axios';

const getAllResvation = async (token: string) => {
    try {
        const response = await axios.get(
            'https://redrice-backend-go.onrender.com/api/v1/reservations',
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

const getReservationByIdUser = async (token: string,id:string) => {
    try {
        const response = await axios.get(
            `https://redrice-backend-go.onrender.com/api/v1/users/${id}/reservations`,
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

export { getAllResvation,getReservationByIdUser };
