import Buttons from "../buttons/buttons-login";
import Welcome from "../logo/logo-welcome";

const LoginForm = () => {
    return (
        <div className="border rounded-lg m-3 items-center">
            <Welcome></Welcome>
            <div className="">
                <form>
                    <input className="border border-gray-400 rounded-sm py-3 px-4 outline-none" placeholder="Enter the account name"></input>
                    <input className="my-5 border border-gray-400 block rounded-sm py-3 px-4 outline-none" type="password" placeholder="Enter the password"></input>
                    <div className="flex justify-between">
                        <div className="items-start">
                            <input className="h-4 w-4" type="checkbox"></input>
                            <label className="ml-2 text-sm text-gray-500">Remember me</label>
                        </div>
                        <button className="outline-none text-sm text-gray-600 mb-4">Forgot Password?</button>
                    </div>
                </form>
            </div>
            <Buttons text={"Submit"} classN={"mb-5"}></Buttons>
            <div className="">Do not have an account? <button className="text-pink-600">Sign Up</button></div>
        </div>
    );
}

export default LoginForm;