'use client';

export default function SubBar({ text }: { text: string }) {
    return (
        <div className="flex flex-row w-full">
            <h1 className="w-full ml-5 self-center text-3xl bold font-semibold relative left-[8%]">
                {text}`s profile
            </h1>
        </div>
    );
}
