"use client";
import { FC, useEffect, useState, useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/ui/input";
import Button from "@/components/ui/button";
import DateTimePicker from "@/components/ui/dateTimePicker";
import { toast } from "sonner";
import { update } from "@/apis/common/auth.apis";
import { useAuthStore } from "@/stores/useAuth";
import { parseBirthday } from "@/until";
import { brand } from "@/constants/routes";

// Schema for updating user information
const updateSchema = z.object({
  email: z.string().email("Email không hợp lệ").min(1, "Email là bắt buộc"),

  fullName: z.string().min(1, "Họ tên là bắt buộc"),
  phone: z
    .string()
    .min(1, "Số điện thoại là bắt buộc")
    .regex(/^(0|\+84)[1-9][0-9]{8,9}$/, "Số điện thoại không hợp lệ"),
  address: z.string().min(1, "Địa chỉ là bắt buộc"),
  birthday: z.date({ message: "Ngày sinh là bắt buộc" }),
  brand: z.string().min(1, "Thương hiệu là bắt buộc"),
});

type UpdateFormData = z.infer<typeof updateSchema>;

const UpdateUserForm: FC = () => {
  const { user } = useAuthStore();
  const [disabled, setDisabled] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    reset,
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateSchema),

    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [loading, startTransition] = useTransition();

  const onSubmit = (data: UpdateFormData) => {
    startTransition(async () => {
      const response = await update(data);
      if (!response?.status && response?.errors) {
        Object.entries(response.errors).forEach(([field, messages]) =>
          setError(field as keyof UpdateFormData, {
            type: "server",
            message: Array.isArray(messages) ? messages[0] : messages,
          })
        );
      } else {
        toast.success(response.message, {
          description: "Thông tin của bạn đã được cập nhật.",
          position: "top-center",
        });
      }
    });
  };

  useEffect(() => {
    if (user) {
      reset({
        email: user.email || "",

        fullName: user.fullName || "",
        phone: user.phone || "",
        address: user.address || "",
        birthday:
          user.birthday && typeof user.birthday === "string"
            ? parseBirthday(user.birthday)
            : undefined,
        brand: brand,
      });
    }
  }, [user, reset]);

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <span className="text-lg font-medium">Thông tin tài khoản</span>
        <span
          className="text-sm  text-[#3f68e0]"
          onClick={() => setDisabled(false)}
        >
          Chỉnh sửa
        </span>
      </div>
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
        </div>

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

        <div className="flex items-center justify-center gap-3 pt-4 border-t border-[#e6e6e6]">
          <Button
            propClassName=""
            text="Cập nhật"
            variant="blue"
            type="submit"
            disabled={loading || disabled}
          />

          {!disabled && (
            <Button
              onClick={() => setDisabled(true)}
              propClassName=""
              text="Hủy bỏ"
              variant="transparent"
              type="submit"
            />
          )}
        </div>
      </form>
    </>
  );
};

export default UpdateUserForm;
