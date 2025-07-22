"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/ui/input";
import Button from "@/components/ui/button";

const verifyEmailSchema = z.object({
  code: z
    .string({ required_error: "Vui lòng nhập mã" })
    .min(1, { message: "Mã không được để trống" })
    .max(6, { message: "Mã không được vượt quá 6 số" })
    .regex(/^\d+$/, { message: "Mã chỉ được chứa số" }),
});

type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>;

type VerifyEmailFormProps = {
  email: string;
};

const VerifyEmailForm = ({ email }: VerifyEmailFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      code: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: VerifyEmailFormData) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <div className="flex flex-col gap-2">
        <span className="text-xl font-medium">
          Xác minh địa chỉ email của bạn
        </span>
        <span>
          <strong>Nhập mã xác minh</strong> mà chúng tôi đã gửi đến
          <p className="underline text-blue-500">{email}</p>
          <strong>để hoàn tất đăng ký.</strong>Nếu bạn không thấy email, vui
          lòng kiểm tra thư mục spam (thư rác).
        </span>
      </div>
      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <InputField
            id="code"
            label="Enter code"
            type="text"
            value={field.value}
            onChange={field.onChange}
            error={errors.code}
          />
        )}
      />

      <Button
        propClassName="w-full"
        text="Xác thực"
        variant="black"
        type="submit"
        disabled={!isValid}
      />
    </form>
  );
};

export default VerifyEmailForm;
