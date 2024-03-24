'use client'
import Image from "next/image"
import { FiSearch } from "react-icons/fi";
import BackBtn from "../backbtn";
import SubBar from "@/components/subbar";
export default function SubBarManage(){
    return(
        <div className="flex flex-row">
            <div className="w-[20%] ml-[8%] self-center ">
                <SubBar text="User Management" ></SubBar>
            </div>
            <div className="w-[80%] mr-[8%] flex flex-row justify-end self-center">
                <label htmlFor="Search">
                <FiSearch className="relative top-[53px] left-[35px]"/>
                <input type="text"  id="Search" name="Search" placeholder="Search" className=" m-5 text-xl flex flex-row rounded-lg bg-slate-50 w-[300px] h-[50px] indent-11 text-slate-800 hover:bg-slate-100"/>
                </label>
            </div>
            
        </div>
    )
}


