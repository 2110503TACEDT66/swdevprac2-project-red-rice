import CardReservationPanel from './CardReservationPanel'

export default function Reservation(){
    return(
        <div className="w-[65%] m-5 rounded-lg shadow-lg flex flex-col ">
            <h2 className="m-5 mb-3">Reservation </h2>
            <hr className="w-[30%] relative left-[2.5%] border-slate-400"/>
            <CardReservationPanel></CardReservationPanel>
        </div>
    )
}