import Searchbox from '@/components/Searchbox';

export default function SubBar() {
    return (
        <div className="flex flex-row justify-between items-center flex-wrap">
            <div className='flex flex-row items-center'>
                <h1 className="text-3xl md:text-4xl font-semibold">
                    User Management
                </h1>
            </div>
            <div className="mt-3 md:mt-0 w-full md:w-1/3">
                <Searchbox />
            </div>
        </div>
    );
}
