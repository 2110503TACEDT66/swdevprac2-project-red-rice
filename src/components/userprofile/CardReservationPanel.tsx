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
    return (
        <div className="h-[95%] flex flex-col items-center m-2 ">
            {mockData.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <CardReservation
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    time={item.time}
                    picture={item.picture}
                ></CardReservation>
            ))}
        </div>
    );
}
