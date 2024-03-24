import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import BackBtn from '../backbtn';
export default function SubBar() {
    return (
        <div className="flex flex-row">
            <BackBtn></BackBtn>
            <div className="w-[20%] m-5 text-xl self-center">
                User Management
            </div>
            <div className="w-[80%]  mr-[8%] flex flex-row justify-end">
                <label htmlFor="Search">
                    <FiSearch className="relative top-[53px] left-[35px]" />
                    <input
                        type="text"
                        id="Search"
                        name="Search"
                        placeholder="Search"
                        className=" m-5 text-xl flex flex-row rounded-lg bg-slate-50 w-[300px] h-[50px] indent-11 text-slate-800 hover:bg-slate-100"
                    />
                </label>
            </div>
        </div>
    );
}
