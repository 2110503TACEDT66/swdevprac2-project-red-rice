import Image from 'next/image';
export default function CardProfile({
    id,
    name,
    picture,
}: {
    id: string;
    name: string;
    picture: string;
}) {
    return (
        <div className=" w-[95%] rounded-lg shadow-md m-3 flex tablet:flex-row flex-col  ">
            <div className="w-[55px] h-[55px] relative rounded-full  p-10 m-3 ml-7  self-center ">
                <Image
                    src={picture}
                    alt="Product Picture"
                    fill={true}
                    className="object-cover rounded-full "
                />
            </div>
            <div className="w-[60%]  relative right-0  m-3 self-center flex flex-col tablet:items-start items-center">
                    <h1 >{name}</h1>
                    <h1>Chulalongkorn</h1>
                    <h1>2005</h1>
            </div>
        </div>
    );
}
