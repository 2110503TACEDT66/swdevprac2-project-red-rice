"use client";
import SubBar from "@/components/subbar";
import ReservationPanel from "@/components/reservation/reservationpanel";
import { reservation } from "../../../interface";
import { getMyReservations } from "@/lib/reservation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
export default function Reservation(){
    const {data: session} = useSession();
    const [reservationData, setReservations] = useState<reservation[]>();
    if(!session){
        return <div>loading...</div>
    }
    useEffect(() => {
        const fetchReservations = async () => {
            if (session?.user.token) {
                const fetchedReservations = await getMyReservations(session.user.token);
                setReservations(fetchedReservations);
            }
        };
        fetchReservations();

    },[session])

    return(
        <div className="space-y-6">
            <SubBar text={"Your Reservation"}></SubBar>
            {reservationData && <ReservationPanel data={reservationData}></ReservationPanel>}
        </div>
    )
}