import { AiFillAlert } from "react-icons/ai";

const LogoIcon = () => {
    return (
        <div className="flex gap-2 items-center mb-2 ">
            <AiFillAlert className="w-6 h-auto"></AiFillAlert>
            <div className="font-bold text-red-500 text-lg">GillTran</div>
        </div>
    );
}

export default LogoIcon;