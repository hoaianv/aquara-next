"use client";
import React, { useState, useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/ui/input";
import Button from "@/components/ui/button";
import CheckboxField from "@/components/ui/checkboxField";
import VerifyEmailForm from "@/components/register/verifyEmail";
import DateTimePicker from "@/components/ui/dateTimePicker";
import { brand } from "@/constants/routes";
import { create } from "@/apis/common/auth.apis";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    email: z.string().email("Email không hợp lệ").min(1, "Email là bắt buộc"),
    username: z.string().min(3, "Tên đăng nhập phải có ít nhất 3 ký tự"),
    fullName: z.string().min(1, "Họ tên là bắt buộc"),
    password: z
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số"
      ),
    password_confirmation: z.string().min(1, "Xác nhận mật khẩu là bắt buộc"),
    phone: z
      .string()
      .min(1, "Số điện thoại là bắt buộc")
      .regex(/^(0|\+84)[1-9][0-9]{8,9}$/, "Số điện thoại không hợp lệ"),
    address: z.string().min(1, "Địa chỉ là bắt buộc"),
    brand: z.string().min(1, "Thương hiệu là bắt buộc"),
    birthday: z.date({ message: "Ngày sinh là bắt buộc" }),

    provider: z.string().min(1, "Provider là bắt buộc"),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "Hãy đồng ý với Chính sách và Điều khoản.",
    }),
    subscribe: z.boolean().refine(() => true), // vẫn required nhưng không validate gì thêm
  })
  .refine(
    (data) => {
      if (!data.password || !data.password_confirmation) return true;
      return data.password === data.password_confirmation;
    },
    {
      message: "Mật khẩu và xác nhận mật khẩu không trùng khớp",
      path: ["password_confirmation"],
    }
  );
type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      fullName: "",
      password: "",
      password_confirmation: "",
      phone: "",
      address: "",
      brand: brand,
      provider: "credentials",
      birthday: undefined,
      agreeToTerms: false,
      subscribe: false,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [step, setStep] = useState({ email: "", step: 1 });
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = (data: RegisterFormData) => {
    startTransition(async () => {
      const response = await create(data);

      if (!response?.status && response?.errors) {
        Object.entries(response.errors).forEach(([field, messages]) =>
          setError(field as keyof RegisterFormData, {
            type: "server",
            message: Array.isArray(messages) ? messages[0] : messages,
          })
        );
        return;
      } else {
        reset();
        toast.success(response.message, {
          description: "Chào mừng bạn đến với hệ thống!",
          position: "top-center",
          action: {
            label: "Đăng nhập",
            onClick: () => router.push("/dang-nhap"),
          },
        });
      }
    });
  };

  return step && step.step === 1 ? (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="email"
              label="Email"
              error={errors.email}
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

        <Controller
          name="provider"
          control={control}
          render={({ field }) => (
            <InputField
              classProps="hidden"
              value={"credentials"}
              id="provider"
              label=""
              error={errors.brand}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="username"
              label="Tên đăng nhập"
              error={errors.username}
            />
          )}
        />
      </div>
      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <InputField
            onChange={field.onChange}
            value={field.value}
            id="fullName"
            label="Họ và tên"
            error={errors.fullName}
          />
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          name="password_confirmation"
          control={control}
          render={({ field }) => (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="password_confirmation"
              label="Nhập lại mật khẩu"
              type="password"
              error={errors.password_confirmation}
            />
          )}
        />
      </div>
      {/* Thông tin cá nhân */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="phone"
              label="Số điện thoại"
              error={errors.phone}
            />
          )}
        />
        <Controller
          name="birthday"
          control={control}
          render={({ field }) => (
            <DateTimePicker
              onChange={(date) => field.onChange(date)}
              value={field.value}
              minYear={1950}
              maxYear={2010}
              placeholder="Chọn ngày sinh"
              className="w-full max-w-sm"
            />
          )}
        />
      </div>
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <InputField
            onChange={field.onChange}
            value={field.value}
            id="address"
            label="Địa chỉ"
            error={errors.address}
          />
        )}
      />
      <Controller
        name="agreeToTerms"
        control={control}
        render={({ field }) => (
          <CheckboxField
            onChange={field.onChange}
            checked={field.value}
            id="agreeToTerms"
            label="Tôi đồng ý tuân thủ Chính sách bảo mật và Điều khoản sử dụng của Aqara."
            error={errors.agreeToTerms}
          />
        )}
      />
      <Controller
        name="subscribe"
        control={control}
        render={({ field }) => (
          <CheckboxField
            onChange={field.onChange}
            checked={field.value}
            id="subscribe"
            label="Đăng ký nhận tin từ Aqara"
            error={errors.subscribe}
          />
        )}
      />
      <Button
        propClassName="w-full"
        text="Tiếp tục"
        variant="black"
        type="submit"
        disabled={!isValid || loading}
      />
    </form>
  ) : (
    <VerifyEmailForm email={step.email} />
  );
};

export default RegisterForm;
