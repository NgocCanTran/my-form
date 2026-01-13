"use client";
import Header from "../layout/header";

const LoginForm = () => {

    const validateValueInput = () => {

        const username = document.getElementById('username') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        const valueUsername = username.value;
        const valuePassword = password.value;

        const usernameRegex = `/^[a-zA-Z0-9]{6,16}$/`;
        const passwordRegex = `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/`;

        if (valueUsername.trim() === "" || valuePassword.trim() === "") {
            alert("The input field is not empty");
        } else if (!valueUsername.match(usernameRegex) || !valuePassword.match(passwordRegex)) {
            alert("The username or password are not correct")
        } else {

        }
    }

    return (
        <div className="relative rounded-lg items-center">
            <Header classN={"top-0 left-0"} text={"Login"}></Header>
            <div className="mt-10">
                <form>
                    <input id='username' type="text" className="my-5 bg-gray-200 focus:outline-none text-black block rounded-sm py-3 px-4 " placeholder="Enter the account name"></input>
                    <input id='password' className="my-5 bg-gray-200 focus:outline-none text-black block rounded-sm py-2 px-3 " type="password" placeholder="Enter the password"></input>
                    <button className="outline-none border hover:text-white  hover:bg-blue-500 hover:outline-none hover:border-none px-3 py-2 rounded-lg text-sm text-white mb-4">Forgot Password?</button>
                </form>
            </div>
            <button id='submit' className="border-none  hover:bg-blue-500 hover:border hover:border-white px-4 py-2 bg-blue-100 text-black rounded-sm text-lg" onClick={() => validateValueInput()}>Submit</button>
        </div>
    );
}

export default LoginForm;
