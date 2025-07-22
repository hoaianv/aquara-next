"use client";
import React, { useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; // Dùng resolver để kết hợp Zod và React Hook Form
import InputField from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";
import { brand } from "@/constants/routes";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { login } from "@/apis/common/auth.apis";

const loginSchema = z.object({
  username: z.string().min(1, "Tên tài khoản là bắt buộc"), // Đảm bảo trường này không được bỏ trống
  password: z
    .string()

    .min(1, "Mật khẩu là bắt buộc"),
  brand: z.string().min(1, "Thương hiệu là bắt buộc"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      brand: brand,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = (data: LoginFormData) => {
    startTransition(async () => {
      const response = await login(data);

      if (!response?.status && response?.errors) {
        Object.entries(response.errors).forEach(([field, messages]) =>
          setError(field as keyof LoginFormData, {
            type: "server",
            message: Array.isArray(messages) ? messages[0] : messages,
          })
        );
        return;
      } else {
        reset();
        router.push("/");
        toast.success(response.message, {
          description: "Chào mừng bạn đến với hệ thống!",
          position: "top-center",
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <Controller
        name="username"
        control={control}
        render={({ field }) => {
          return (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="username"
              label="Tên tài khoản"
              error={errors.username}
            />
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputField
            onChange={field.onChange}
            value={field.value}
            id="password"
            label="Mật khẩu"
            type="password"
            error={errors.password}
          />
        )}
      />
      <Controller
        name="brand"
        control={control}
        render={({ field }) => (
          <InputField
            classProps="hidden"
            value={brand}
            id="brand"
            label=""
            error={errors.brand}
          />
        )}
      />

      <div className="text-end">
        <Link href={"/forgot"} className="text-[#999] text-xs">
          Quên mật khẩu?
        </Link>
      </div>
      <Button
        propClassName="w-full"
        text="Đăng nhập"
        variant="black"
        type="submit"
        disabled={!isValid || loading}
      />
    </form>
  );
};

export default LoginForm;
