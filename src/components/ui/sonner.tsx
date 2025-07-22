"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast relative overflow-hidden group-[.toaster]:bg-gradient-to-br from-emerald-50 to-blue-50 group-[.toaster]:text-gray-800 group-[.toaster]:border-2 group-[.toaster]:border-emerald-400 group-[.toaster]:shadow-xl group-[.toaster]:rounded-xl group-[.toaster]:animate-fade-in", // Nền gradient, viền đậm, bóng đổ lớn, bo tròn, hiệu ứng fade
          description: "group-[.toast]:text-blue-700 font-medium", // Mô tả nổi bật hơn
          actionButton:
            "group-[.toast]:bg-gradient-to-r from-emerald-600 to-blue-600 group-[.toast]:text-white group-[.toast]:font-semibold group-[.toast]:rounded-lg hover:group-[.toast]:from-emerald-700 hover:group-[.toast]:to-blue-700 transition-all duration-200 shadow-md", // Nút hành động gradient, bo tròn, bóng đổ, hiệu ứng hover
          cancelButton:
            "group-[.toast]:bg-white group-[.toast]:text-emerald-600 group-[.toast]:border-2 group-[.toast]:border-emerald-500 group-[.toast]:font-semibold group-[.toast]:rounded-lg hover:group-[.toast]:bg-emerald-50 transition-all duration-200 shadow-sm", // Nút hủy viền emerald, nền trắng, hiệu ứng hover
          success:
            "group-[.toast]:bg-gradient-to-br from-emerald-100 to-green-50 group-[.toast]:text-emerald-800 group-[.toast]:border-emerald-600",
          error:
            "group-[.toast]:bg-gradient-to-br from-red-100 to-rose-50 group-[.toast]:text-red-800 group-[.toast]:border-red-600",
          warning:
            "group-[.toast]:bg-gradient-to-br from-yellow-100 to-amber-50 group-[.toast]:text-yellow-800 group-[.toast]:border-yellow-600",
          info: "group-[.toast]:bg-gradient-to-br from-blue-100 to-cyan-50 group-[.toast]:text-blue-800 group-[.toast]:border-blue-600",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
