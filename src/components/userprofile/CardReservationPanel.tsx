import CardReservation from './cardreservation'

export default function CardReservationPanel(){
    const mockData =[
        {id:"001" ,name:"Mo-Mo-Paradise",time:"29 January 2024 22:00 pm",picture:"/img/component/momo.jpeg"},
        {id:"002" ,name:"Mo-Mo-Paradise",time:"29 January 2024 22:00 pm",picture:"/img/component/momo.jpeg"},
        {id:"003" ,name:"Mo-Mo-Paradise",time:"29 January 2024 22:00 pm",picture:"/img/component/momo.jpeg"},
    ]
    return(
        <div className="h-[85%] flex flex-col items-center m-2 ">
            {
                mockData.map((item)=>(
                    // eslint-disable-next-line react/jsx-key
                    <CardReservation id={item.id} name={item.name}  time={item.time} picture={item.picture} ></CardReservation>
                ))
            }
        </div>
    )
}