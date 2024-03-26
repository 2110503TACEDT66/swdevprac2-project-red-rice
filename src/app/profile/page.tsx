import SubBar from '@/components/subbar';
import PersonalDetails from '@/components/userprofile/personaldetails';
import Reservation from '@/components/userprofile/reservation';
import CardProfile from '@/components/userprofile/CardProfile';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOption';
import { getme } from '@/lib/auth';
import { getReservationByIdUser } from '@/lib/reservation';

export default async function me() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) {
        return null;
    }
    const profile = await getme(session.user.token);
    const data = await getReservationByIdUser(session.user.token, profile.ID);

    return (
        <main className="pl-12 pr-10 w-full h-screen overflow-y-auto ">
            <SubBar text={`${profile.name}'s Profile`} />

            <div className="w-full flex flex-row justify-center">
                <CardProfile profile={profile} />
            </div>

            <div className="w-full flex flex-row">
                <div className="w-[100%] h-[35%] flex flex-col md:flex-row">
                    <PersonalDetails profile={profile} />
                    <Reservation data={data} />
                </div>
            </div>
        </main>
    );
}
