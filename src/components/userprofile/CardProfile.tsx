'use client';
import Image from 'next/image';
import { FaUserAlt } from 'react-icons/fa';
export default function CardProfile({ profile }: { profile: any }) {
    const picture = profile?.picture;
    return (
        <div className="w-full rounded-lg shadow-md flex flex-row border-2 mt-5">
            <div className="m-5 relative rounded-full border-4 border-black hover:border-redrice-yellow p-2 text-2xl hover:text-redrice-yellow">
                <FaUserAlt />
            </div>

            <div className="w-[60%]  relative right-0  m-3 self-center flex flex-col tablet:items-start items-center">
                <h1>{profile.name}</h1>
                {profile.edu ? <h1>profile.edu</h1> : ''}
                {profile.bdy ? <h1>profile.bdy</h1> : ''}
            </div>
        </div>
    );
}
