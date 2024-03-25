import { convertTimeToISO } from '@/utils/dateConverter';
import axios from 'axios';

export interface createReservationRequest {
    dateTime: string;
    restaurantId: number;
}

const createReservation = async (token: string, reservationRequest: createReservationRequest) => {
    try {
        console.log('Reservation request:', reservationRequest);
        const dateTimeISO = convertTimeToISO(reservationRequest.dateTime);
        const response = await axios.post(`https://redrice-backend-go.onrender.com/api/v1/reservations`, {
            ...reservationRequest,
            dateTime: dateTimeISO,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Reservation error:', error);
        throw error;
    }
}

export { createReservation };