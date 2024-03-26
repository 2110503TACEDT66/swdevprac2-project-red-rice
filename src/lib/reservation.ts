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


import { convertTimeToISO } from '@/utils/dateConverter';

export interface createReservationRequest {
    dateTime: string;
    restaurantId: number;
}

const createReservation = async (
    token: string,
    reservationRequest: createReservationRequest
) => {
    try {
        console.log('Reservation request:', reservationRequest);
        const dateTimeISO = convertTimeToISO(reservationRequest.dateTime);
        const response = await axios.post(
            `https://redrice-backend-go.onrender.com/api/v1/reservations`,
            {
                ...reservationRequest,
                dateTime: dateTimeISO,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Reservation error:', error);
        throw error;
    }
};

const getMyReservations = async (token: string) => {
    try {
        const user = await axios.get(
            'https://redrice-backend-go.onrender.com/api/v1/me',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log('User:', user.data);
        const id = user.data.ID;
        const response = await axios.get(
            `https://redrice-backend-go.onrender.com/api/v1/users/${id}/reservations`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Get my reservations error:', error);
        throw error;
    }
};

const deleteReservation = async (token: string, reservationId: number) => {
    try {
        const response = await axios.delete(
            `https://redrice-backend-go.onrender.com/api/v1/reservations/${reservationId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Delete reservation error:', error);
        throw error;
    }
};

const updateReservation = async (token: string, id: string, dateTime: any) => {
    try {

        const response = await axios.put(
            `https://redrice-backend-go.onrender.com/api/v1/reservations/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: {
                    dateTime: dateTime,
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error('Update reservation error:', error);
        throw error;
    }
}

const getReservation = async (token: string, id: string) => {
    try {
        const response = await axios.get(
            `https://redrice-backend-go.onrender.com/api/v1/reservations/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Get reservation error:', error);
        throw error;
    }
}
export { createReservation, getMyReservations, deleteReservation, getAllResvation, getReservationByIdUser, updateReservation, getReservation};
