import DonePage from "@/components/DonePage";

export default function Test(){
    return(
        <>
            <DonePage head={"Your Restaurant has been Created!"} path={"/restaurant"} detail={"Click here to go to restaurant page"}></DonePage>
        </>
    )
}