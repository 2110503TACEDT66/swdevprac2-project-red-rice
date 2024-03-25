import CardReservation from './cardreservation';

export default function CardReservationPanel() {
    const mockData = [
        {
            id: '001',
            name: 'Mo-Mo-Paradise',
            time: '29 January 2024 22:00 pm',
            picture: '/img/component/momo.jpeg',
        },
        {
            id: '002',
            name: 'Mo-Mo-Paradise',
            time: '29 January 2024 22:00 pm',
            picture: '/img/component/momo.jpeg',
        },
        {
            id: '003',
            name: 'Mo-Mo-Paradise',
            time: '29 January 2024 22:00 pm',
            picture: '/img/component/momo.jpeg',
        },
        {
            id: '004',
            name: 'Mo-Mo-Paradise',
            time: '29 January 2024 22:00 pm',
            picture: '/img/component/momo.jpeg',
        },
        {
            id: '005',
            name: 'Mo-Mo-Paradise',
            time: '29 January 2024 22:00 pm',
            picture: '/img/component/momo.jpeg',
        },
        {
            id: '006',
            name: 'Mo-Mo-Paradise',
            time: '29 January 2024 22:00 pm',
            picture: '/img/component/momo.jpeg',
        },
        {
            id: '007',
            name: 'Mo-Mo-Paradise',
            time: '29 January 2024 22:00 pm',
            picture: '/img/component/momo.jpeg',
        },
        {
            id: '008',
            name: 'Mo-Mo-Paradise',
            time: '29 January 2024 22:00 pm',
            picture: '/img/component/momo.jpeg',
        },
    ];
import Reservation from '@/types/reservation';

export default function CardReservationPanel({data}:{data:Array<Reservation>}) {

    return (
        <div className="h-[95%] flex flex-col items-center m-2 ">
            {data.map((item) => (
                // eslint-disable-next-line react/jsx-key
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
