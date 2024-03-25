import DonePage from "@/components/DonePage";

export default function Test({params} : {params: {message: string, link: string}}) {
    return(
        <>
            <DonePage head={params.message} path={'/'+ params.link} detail={"Click here to go back"}></DonePage>
        </>
    )
}