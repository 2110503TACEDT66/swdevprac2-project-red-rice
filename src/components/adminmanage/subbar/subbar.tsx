import BackBtn from '../backbtn';
import Searchbox from '@/components/Searchbox';

export default function SubBar() {
    return (
        <div className="flex flex-row">
            <BackBtn />
            <div className="w-[20%] m-5 text-xl self-center">
                User Management
            </div>
            <div className="w-[80%]  mr-[8%] flex flex-row justify-end">
                <label htmlFor="Search">
                    <Searchbox />
                </label>
            </div>
        </div>
    );
}
