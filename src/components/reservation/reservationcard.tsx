'use client'

import { useState } from "react";
import Image from "next/image";
export default function ReservationCard({id,name,table,time,state,picture}:{id:string,name:string,table:number,time:string,state:string,picture:string}){
    const [reservationState, setReservationState] = useState<string>(state); 
    const getBackgroundColor = () => {
        switch (reservationState) {
          case "Canceled":
            return "bg-redrice-red";
          case "Approved":
            return "bg-redrice-green";
          case "Pending":
            return "bg-redrice-yellow";
          default:
            return "bg-gray-100"; // Default color for unexpected states
        }
      };
      

    return(
        <div className=" w-[90%] h-full rounded-lg shadow-md m-1 flex flex-row ">
            <div className='w-[45px] h-[45px] relative rounded-lg  p-7 m-3 ml-7  self-center '>
                <Image src={ picture }
                alt='Product Picture'
                fill={true}
                className= 'object-cover rounded-lg '
                />
            </div>
            <div className='w-[50%] m-1 self-center '>{name}</div> 
            <div className='w-[50%] relative right-0  m-3 self-center flex flex-row items-center'>
                <div className='w-[15%] m-3  '>{table} Tables</div> 
                <div className='w-[15%] m-3  '>{time}</div> 
                <div className={`w-[22%] h-[5%] self-center m-3 ml-10 ${getBackgroundColor()} p-1 text-white text-center rounded-full text-xl bold shadow-lg `}>{state}</div>
                <div className="w-[30px] h-[30px]  bg-red-500 rounded-full hover:bg-red-700 m-3 ml-5">
                    <div className="w-full h-full flex justify-center items-center">
                    <div className='w-[5px] h-[5px] relative rounded-lg  p-2 self-center  '>
                <Image src={ '/img/component/close.png' }
                alt='Product Picture'
                fill={true}
                className= 'object-cover rounded-lg '
                />
            </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}