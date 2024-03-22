
import Image from "next/image";
export default function CardProfile({id,name,picture}:{id:string,name:string,picture:string}){
    return(
        <div className=" w-[90%] rounded-lg shadow-md m-1 flex flex-row ">
            <div className='w-[55px] h-[55px] relative rounded-full  p-10 m-3 ml-7  self-center '>
                <Image src={ picture }
                alt='Product Picture'
                fill={true}
                className= 'object-cover rounded-full '
                />
            </div>
            <div className='w-[60%]  relative right-0  m-3 self-center flex flex-col flex-start '>
                <div className='w-[300px]  m-1  '>{name}</div> 
                <div className='w-[300px] m-1  '><h1>Humble student from Chulalongkorn</h1></div> 
                <div className='w-[300px] m-1  '><h1>2005</h1></div> 
            </div>
            
        </div>
    )
}