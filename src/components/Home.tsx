import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Home = () => {
    
    return (
        <main
            className="px-10 w-full lg:h-screen overflow-y-auto flex justify-center flex-wrap bg-cover gap-10 gap-auto max-gap-10"
            // style={{ backgroundImage: "url('/img/background.png')" }}
        >
            <div className="mt-5 flex justify-start flex-col">
                <div className="lg:hidden flex justify-center mb-10">
                    <Image
                        src="/img/restaurant_bg.png"
                        alt="restaurant"
                        width={550}
                        height={550}
                        className='rounded-[2rem] object-cover shadow-xl'
                    />
                </div>
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold pb-3 lg:pt-32">
                    Discover and Reserve
                </h1>
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-redrice-yellow pb-2 md:pb-3">
                    Book a Restaurant with ease!
                </h1>
                <p className="mt-5 pb-8 md:pb-16">
                    Discover a seamless way to secure your dining plans with our
                    intuitive reservation platform.
                </p>
                <Link href = '/restaurant' className="bg-redrice-yellow py-4 rounded-[2rem] font-bold text-white w-52 hover:bg-redrice-light-yellow text-center">
                    Book Reservation Now
                </Link>
            </div>
            <div className="hidden lg:block lg:pt-24 h-auto rounded-lg">
                <Image
                    src="/img/restaurant_bg.png"
                    alt="restaurant"
                    width={550}
                    height={550}
                    className='rounded-[2rem] object-cover shadow-xl'
                />
            </div>
        </main>
    );
};

export default Home;
