"use client";
import React from "react";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const OtherLogin = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-[400px] w-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <Button
            onClick={() => router.push("/dang-ky")}
            propClassName="w-full"
            text="Tạo tài khoản Aqara"
            variant="transparent"
            type="submit"
          />
          <span className="text-xs font-light ">- Or log in with -</span>
          <Button
            propClassName="w-full"
            text="Google"
            imageSrc="/images/social/google.png"
            imageAlt="Login with google"
            variant="transparent"
            type="submit"
          />
          <span className="text-xs text-[#707070]">
            Bằng cách đăng nhập bằng tài khoản bên thứ ba, bạn xác nhận rằng bạn
            đã đọc và đồng ý với Chính sách quyền riêng tư và Điều khoản sử dụng
            của Aqara.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OtherLogin;
