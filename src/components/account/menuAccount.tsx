"use client";

import { logout } from "@/apis/common/auth.apis";
import { CircleUserRound, LogOut, UserPen, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface MenuItem {
  icon?: LucideIcon;
  text: string;
  href?: string;
  type: "item" | "divider";
  onClick?: () => void;
}

export default function MenuAccount() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await logout();

    if (response.status && response.error_code === 200) {
      toast.success(response.message, {
        description: response.message,
        position: "top-center",
      });
    } else {
      toast.error(response.message, {
        description: response.message,
        position: "top-center",
      });
    }
    router.push("/dang-nhap");
  };

  const menuItems: MenuItem[] = [
    {
      icon: CircleUserRound,
      text: "Tổng quan tài khoản",
      type: "item",
    },
    {
      text: "Tài khoản",
      type: "divider",
    },
    {
      icon: UserPen,
      text: "Thông tin tài khoản",
      href: "/tai-khoan",
      type: "item",
    },
    {
      icon: LogOut,
      text: "Đăng xuất",
      type: "item",
      onClick: handleLogout,
    },
  ];

  const renderItem = (item: MenuItem, index: number) => {
    if (item.type === "divider") {
      return (
        <div key={index} className="px-5">
          <span className="text-xs text-[#9f9f9f]">{item.text}</span>
        </div>
      );
    }

    const MenuItem = (
      <div
        onClick={item?.onClick}
        className="py-3 px-5 flex items-center gap-1 hover:bg-[#FAFAFA] cursor-pointer"
      >
        {item.icon && <item.icon size={20} strokeWidth={1} />}
        <span className="text-sm">{item.text}</span>
      </div>
    );

    return item.href ? (
      <Link key={index} href={item.href}>
        {MenuItem}
      </Link>
    ) : (
      <div key={index}>{MenuItem}</div>
    );
  };

  return (
    <div className="col-span-3">
      <div className="bg-white rounded-md">{menuItems.map(renderItem)}</div>
    </div>
  );
}
