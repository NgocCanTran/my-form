import LoginForm from "@/components/form/login-form";
import Image1 from "@/public/images/image3.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-wrap rounded-lg p-16 gap-12 bg-blue-600 justify-center">
        <Image className="rounded-lg h-86 w-auto " src={Image1} alt="Image Left"></Image>
        <LoginForm ></LoginForm>
      </div>
    </div>
  );
}
