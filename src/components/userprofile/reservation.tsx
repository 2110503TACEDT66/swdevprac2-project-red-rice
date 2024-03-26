import CardReservationPanel from './CardReservationPanel';

export default async function Reservation({data}:{data:any}) {
    
    return (
        <div className="w-full md:w-2/3 h-[500px] rounded-lg shadow-lg flex flex-col border-2 overflow-auto mt-2">
            <h2 className="m-5 mb-3 relative top-[0px] left-[0%]">
                Reservation
            </h2>
            <hr className="w-[50%] relative top-[0px] left-[2.5%] border-slate-400" />
            <CardReservationPanel data={data}></CardReservationPanel>
        </div>
    );
}
