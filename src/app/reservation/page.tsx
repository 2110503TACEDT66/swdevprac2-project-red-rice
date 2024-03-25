'use client';
import SubBar from '@/components/subbar';
import ReservationPanel from '@/components/reservation/reservationpanel';
import { reservation } from '../../../interface';
import { getMyReservations } from '@/lib/reservation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
export default function Reservation() {
    const { data: session } = useSession();
    const [reservationData, setReservations] = useState<reservation[]>();
    useEffect(() => {
        if (!session) return;
        const fetchReservations = async () => {
            const fetchedReservations = await getMyReservations(
                session.user.token
            );
            setReservations(fetchedReservations);
        };
        fetchReservations();
    }, [session]);

    // Handle loading state
    if (!session || !reservationData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-6">
            <SubBar text={'Your Reservation'}></SubBar>
            {reservationData && (
                <ReservationPanel data={reservationData}></ReservationPanel>
            )}
        </div>
    );
}
