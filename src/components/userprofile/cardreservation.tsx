
import Image from "next/image";
export default function CardReservation({id,name,time,picture}:{id:string,name:string,time:string,picture:string}){
    return(
        <div className="h-[15%] w-[90%] rounded-lg shadow-md m-1 flex flex-row hover:bg-slate-100">
            <div className='w-[45px] h-[45px] relative rounded-lg  p-5 m-5 ml-5 mr-5  self-center '>
                <Image src={ picture }
                alt='Product Picture'
                fill={true}
                className= 'object-cover rounded-lg '
                />
            </div>
            <div className='w-[200px]  m-3  self-center'>{name}</div> 
            <div className='w-[60%]  relative right-0  m-3 self-center flex flex-row justify-end '>
            <div className='w-[200px] m-3  self-center'>{time}</div> 
            </div>
            
        </div>
    )
}