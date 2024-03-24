import Card from './card';

export default function CardPanel() {
    const mockData = [
        {
            id: '001',
            name: 'PunZa007x',
            role: 'admin',
            email: 'punza007@gmail.com',
            tel: '0922698678',
        },
        {
            id: '002',
            name: 'PunZa007x',
            role: 'admin',
            email: 'punza007@gmail.com',
            tel: '0922698678',
            picture: '/img/user/user2.jpg',
        },
        {
            id: '003',
            name: 'PunZa007x',
            role: 'admin',
            email: 'punza007@gmail.com',
            tel: '0922698678',
            picture: '/img/user/IMG_7044.JPG',
        },
        {
            id: '003',
            name: 'PunZa007x',
            role: 'admin',
            email: 'punza007@gmail.com',
            tel: '0922698678',
            picture: '/img/user/IMG_7044.JPG',
        },
        {
            id: '003',
            name: 'PunZa007x',
            role: 'admin',
            email: 'punza007@gmail.com',
            tel: '0922698678',
            picture: '/img/user/IMG_7044.JPG',
        },
        {
            id: '003',
            name: 'PunZa007x',
            role: 'admin',
            email: 'punza007@gmail.com',
            tel: '0922698678',
            picture: '/img/user/IMG_7044.JPG',
        },
        {
            id: '003',
            name: 'PunZa007x',
            role: 'admin',
            email: 'punza007@gmail.com',
            tel: '0922698678',
            picture: '/img/user/IMG_7044.JPG',
        },
    ];
    return (
        <div className="w-full h-[85%] flex flex-col items-center ">
            {mockData.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Card
                    id={item.id}
                    name={item.name}
                    role={item.role}
                    email={item.email}
                    tel={item.tel}
                    picture={item.picture}
                ></Card>
            ))}
        </div>
    );
}
