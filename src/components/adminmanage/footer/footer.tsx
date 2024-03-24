export default function Footer() {
    const start = 14;
    const page = 7;
    const total = 40;
    return (
        <div className="h-auto w-full mt-2 flex flex-row justify-between overflow-hidden">
            <div className="  ">
                <h3 className="text-slate-400">
                    Displaying {page} Out of {total}
                </h3>
            </div>
            <div className="  ">
                <h3 className="text-slate-400">
                    {start} - {start + page}
                </h3>
            </div>
        </div>
    );
}
