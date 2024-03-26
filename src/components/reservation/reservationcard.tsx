'use client';
import { useReducer, useState } from 'react';
import Image from 'next/image';
import ConfirmDeleteReserve from '../ConfirmDeleteReserve';
import { deleteReservation } from '@/lib/reservation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RiDeleteBin5Fill } from 'react-icons/ri';
export default function ReservationCard({
    id,
    name,
    table,
    time,
    state,
    picture,
}: {
    id: number;
    name: string;
    table: number;
    time: string;
    state: string;
    picture: string;
}) {
    const [reservationState] = useState<string>(state);
    const getBackgroundColor = () => {
        switch (reservationState) {
            case 'Canceled':
                return 'bg-redrice-red';
            case 'Approved':
                return 'bg-redrice-green';
            case 'Pending':
                return 'bg-redrice-yellow';
            default:
                return 'bg-gray-100';
        }
    };
    const [show, setShow] = useState(false);
    const reducerShow = (state: boolean, action: { type: string }) => {
        switch (action.type) {
            case 'show':
                return true;
            case 'hide':
                return false;
            default:
                return state;
        }
    };
    const [resultShow, dispatchShow] = useReducer(reducerShow, show);
    const { data: session } = useSession();
    const router = useRouter();
    const onConfirm = async () => {
        dispatchShow({ type: 'hide' });
        if (!session?.user.token) return;
        const response = await deleteReservation(session.user.token, id);
        if (response) {
            console.log('Delete Success');
        }
        router.push('/reservation/done');
    };
    return (
        <div className="h-auto w-full rounded-[1rem] shadow-md m-2 flex flex-row py-2 md:py-7 items-center justify-between pr-5 pl-5 border-2 flex-wrap">
            {resultShow && (
                <ConfirmDeleteReserve
                    restaurant={name}
                    onCancel={() => dispatchShow({ type: 'hide' })}
                    onConfirm={onConfirm}
                />
            )}
            <div className="flex flex-row items-center flex-wrap justify-center gap-5 md:gap-0 mb-5 md:mb-0">
                <div className="flex flex-row items-center">
                    <h1 className="mr-5 md:mr-10">{id}</h1>
                    <div className="flex flex-row gap-5 md:gap-10 mr-3 md:mr-10 items-center flex-wrap">
                        <Image
                            src={picture || '/img/user/user1.png'}
                            alt="Product Picture"
                            width={50}
                            height={50}
                            className="object-cover rounded-full"
                        />

                        <h1>{name}</h1>
                    </div>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center">
                    <h1>{table} Tables</h1>
                    <h1>{time}</h1>
                </div>
            </div>
            <div className="w-full md:w-auto flex justify-center items-center text-sm gap-3">
                <div
                    className={`${getBackgroundColor()} text-white font-semibold rounded-2xl px-10 py-2`}
                >
                    {state}
                </div>
                <div
                    className="bg-redrice-red rounded-full hover:bg-red-700 flex justify-center items-center text-white text-xl p-3"
                    onClick={() => dispatchShow({ type: 'show' })}
                >
                    <RiDeleteBin5Fill />
                </div>
            </div>
        </div>
    );
}
