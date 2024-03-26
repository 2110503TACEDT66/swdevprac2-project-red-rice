'use client';
import React, { useState } from 'react';
import Card from './card';
import { mockUser } from '@/mock/user';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import User from '@/types/user';

export default function CardPanel({data}:{data:Array<User>}) {
    const mockData = data;
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const startIndex = (page - 1) * limit;

    const visibleData = mockData.slice(startIndex, startIndex + limit);

    const totalPages = Math.ceil(mockData.length / limit);

    const handlePageChange = (newPage: any) => {
        setPage(Math.max(1, Math.min(newPage, totalPages)));
    };

    const isPreviousDisabled = page === 1;
    const isNextDisabled = page === totalPages;

    return (
        <div className="w-full h-screen flex flex-col items-center mt-5">
            {visibleData.map((item:User) => (
                <Card
                    key={item.ID}
                    id={item.ID}
                    name={item.name}
                    role={item.role}
                    email={item.email}
                    tel={item.telephone}
                    picture={item.picture}
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
    );
}
