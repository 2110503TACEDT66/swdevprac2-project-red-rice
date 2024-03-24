'use client'
import BackBtn from "./adminmanage/backbtn"
export default function SubBar({text}:{text:string}){

    return(
        <div className="flex flex-row w-full">
            <BackBtn></BackBtn>
            <h1 className="w-full ml-5 self-center text-3xl bold">{text}</h1>
        </div>
    )
}