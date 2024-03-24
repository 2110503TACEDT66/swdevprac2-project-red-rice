import Image from "next/image"
import Link from "next/link"
export default function DonePage({head,detail,path}:{head:string,detail:String,path:string}){
    return(
        <div className="w-full h-[80%] flex  justify-center items-center ">
            
            <div className="w-[60%] h-[40%]  flex flex-col items-center  ">
                <div className="w-full h-[50%] flex  justify-center items-center">
                <div className='w-[55px] h-[55px] relative rounded-full  p-10 m-3  self-center '>
                        <Image src={ '/img/component/check.png'}
                        alt='Product Picture'
                        fill={true}
                        className= 'object-cover rounded-full '
                        />
                    </div>
                </div>
                    <div className=" text-4xl bold text-center m-3 font-semibold">{head}</div>
                    <Link href={path} className="hover:underline "><div className="text-center m-3 text-sm text-slate-400 font-semibold">{detail}</div></Link>
            </div>
               
 
            
            
        </div>
    )
}