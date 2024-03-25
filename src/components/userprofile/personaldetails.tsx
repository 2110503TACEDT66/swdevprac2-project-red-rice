export default function PersonalDetails(profile:any) {
    return (
        <div className="tablet:w-[35%] h-[500px] text-center m-3 mr-0 rounded-lg  flex flex-col shadow-lg w-[95%]">
            <h2 className="m-5 mb-3  ">Personal Details</h2>
            <hr className="w-[95%] relative left-[2.5%] border-slate-400" />
            <h4 className="m-5">Gender</h4>
            <h4 className="m-5 mt-0 text-slate-400">{profile.gender?profile.gender:'null'}</h4>
            <h4 className="m-5">Telephone</h4>
            <h4 className="m-5 mt-0 text-slate-400">0922698678</h4>
            <h4 className="m-5">Email Address</h4>
            <h4 className="m-5 mt-0 text-slate-400">punpunza007@gmail.com</h4>
            <h4 className="m-5">Date Created</h4>
            <h4 className="m-5 mt-0 text-slate-400">{profile.DateCreated?profile.DateCreated:'null'}</h4>
        </div>
    );
}
