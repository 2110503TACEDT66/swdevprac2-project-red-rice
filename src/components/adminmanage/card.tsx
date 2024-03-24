import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
    id: string;
    name: string;
    role: string;
    email: string;
    tel: string;
    picture?: string;
}
export default function Card({ id, name, role, email, tel, picture }: CardProps) {
    return (
        <div className="h-auto w-full rounded-[1rem] shadow-md m-1 flex flex-row border-2 py-3 items-center">
            <div className="w-[55px] h-[55px] relative rounded-full  p-7 m-3 ml-5 mr-5 border-solid border-2 border-slate-400 self-center ">
                <Image
                    src={picture || '/img/user/user1.png'}
                    alt="Product Picture"
                    fill={true}
                    className="object-cover rounded-full "
                />
            </div>
            <div className="flex flex-col w-[100px] h-[10%] self-center">
                <div className="">{name}</div>
                <div className="text-slate-400">{role}</div>
            </div>
            <div className="w-[200px] h-[10%] self-center ">{email}</div>
            <div className="w-[100px] h-[10%] self-center">{tel}</div>
            <div className="justify-end">
                <Link href={`../${id}/profile`}>
                    <button
                        className="block h-[10%] w-[150px] text-sm rounded-full bg-redrice-yellow hover:bg-redrice-light-yellow  p-1 m-3  shadow-sm text-white text-center"
                    >
                        view details
                    </button>
                </Link>
            </div>
        </div>
    );
}
