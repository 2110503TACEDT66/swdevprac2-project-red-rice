'use client'
import Image from 'next/image';
import { getServerSession } from "next-auth"
import { authOptions } from '@/utils/authOption';
import { useSession } from 'next-auth/react';
export default function CardProfile({profile}:{profile:any}) 

{

    const picture = profile?.picture
    return (
        <div className=" w-[95%] rounded-lg shadow-md m-3 flex tablet:flex-row flex-col  ">
            <div className="w-[55px] h-[55px] relative rounded-full  p-10 m-3 ml-7  self-center ">
                <Image
                    src={picture || '/img/user/user1.png'}
                    alt="Product Picture"
                    fill={true}
                    className="object-cover rounded-full "
                />
            </div>
            <div className="w-[60%]  relative right-0  m-3 self-center flex flex-col tablet:items-start items-center">
                    <h1 >{profile.name}</h1>
                    {profile.edu?<h1>profile.edu</h1>:''}
                    {profile.bdy?<h1>profile.bdy</h1>:''}
            </div>
        </div>
    );
}
