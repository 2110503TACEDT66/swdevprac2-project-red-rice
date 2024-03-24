import React from 'react';
import RegisterForm from '@/components/auth/LoginForm';
import EatingBanner from '/public/img/banner.svg';
import Image from 'next/image';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <main className="flex justify-center">
            <section className="bg-white w-4/6 p-40 space-y-12">
                <h2 className="text-4xl font-bold">Log In to Your Account</h2>
                <div className="flex flex-col items-center space-y-12">
                    <RegisterForm />
                    <span className="text-gray-400 text-xl font-light space-x-2">
                        <span>Don&apos;t have an account yet?</span>
                        <Link
                            href="/auth/register"
                            className="text-redrice-light-yellow cursor-pointer hover:underline"
                        >
                            Sign up
                        </Link>
                    </span>
                </div>
            </section>
            <section className="bg-redrice-light-yellow w-2/6 p-12 space-y-40">
                <div className="space-y-40">
                    <header>
                        <h2 className="text-2xl font-bold text-white">
                            Red Rice
                        </h2>
                        <p className="text-xs text-white">
                            A restaurant booking platform.
                        </p>
                    </header>
                    <section>
                        <span className="text-5xl font-semibold text-white space-y-4">
                            <div>Reserve Your Table for</div>
                            <div>an Unforgettable</div>
                            <div>Dining Experience</div>
                        </span>
                    </section>
                </div>
                <Image
                    src={EatingBanner}
                    alt="Eating Banner"
                    width={500}
                    height={500}
                />
            </section>
        </main>
    );
};

export default RegisterPage;
