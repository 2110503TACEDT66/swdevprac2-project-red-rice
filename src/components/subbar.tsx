'use client';

export default function SubBar({ text }: { text: string }) {
    return (
        <div className="flex flex-row justify-between items-center flex-wrap">
            <div className="flex flex-row items-center">
                <h1 className="text-3xl md:text-4xl font-semibold">{text}</h1>
            </div>
        </div>
    );
}
