

import { Link } from "@mui/material"
import Image from "next/image"
export default function BackBtn(){

    return(
        <div className="w-[40px] h-[40px] relative  m-3 ml-[8%]  self-center bg-slate-200 rounded-full hover:bg-slate-100" >
                <div className='w-10 h-10 relative top-[10px] left-[10px]'>
                    <Image src={ '/img/component/back.png'}
                    alt='Product Picture'
                    width={20}
                    height={20}
                    className= 'object-cover '
                    />
                </div>
            </div>
    )
}