import React from 'react';
import { IoClose } from 'react-icons/io5';

const ConfirmReserve = ({ restaurant }: { restaurant: string }) => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 px-5">
                <div className="px-10 py-10 bg-white shadow-lg rounded-[1rem] relative">
                    <div className="m-3 p-1 rounded-full top-0 right-0 bg-redrice-red absolute text-white">
                        <IoClose />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="mb-4 text-xl font-bold">
                            Are you sure for reserving at {restaurant} ?
                        </h1>
                        <div className="flex flex-row gap-3">
                            <button className="bg-redrice-green py-2 px-3 w-28 text-white font-semibold rounded-[1rem] hover:bg-green-400">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmReserve;
