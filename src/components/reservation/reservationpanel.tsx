import ReservationCard from "./reservationcard"
import { reservation } from "../../../interface"
import Link from "next/link"
export default function ReservationPanel({data}:{data:reservation[]}){
    const mockData =data
    return(
        <>{
                mockData.length==0? 
                <div className="h-full relative top-[-10%] flex flex-col  items-center justify-center m-2 p-3">
                    <div className="h-[35%] w-[95%] flex flex-col  items-center justify-center">
                    <h1 className="m-5 font-bold text-slate-600 text-xg">you don`t have any reservation</h1>
                    <div className="h-[50px] w-[300px] bg-redrice-yellow rounded-3xl flex flex-col  font-bold  p-1  items-center justify-center hover:bg-redrice-light-yellow" ><Link href={'/restaurant'}><h1 className="text-white">+ Book Reservation</h1></Link></div>
                    </div>
                    
                </div>
                :<div className="h-[65%] flex flex-col items-center m-2  ">
                    {   
                        mockData.map((item)=>(
                            // eslint-disable-next-line react/jsx-key
                            <ReservationCard id={item.id} name={item.name} table={item.table} time={item.time} state={item.state} picture={item.picture} ></ReservationCard>
                        ))
                    } 
                </div>
            }   
        </>
        
    )
}