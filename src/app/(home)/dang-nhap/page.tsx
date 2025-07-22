import LoginForm from "@/components/login/loginForm";
import OtherLogin from "@/components/login/otherLogin";
import Button from "@/components/ui/button";
import { BaggageClaim, Database, TicketPercent } from "lucide-react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="mx-auto my-[120px]  h-full    2xl:max-w-[1120px]  sm:px-[15px] xl:px-[80px] xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
      <div className="grid grid-cols-10 bg-white rounded-xl">
        <div className="col-span-5">
          <Image
            width={500}
            height={850}
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
                  Đăng nhập
                </span>
              </div>

              <LoginForm />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="max-w-[400px] w-full">
              <div className="text-center">
                <span className="font-semibold">
                  Hãy đăng ký để nhận ngay ưu đãi đặc biệt:
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col gap-1 items-center text-center">
                  <Database strokeWidth={1.25} />
                  <p className="text-xs font-light text-muted-foreground">
                    Coupon độc quyền cho thành viên
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center text-center">
                  <BaggageClaim strokeWidth={1.25} />
                  <p className="text-xs font-light text-muted-foreground">
                    Ưu tiên nhận ưu đãi sớm
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center text-center">
                  <TicketPercent strokeWidth={1.25} />
                  <p className="text-xs font-light text-muted-foreground">
                    Theo dõi đơn hàng dễ dàng
                  </p>
                </div>
              </div>
            </div>
          </div>

          <OtherLogin />
        </div>
      </div>
    </div>
  );
}
