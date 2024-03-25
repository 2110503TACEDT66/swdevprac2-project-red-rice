'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { getme } from '@/lib/auth';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [login, setLogin] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const { data: session } = useSession();
    useEffect(() => {
        if (session) {
            setLogin(true);
        }
    }, []);

    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            if (session?.user.token) {
                const user = await getme(session.user.token);
                setUserRole(user.role);
            }
        };
        fetchUsers();
    }, [session]);

    return (
        <nav className="relative">
            <div className="mx-auto px-4 md:px-6">
                <div className="relative flex items-center justify-between h-24">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="flex flex-row items-center"
                            >
                                <Image
                                    src={'/redrice-logo.png'}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="relative"
                                />
                                <h1 className="font-bold md:text-2xl">
                                    Red Rice
                                </h1>
                            </Link>
                        </div>
                        {login ? (
                            <div className="hidden sm:block">
                                <div className="flex space-x-4 gap-6 items-center justify-center h-full">
                                    {userRole === 'admin' && (
                                        <Link
                                            href="/admin/manage"
                                            className="rounded-md text-xl lg:text-2xl font-semibold hover:text-redrice-yellow ease-in duration-300"
                                        >
                                            Management
                                        </Link>
                                    )}
                                    <Link
                                        href="/reservation"
                                        className="rounded-md text-xl lg:text-2xl font-semibold hover:text-redrice-yellow ease-in duration-300"
                                    >
                                        Reservation
                                    </Link>
                                    <Link
                                        href="/restaurant"
                                        className="rounded-md text-xl lg:text-2xl font-semibold hover:text-redrice-yellow ease-in duration-300"
                                    >
                                        Restaurant
                                    </Link>
                                    <Link href={"/profile"}>
                                        <Image
                                            src={'/img/profile.svg'}
                                            alt="logo"
                                            width={50}
                                            height={50}
                                            className="relative rounded-full border-4 border-redrice-yellow"
                                        />
                                    </Link>
                                    
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setLogin(true)}
                                className="font-bold text-white py-3 px-4 bg-redrice-yellow rounded-[1rem]  hover:text-black ease-in duration-300"
                            >
                                Sign Up
                            </button>
                        )}
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {login ? (
                            <button
                                onClick={toggleNavbar}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-redrice-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>

                                {isOpen ? (
                                    <p className="text-2xl">
                                        <IoClose />
                                    </p>
                                ) : (
                                    <p className="text-2xl">
                                        <IoMenu />
                                    </p>
                                )}
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 bg-redrice-yellow">
                        <Link
                            href="/profile"
                            className="text-white block px-3 py-2 text-base font-medium  hover:text-black hover:font-bold ease-in duration-300 border-b-2"
                        >
                            Profile
                        </Link>
                        {userRole === 'admin' && (
                            <Link
                                href="/admin/manage"
                                className="text-white block px-3 py-2 text-base font-medium hover:text-black hover:font-bold ease-in duration-300 border-b-2"
                            >
                                Management
                            </Link>
                        )}
                        <Link
                            href="/reservation"
                            className="text-white block px-3 py-2 text-base font-medium hover:text-black hover:font-bold ease-in duration-300 border-b-2"
                        >
                            Reservation
                        </Link>
                        <Link
                            href="/restaurant"
                            className="text-white block px-3 py-2 text-base font-medium  hover:text-black hover:font-bold ease-in duration-300 border-b-2"
                        >
                            Restaurant
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
