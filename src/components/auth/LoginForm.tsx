'use client';
import React, { FormEvent, useState } from 'react';
import GoogleLogo from '/public/img/google.svg';
import GithubLogo from '/public/img/github.svg';
import TwitterLogo from '/public/img/twitter.svg';
import InstagramLogo from '/public/img/instagram.svg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const result = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        })
        console.log(email, password, result)
        if (result) {
            router.push('/restaurant');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-10 bg-white rounded-lg mx-auto w-full"
        >
            <div className="flex flex-col space-y-10">
                <input
                    className="border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-redrice-light-yellow text-white p-3 rounded-full hover:bg-yellow-500 transition duration-300 font-bold text-xl"
                >
                    Sign In
                </button>
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

export default LoginForm;
