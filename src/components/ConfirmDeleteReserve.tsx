"use client"
import React from 'react';

const ConfirmDeleteReserve = ({ restaurant, onCancel, onConfirm }: { restaurant: string, onConfirm : () => void, onCancel : () => void }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 px-5">
            <div className="px-10 py-10 bg-white shadow-lg rounded-[1rem] flex flex-col justify-center items-center">
                <h1 className='mb-4 text-xl font-bold'>Are you sure for delete Reservation at {restaurant} ?</h1>
                <div className='flex flex-row gap-3'>
                    <button className='bg-redrice-green py-2 px-3 w-28 text-white font-semibold rounded-[1rem] hover:bg-green-400' onClick={onConfirm}>Confirm</button>
                    <button className='bg-redrice-red py-2 px-3 w-28 text-white font-semibold rounded-[1rem] hover:bg-red-400' onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteReserve;
