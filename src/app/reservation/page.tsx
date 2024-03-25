import SubBar from "@/components/subbar";
import ReservationPanel from "@/components/reservation/reservationpanel";
import { reservation } from "../../../interface";
export default function Reservation(){
    const mockData:reservation[]=[
        // {id:"001" ,name:"Mo-Mo-Paradise",table:3,time:"22.00 pm",state:"Pending",picture:"/img/component/momo.jpeg"},
        // {id:"002" ,name:"Mo-Mo-Paradise",table:3,time:"22.00 pm",state:"Canceled",picture:"/img/component/momo.jpeg"},
        // {id:"003" ,name:"Mo-Mo-Paradise",table:3,time:"22.00 pm",state:"Pending",picture:"/img/component/momo.jpeg"},
        // {id:"001" ,name:"Mo-Mo-Paradise",table:3,time:"22.00 pm",state:"Approved",picture:"/img/component/momo.jpeg"},
  
    ]
    return(
        <div className="h-full">
            <SubBar text={"Your Reservation"}></SubBar>
            <ReservationPanel data={mockData}></ReservationPanel>
        </div>
    )
}