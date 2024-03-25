import CardReservationPanel from './CardReservationPanel';

export default function Reservation() {
    return (
        <div className="tablet:w-[65%]  m-3 rounded-lg shadow-lg flex flex-col w-[95%] ">
            <h2 className="m-5 mb-3 relative top-[0px] left-[0%]">Reservation </h2>
            <hr className="w-[50%] relative top-[0px] left-[2.5%] border-slate-400" />
            <CardReservationPanel></CardReservationPanel>
        </div>
    );
}
