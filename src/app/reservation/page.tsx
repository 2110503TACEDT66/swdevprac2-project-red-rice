'use client';
import SubBar from '@/components/subbar';
import ReservationPanel from '@/components/reservation/reservationpanel';
import { reservation } from '../../../interface';
import { getme } from '@/lib/auth';
import { getMyReservations, getAllResvation } from '@/lib/reservation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
export default function Reservation() {
    const { data: session } = useSession();
    const [reservationData, setReservations] = useState<reservation[]>();
    const [role, setRole] = useState<string>('');
    useEffect(() => {
        if (!session) return;
        const getMe = async () => {
            const me = await getme(session.user.token);
            setRole(me.role);
            return me.role; // Return role for immediate use
        }
    
        const fetchReservations = async (role: string) => {
            if (role === 'user') {
                const fetchedReservations = await getMyReservations(session.user.token);
                setReservations(fetchedReservations);
            } else if (role === 'admin') {
                const fetchedReservations = await getAllResvation(session.user.token);
                setReservations(fetchedReservations);
            }
        };
    
        getMe().then(fetchReservations); // Chain the promise
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
