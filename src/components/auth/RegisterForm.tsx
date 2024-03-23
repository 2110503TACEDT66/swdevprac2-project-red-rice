import React from 'react';
import GoogleLogo from '/public/img/google.svg';
import GithubLogo from '/public/img/github.svg';
import TwitterLogo from '/public/img/twitter.svg';
import InstagramLogo from '/public/img/instagram.svg';
import Image from 'next/image';
const RegisterForm = () => {
    return (
        <form className="space-y-10 bg-white rounded-lg mx-auto w-full">
            <div className="flex flex-col space-y-10">
                <input
                    className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    className="border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="email"
                    placeholder="Email Address"
                />
                <input
                    className="border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="tel"
                    placeholder="Telephone"
                />
                <input
                    className="border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="password"
                    placeholder="Password"
                />
                <button className="w-full bg-redrice-light-yellow text-white p-3 rounded-full hover:bg-yellow-500 transition duration-300 font-bold text-xl">
                    Sign Up
                </button>
            </div>

            <div className="relative flex items-center justify-center">
                <hr className="absolute w-full border-t border-gray-300" />
                <p className="relative bg-white px-3 text-gray-500 text-xl font-light">
                    Or Sign Up With
                </p>
            </div>

            <div className="flex justify-center space-x-8">
                <button className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm flex items-center justify-center hover:border-gray-500 transition duration-300">
                    <Image
                        src={GoogleLogo}
                        alt="Google Logo"
                        width={30}
                        height={30}
                    />
                </button>
                <button className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm flex items-center justify-center hover:border-gray-500 transition duration-300">
                    <Image
                        src={GithubLogo}
                        alt="Github Logo"
                        width={30}
                        height={30}
                    />
                </button>
                <button className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm flex items-center justify-center hover:border-gray-500 transition duration-300">
                    <Image
                        src={TwitterLogo}
                        alt="Twitter Logo"
                        width={30}
                        height={30}
                    />
                </button>
                <button className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm flex items-center justify-center hover:border-gray-500 transition duration-300">
                    <Image
                        src={InstagramLogo}
                        alt="Instagram Logo"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
