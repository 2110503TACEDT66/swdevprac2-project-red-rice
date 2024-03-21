import React from "react"
import CardPanel from "@/components/adminmanage/cardpanel"
import SubBar from "@/components/adminmanage/subbar/subbar"
export default function AdminManage(){
    
    return (
        <main className="relative top-[20px]">
            <SubBar></SubBar>
            <CardPanel></CardPanel>
        </main>
    )
}