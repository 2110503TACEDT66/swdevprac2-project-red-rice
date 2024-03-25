import SubBar from '@/components/subbar';
import PersonalDetails from '@/components/userprofile/personaldetails';
import Reservation from '@/components/userprofile/reservation';
import CardProfile from '@/components/userprofile/CardProfile';
export default function profile({ params }: { params: { id: string } }) {
    return (
        <main className="">
            <SubBar text="Punza's Profile" />
            <div className="w-[100%] flex flex-row justify-center ">
                <CardProfile
                    id={params.id}
                    name="Sirawit Chanaburanasak"
                    picture="/img/user/user1.png"
                ></CardProfile>
            </div>

            <div className="w-[100%]  flex flex-row">
                <div className="w-[100%] h-[35%] flex tablet:flex-row flex-col">
                    <PersonalDetails></PersonalDetails>
                    <Reservation></Reservation>
                </div>
            </div>
        </main>
    );
}
