'use client';
import Link from 'next/link';
import ReservationCard from './reservationcard';
import { reservation } from '../../../interface';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function ReservationPanel({ data }: { data: reservation[] }) {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const startIndex = (page - 1) * limit;

    const visibleData = data.slice(startIndex, startIndex + limit);

    const totalPages = Math.ceil(data.length / limit);

    const handlePageChange = (newPage: any) => {
        setPage(Math.max(1, Math.min(newPage, totalPages)));
    };

    const isPreviousDisabled = page === 1;
    const isNextDisabled = page === totalPages;
    return (
        <>
            {data.length === 0 ? (
                <div className="h-full relative top-[-10%] flex flex-col  items-center justify-center m-2 p-3">
                    <div className="h-[35%] w-[95%] flex flex-col  items-center justify-center">
                        <h1 className="m-5 font-bold text-slate-600 text-xg">
                            you don`t have any reservation
                        </h1>
                        <div className="h-[50px] w-[300px] bg-redrice-yellow rounded-3xl flex flex-col  font-bold  p-1  items-center justify-center hover:bg-redrice-light-yellow">
                            <Link href={'/restaurant'}>
                                <h1 className="text-white">
                                    + Book Reservation
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-screen flex flex-col items-center mt-5">
                    {data.map((item, key) => (
                        <ReservationCard
                            key={key}
                            id={item.ID}
                            name={item.restaurant.name}
                            table={1}
                            time={item.dateTime.split('T')[1].substring(0, 5)}
                            state={'Pending'}
                            picture={item.restaurant.imageUrl}
                        />
                    ))}

                    <div className="mt-5 pb-5 flex justify-center items-center">
                        {isPreviousDisabled ? (
                            <button className="bg-redrice-light-yellow text-white p-2 rounded-full">
                                <IoIosArrowBack />
                            </button>
                        ) : (
                            <button
                                disabled={isPreviousDisabled}
                                onClick={() => handlePageChange(page - 1)}
                                className="bg-redrice-yellow text-white p-2 rounded-full"
                            >
                                <IoIosArrowBack />
                            </button>
                        )}

                        <span className="mx-5">
                            Page {page} of {totalPages}
                        </span>
                        {isNextDisabled ? (
                            <button className="bg-redrice-light-yellow text-white p-2 rounded-full">
                                <IoIosArrowForward />
                            </button>
                        ) : (
                            <button
                                disabled={isNextDisabled}
                                onClick={() => handlePageChange(page + 1)}
                                className="bg-redrice-yellow text-white p-2 rounded-full"
                            >
                                <IoIosArrowForward />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
