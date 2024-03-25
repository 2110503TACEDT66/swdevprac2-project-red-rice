import ReservationCard from "./reservationcard"
import { reservation } from "../../../interface"
export default function ReservationPanel({data}:{data:reservation[]}){
    const mockData =data
    return(
        <div className="h-[65%] flex flex-col items-center m-2  ">
            {   
                mockData.map((item)=>(
                    // eslint-disable-next-line react/jsx-key
                    <ReservationCard id={item.id} name={item.name} table={item.table} time={item.time} state={item.state} picture={item.picture} ></ReservationCard>
                ))
            }
     
            
        </div>
    )
}