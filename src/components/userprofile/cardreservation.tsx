import Image from 'next/image';
export default function CardReservation({
    id,
    name,
    time,
    picture,
}: {
    id: string;
    name: string;
    time: string;
    picture: string;
}) {
    var createAt = new Date(time);
 
    return (
        <div className="h-[15%] w-[90%] rounded-lg shadow-md m-1 flex flex-row hover:bg-slate-100">
            <div className="w-[45px] h-[45px] relative rounded-lg  p-5 m-5 ml-5 mr-5  self-center ">
                <Image
                    src={picture}
                    alt="Product Picture"
                    fill={true}
                    className="object-cover rounded-lg "
                />
            </div>
            <div className="w-[20%]  m-3  self-center text-sm">{name}</div>
            <div className="w-[100%]  relative right-0  m-3 self-center flex flex-row justify-end text-sm ml-3">
                <div className="w-[95%] m-1 self-center flex flex-row text-sm  justify-end  text-center">
                    <h1 className="mr-5 ">
                        {time.split('T')[1].substring(0, 5)}
                    </h1>
                    <h1 className="">{time.split('T')[0]} </h1>
                </div>
            </div>
        </div>
    );
}
