import RegisterForm from "@/components/register/registerForm";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="mx-auto my-[120px]  h-full    2xl:max-w-[1120px]  sm:px-[15px] xl:px-[80px] xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
      <div className="grid grid-cols-10 bg-white rounded-xl">
        <div className="col-span-5">
          <Image
            width={500}
            height={600}
            src={"/images/login/login-banner.jpeg"}
            alt="Banner login"
            className="rounded-xl"
          />
        </div>
        <div className="col-span-5">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full">
              <div className=" mt-[50px] mb-3">
                <span className=" text-[24px] font-medium text-black">
                  Tạo tài khoản Aqara
                </span>
              </div>

              <RegisterForm />

              <div className="mt-[20px] text-center">
                <Link href={"/dang-nhap"} className="text-base font-medium">
                  Bạn đã có tài khoản? Đăng nhập tại đây.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
