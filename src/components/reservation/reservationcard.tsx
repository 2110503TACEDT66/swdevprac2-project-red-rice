'use client'
import { useReducer, useState } from "react";
import Image from "next/image";
import ConfirmDeleteReserve from "../ConfirmDeleteReserve";
import Link from 'next/link';
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
    const [show,setshow]=useState(false)
  const reducershow = (state:boolean,action: { type: string})=>{
    switch (action.type){
      case "show" :
        return true
      case "hide" :
        return false
      default :
        return state
    }
  }
  const [resultshow,dispatchshow] =useReducer(reducershow,show)
    return(
        <div className=" w-[90%] h-full rounded-lg shadow-md m-1 flex flex-row ">
            {resultshow && 
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 px-5 z-10">
                <div className="px-10 py-10 bg-white shadow-lg rounded-[1rem] flex flex-col justify-center items-center">
                    <h1 className='mb-4 text-xl font-bold'>Are you sure for delete Reservation at {name} ?</h1>
                    <div className='flex flex-row gap-3'>
                        <button className='bg-redrice-green py-2 px-3 w-28 text-white font-semibold rounded-[1rem] hover:bg-green-400'><Link href="/reservation/done">Confirm</Link></button>
                        <button className='bg-redrice-red py-2 px-3 w-28 text-white font-semibold rounded-[1rem] hover:bg-red-400' onClick={()=>dispatchshow({type:"hide"})}>Cancel</button>
                    </div>
                </div>
            </div>
            }
            <div className='w-[45px] h-[45px] relative rounded-lg  p-7 m-3 ml-7  self-center '>
                <Image src={ picture }
                alt='Product Picture'
                fill={true}
                className= 'object-cover rounded-lg '
                />
            </div>
            <div className='w-[50%] m-1 self-center font-semibold'>{name}</div> 
            <div className='w-[50%] relative right-0  m-3 self-center flex flex-row items-center'>
                <div className='w-[15%] m-3  font-semibold'>{table} Tables</div> 
                <div className='w-[15%] m-3  font-semibold'>{time}</div> 
                <div className={`w-[22%] h-[5%] self-center m-3 ml-10 ${getBackgroundColor()} p-1 text-white text-center rounded-full text-xl bold shadow-lg font-semibold`}>{state}</div>
                    <div className="w-[30px] h-[30px]  bg-red-500 rounded-full hover:bg-red-700 m-3 ml-5">

                        <div className="w-full h-full flex justify-center items-center " onClick={()=>dispatchshow({type:"show"})}>
                            <div className='w-[5px] h-[5px] relative rounded-lg  p-2 self-center '>
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