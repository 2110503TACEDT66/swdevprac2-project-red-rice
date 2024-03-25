import SubBar from '@/components/subbar';
import PersonalDetails from '@/components/userprofile/personaldetails';
import Reservation from '@/components/userprofile/reservation';
import CardProfile from '@/components/userprofile/CardProfile';
import { getServerSession } from "next-auth"
import { authOptions } from '@/utils/authOption';
import { getme } from '@/lib/auth';
import { getAllResvation} from '@/lib/reservation';
export default async function me() {
    const session =await getServerSession(authOptions)
    if(!session || !session.user.token){
        return null
    }
    const profile =await getme(session.user.token)
    const data =await getAllResvation(session.user.token)
    console.log("data :" ,data)

    return (
        <main className="">
            <SubBar text="Punza's Profile" />
            <div className="w-[100%] flex flex-row justify-center ">
                <CardProfile
                    profile={profile}
                ></CardProfile>
            </div>

            <div className="w-[100%]  flex flex-row">
                <div className="w-[100%] h-[35%] flex tablet:flex-row flex-col">
                    <PersonalDetails profile={profile}></PersonalDetails>
                    <Reservation data={data}></Reservation>
                </div>
            </div>
        </main>
    );
}
