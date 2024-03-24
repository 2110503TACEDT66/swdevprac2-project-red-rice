export default function Footer() {
    const start = 14;
    const page = 7;
    const total = 40;
    return (
        <div className="h-auto w-full mt-2 flex flex-row justify-between overflow-hidden">
            <div className="h-[100%] w-[45%]   ">
                <h3 className="relative top-[25%] left-[10%] text-slate-400">
                    Displaying {page} Out of {total}
                </h3>
            </div>
            <div className="h-[100%] w-[45%]  ">
                <h3 className="relative top-[25%] left-[70%] text-slate-400">
                    {start} - {start + page}
                </h3>
            </div>
        </div>
    );
}
