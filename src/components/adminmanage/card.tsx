
import Image from "next/image";
export default function Card({id,name,role,email,tel,picture}:{id:string,name:string,role:string,email:string,tel:string,picture?:string}){
    return(
        <div className="h-[80%] w-[80%] rounded-lg shadow-md m-1 flex flex-row">
            <div className='w-[10px] h-[10px] relative rounded-full  p-5 m-3 border-solid border-2 border-slate-400 self-center '>
                <Image src={ picture || '/img/user/user1.png'}
                alt='Product Picture'
                fill={true}
                className= 'object-cover rounded-full '
                />
            </div>
            <div className="flex flex-col w-[100px] h-[10%] m-3 self-center">
                <div className=''>{name}</div> 
                <div className='text-slate-400'>{role}</div> 
            </div>
            <div className='w-[200px] h-[10%] m-3 self-center '>{email}</div> 
            <div className='w-[100px] h-[10%] m-3  self-center'>{tel}</div> 
            <div className='w-[60%] h-[10%] relative right-0  m-3 self-center flex flex-row justify-end '>
            <button className='block h-[10%] w-[150px] text-sm rounded-full bg-redrice-yellow 
            hover:bg-redrice-light-yellow  p-1 m-3  shadow-sm text-white'>view details</button>
            </div>
            
        </div>
    )
}