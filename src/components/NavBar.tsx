'use client';
import { useState } from 'react';
import Link from 'next/link';
import Profile from "@/components/Profile";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='relative'>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-24">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-bold">
                               Logo
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 gap-6">
                                <Link
                                    href="/"
                                    className="hover:bg-gray-700 hover:text-white rounded-md text-2xl font-medium"
                                >
                                    Management
                                </Link>
                                <Link
                                    href="/about"
                                    className="hover:bg-gray-700 hover:text-white rounded-md text-2xl font-medium"
                                >
                                    Reservation
                                </Link>
                                <Link
                                    href="/about"
                                    className="hover:bg-gray-700 hover:text-white rounded-md text-2xl font-medium"
                                >
                                    Restaurant
                                </Link>
                                <div>
                                    <Profile />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleNavbar}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for the mobile menu */}
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
                        <Link
                            href="/"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>
                        {/* Add more links as needed */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
