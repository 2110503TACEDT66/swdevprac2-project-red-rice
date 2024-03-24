import Card from './card';
import { mockUser } from '@/mock/user';

export default function CardPanel() {
    const mockData = mockUser;

    return (
        <div className="w-full h-[85%] flex flex-col items-center mt-5">
            {mockData.map((item) => (
                <Card
                    id={item.id}
                    name={item.name}
                    role={item.role}
                    email={item.email}
                    tel={item.tel}
                    picture={item.picture}
                />
            ))}
        </div>
    );
}
