'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import GoogleLogo from '/public/img/google.svg';
import GithubLogo from '/public/img/github.svg';
import TwitterLogo from '/public/img/twitter.svg';
import InstagramLogo from '/public/img/instagram.svg';
import Image from 'next/image';
import axios from 'axios';
import { register } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export interface FormData {
    name: string;
    email: string;
    telephone: string;
    password: string;
    role: string;
}

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        telephone: '',
        password: '',
        role: 'user',
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            console.log('register successful:', response);
            router.push('/auth/login')
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-10 bg-white rounded-lg mx-auto w-full"
        >
            <div className="flex flex-col space-y-10">
                <input
                    name="username"
                    className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    className="border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    name="telephone"
                    className="border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="tel"
                    placeholder="Telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    className="border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-yellow-500"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="w-full bg-redrice-light-yellow text-white p-3 rounded-full hover:bg-yellow-500 transition duration-300 font-bold text-xl"
                >
                    Sign Up
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

export default RegisterForm;
