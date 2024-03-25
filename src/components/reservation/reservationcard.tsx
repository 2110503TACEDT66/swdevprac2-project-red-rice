'use client'
import { useReducer, useState } from "react";
import Image from "next/image";
import ConfirmDeleteReserve from "../ConfirmDeleteReserve";
import { deleteReservation } from "@/lib/reservation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function ReservationCard({id,name,table,time,state,picture}:{id:string,name:string,table:number,time:string,state:string,picture:string}){
    const [reservationState] = useState<string>(state); 
    const getBackgroundColor = () => {
        switch (reservationState) {
          case "Canceled":
            return "bg-redrice-red";
          case "Approved":
            return "bg-redrice-green";
          case "Pending":
            return "bg-redrice-yellow";
          default:
            return "bg-gray-100"; 
        }
    };
    const [show, setShow] = useState(false);
    const reducerShow = (state: boolean, action: { type: string }) => {
      switch (action.type) {
        case "show":
          return true;
        case "hide":
          return false;
        default:
          return state;
      }
    };
    const [resultShow, dispatchShow] = useReducer(reducerShow, show);
    const { data: session } = useSession();
    const router = useRouter();
    const onConfirm = async () => {
        dispatchShow({ type: "hide" });
        if (!session?.user.token) return;
        const response = await deleteReservation(session.user.token,parseInt(id));
        if(response){
            console.log("Delete Success");
        }
        router.push('/reservation/done')
    }
    return (
        <div className="w-full max-w-5xl mx-auto rounded-lg shadow-md flex flex-col tablet:flex-row items-center p-4 bg-white space-y-4 tablet:space-y-0 tablet:space-x-4">
            {resultShow && 
                <ConfirmDeleteReserve 
                    restaurant={name}
                    onCancel={() => dispatchShow({ type: "hide" })}
                    onConfirm={onConfirm}
                />
            }
            <div>ID: {id}</div>
            <div className='w-16 h-16 relative'>
                <Image src={picture} alt='Product Picture' layout='fill' className='object-cover rounded-full' />
            </div>
            <div className='text-lg font-semibold'>{name}</div> 
            <div className='flex flex-1 justify-between items-center text-sm tablet:text-base'>
                <div>{table} Tables</div> 
                <div>{time}</div> 
                <div className={`${getBackgroundColor()} px-2 py-1 text-white rounded-full font-semibold`}>{state}</div>
                <div className="w-8 h-8 bg-red-500 rounded-full hover:bg-red-700 flex justify-center items-center" onClick={() => dispatchShow({type:"show"})}>
                    <Image src='/img/component/close-500.png' alt='Close' width={20} height={20} />
                </div>
            </div>
        </div>
    );
}
