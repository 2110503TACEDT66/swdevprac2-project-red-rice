import CardReservation from './cardreservation';
import Reservation from '@/types/reservation';

export default function CardReservationPanel({data}:{data:Array<Reservation>}) {

    return (
        <div className="h-[95%] flex flex-col items-center m-2 ">
            {data.map((item) => (
                <CardReservation
                    key={item.id}
                    id={item.id}
                    name={item.restaurant.name}
                    time={item.dateTime}
                    picture={item.restaurant.imageUrl}
                ></CardReservation>
            ))}
        </div>
    );
}
