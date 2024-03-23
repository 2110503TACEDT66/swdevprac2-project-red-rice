import BackBtn from "../adminmanage/backbtn"
export default function SubBar(){
    const name="PunZa007x"
    return(
        <div className="flex flex-row ">
            <BackBtn></BackBtn>
            <h1 className="ml-5 self-center">{name}’s Profile</h1>
        </div>
    )
}