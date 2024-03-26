'use client';
import SubBar from '@/components/subbar';
import ReservationPanel from '@/components/reservation/reservationpanel';
import { reservation } from '../../../interface';
import { getMyReservations } from '@/lib/reservation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
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

    return (
        <div className="pl-12 pr-10 w-full h-screen overflow-y-auto">
            {reservationData ? (
                <div className="space-y-6">
                    <SubBar text={'Your Reservation'}></SubBar>
                    {reservationData && (
                        <ReservationPanel
                            data={reservationData}
                        ></ReservationPanel>
                    )}
                </div>
            ) : (
                <div className="h-[700px] flex justify-center items-center">
                    <CircularProgress />
                </div>
            )}
        </div>
    );
}
