import Image from "next/image"
import { FiSearch } from "react-icons/fi";
export default function SubBar(){
    return(
        <div className="flex flex-row">
            <div className="w-[40px] h-[40px] relative  m-3 ml-20  self-center bg-slate-200 rounded-full hover:bg-slate-100">
                <div className='w-10 h-10 relative top-[10px] left-[10px]'>
                    <Image src={ '/img/component/back.png'}
                    alt='Product Picture'
                    width={20}
                    height={20}
                    className= 'object-cover '
                    />
                </div>
            </div>
            <div className="w-[20%] m-5 text-xl self-center">
            User Management
            </div >
            <div className="w-[80%]  mr-36 flex flex-row justify-end">
                <label htmlFor="Search">
                <FiSearch className="relative top-[53px] left-[35px]"/>
                <input type="text"  id="Search" name="Search" placeholder="Search" className=" m-5 text-xl flex flex-row rounded-lg bg-slate-50 w-[300px] h-[50px] indent-11 text-slate-800 hover:bg-slate-100"/>
                </label>
            </div>
            
        </div>
    )
}


