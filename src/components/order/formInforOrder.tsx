"use client";
import React, { useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/ui/input";
import Button from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { brand } from "@/constants/routes";
import { Truck } from "lucide-react";
import { checkout } from "@/apis/models/order.apis";

const orderSchema = z.object({
  brand: z.string().min(1, "Thương hiệu là bắt buộc"),
  fullName: z.string().min(1, "Họ và tên là bắt buộc"),
  email: z.string().email("Email không hợp lệ").min(1, "Email là bắt buộc"),
  phone: z
    .string()
    .min(1, "Số điện thoại là bắt buộc")
    .regex(/^(0|\+84)[1-9][0-9]{8,9}$/, "Số điện thoại không hợp lệ"),
  shippingAddress: z.string().min(1, "Địa chỉ giao hàng là bắt buộc"),
  deliveryMethod: z.string().min(1, "Phương thức giao hàng là bắt buộc"),
  note: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderFormProps {
  orderId: number;
}

const OrderForm = ({ orderId }: OrderFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      brand: brand,
      fullName: "",
      email: "",
      phone: "",
      shippingAddress: "",
      deliveryMethod: "delivery",
      note: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = (data: OrderFormData) => {
    startTransition(async () => {
      try {
        const { status, error_code, message } = await checkout(data, orderId);

        if (error_code === 200 && status) {
          toast.success(message, {
            description: "Chúng tôi sẽ liên hệ với bạn sớm nhất.",
            position: "top-center",
          });
          router.replace("/");
        }
      } catch (error) {
        toast.error("Có lỗi xảy ra khi đặt hàng", {
          description: "Vui lòng thử lại sau.",
          position: "top-center",
        });
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Thông tin đặt hàng
        </h2>
        <p className="text-gray-600">
          Vui lòng điền đầy đủ thông tin giao hàng.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="brand"
              label="Thương hiệu"
              error={errors.brand}
              classProps="hidden"
            />
          )}
        />

        <Controller
          name="deliveryMethod"
          control={control}
          render={({ field }) => (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="deliveryMethod"
              label=""
              error={errors.deliveryMethod}
              classProps="hidden"
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

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="email"
              label="Email"
              type="email"
              error={errors.email}
            />
          )}
        />

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
          name="shippingAddress"
          control={control}
          render={({ field }) => (
            <InputField
              onChange={field.onChange}
              value={field.value}
              id="shippingAddress"
              label="Địa chỉ giao hàng"
              error={errors.shippingAddress}
            />
          )}
        />
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 p-3 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl shadow-md">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Phương Thức Vận Chuyển
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Giao hàng an toàn & nhanh chóng
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200 shadow-sm hover:bg-white transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-800 text-lg">
                      EcoFlow Delivery
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Vận chuyển chuyên nghiệp cho thiết bị điện tử
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      🔋 Bảo vệ chống sốc
                    </span>
                    <span className="flex items-center gap-1">
                      📦 Đóng gói chuyên nghiệp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Controller
          name="note"
          control={control}
          render={({ field }) => (
            <div>
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ghi chú (không bắt buộc)
              </label>
              <textarea
                {...field}
                id="note"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ghi chú thêm về đơn hàng..."
              />
            </div>
          )}
        />

        <Button
          propClassName="w-full"
          text={loading ? "Đang xử lý..." : "Đặt hàng"}
          variant="black"
          type="submit"
          disabled={!isValid || loading}
        />
      </form>
    </div>
  );
};

export default OrderForm;
