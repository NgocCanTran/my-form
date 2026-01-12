import LogoIcon from "./logo-icons";

const Welcome = () => {
    return (
        <div className="border border-red-600 p-3 mb-4 flex-1">
            <LogoIcon></LogoIcon>
            <div className="text-black font-bold text-xl">GillTran, Wellcome Back</div>
            <div className="text-gray-500 font-medium text-sm">Hey, Welcome back to your special place</div>
        </div>
    );
}

export default Welcome;