import ReservationCard from "./reservationcard"
import { reservation } from "../../../interface"
export default function ReservationPanel({data}:{data:reservation[]}){
    
    return(
        <div className="h-[65%] flex flex-col items-center justify-center space-y-4">
            {   
                data.map((item)=>(
                    <ReservationCard id={item.ID} name={item.restaurant.name} table={1} time={item.dateTime.split('T')[1].substring(0,5)} state={"Pending"} picture={"https://i.pinimg.com/originals/5c/a7/3a/5ca73a010de31c834165317c1feb22d3.jpg"} ></ReservationCard>
                ))
            }
        </div>
    )
}