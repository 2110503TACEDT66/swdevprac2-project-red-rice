import React from 'react';
import Image from 'next/image';

const Home = () => {
    return (
        <main className="pl-12 pr-10 w-full h-screen overflow-y-auto flex justify-between flex-wrap bg-cover" style={{backgroundImage: "url('/img/background.png')"}}>
            
            <div className="mt-5 flex justify-start flex-col">
            <div className="lg:hidden flex justify-center md:ml-14">
                <Image
                    src="/img/restaurant.png"
                    alt="restaurant"
                    width={550}
                    height={550}
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
                <button className="bg-redrice-yellow py-4 rounded-[2rem] font-bold text-white w-52 hover:bg-redrice-light-yellow">
                    Book Reservation Now
                </button>
            </div>
            <div className="hidden lg:block lg:pt-24 h-auto">
                <Image
                    src="/img/restaurant.png"
                    alt="restaurant"
                    width={550}
                    height={550}
                />
            </div>
        </main>
    );
};

export default Home;
