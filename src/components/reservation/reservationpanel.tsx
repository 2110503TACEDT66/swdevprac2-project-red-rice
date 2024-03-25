import Link from 'next/link';
import ReservationCard from './reservationcard';
import { reservation } from '../../../interface';
export default function ReservationPanel({ data }: { data: reservation[] }) {
    return (
        <>
        {data.length === 0 ? (
                <div className="h-full relative top-[-10%] flex flex-col  items-center justify-center m-2 p-3">
                    <div className="h-[35%] w-[95%] flex flex-col  items-center justify-center">
                    <h1 className="m-5 font-bold text-slate-600 text-xg">you don`t have any reservation</h1>
                    <div className="h-[50px] w-[300px] bg-redrice-yellow rounded-3xl flex flex-col  font-bold  p-1  items-center justify-center hover:bg-redrice-light-yellow" ><Link href={'/restaurant'}><h1 className="text-white">+ Book Reservation</h1></Link></div>
                    </div>
                    
                </div>
            ) : 
        <div className="flex flex-col items-center justify-center space-y-4">
            {data.map((item, key) => (
                <ReservationCard
                    key={key}
                    id={item.ID}
                    name={item.restaurant.name}
                    table={1}
                    time={item.dateTime.split('T')[1].substring(0, 5)}
                    state={'Pending'}
                    picture={
                        item.restaurant.imageUrl
                    }
                ></ReservationCard>
            ))}
        </div>
        }
        </>
    );
}
