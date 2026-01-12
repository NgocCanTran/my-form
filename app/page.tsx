import LoginForm from "@/components/form/login-form";
import Image1 from "@/public/images/image3.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="inset-20 h-full w-full">
      <div className="flex mx-6 my-6 rounded-lg p-16 bg-gray-200">
        <div className="flex-1 items-center justify-center">
          <LoginForm ></LoginForm>
        </div>
        <div className="flex-1">
          <Image className="rounded-lg" src={Image1} alt="Image Left"></Image>
        </div>


      </div>
    </div>
  );
}


{/* <div className="flex-1 border border-red-500">
        container1
      </div>
      <div className="flex-1 border border-yellow-500">
        <Image className="w-auto h-screen" src={Image1} alt=""></Image>
      </div> */}
