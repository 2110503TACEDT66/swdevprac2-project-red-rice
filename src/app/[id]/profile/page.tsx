import SubBar from "@/components/subbar"
import PersonalDetails from "@/components/userprofile/personaldetails"
import Reservation from "@/components/userprofile/reservation"
import CardProfile from "@/components/userprofile/CardProfile"
export default function profile({params}:{params:{id:string}}){
    return(
        <main className="">
            <SubBar text={`${params.id.toString()}'s Profile`}></SubBar>
            <div className="w-full flex flex-row justify-center">
            <CardProfile id={params.id} name="Sirawit Chanaburanasak"  picture="/img/user/user1.png"></CardProfile>
            </div>
            
            <div className="w-full flex flex-row justify-center ">
                <div className="w-[95%] h-[35%] flex flex-row content-center ">
                    <PersonalDetails></PersonalDetails>
                    <Reservation></Reservation>
                </div>
            </div>
            
        </main>
    )
}