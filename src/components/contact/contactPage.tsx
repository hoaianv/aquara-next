"use client";
import { motion } from "framer-motion";
import { IContact } from "@/interfaces/models/IContact.interface";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import InputField from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useTransition } from "react";
import { create } from "@/apis/models/contact.apis";
import { toast } from "sonner";
import { brand } from "@/constants/routes";

type ContactProps = {
  data: IContact;
};
const contactSchema = z.object({
  name: z.string().min(1, { message: "Vui lòng nhập họ tên" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  phone: z.string().min(1, { message: "Vui lòng nhập số điện thoại" }),
  content: z.string().optional(),
  brand: z.string().min(1, { message: "Thương hiệu là bắt buộc" }),
});
type ContactFormData = z.infer<typeof contactSchema>;
const ContactPage = ({ data }: ContactProps) => {
  const [loading, startTransition] = useTransition();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      content: "",
      brand: brand,
    },
    mode: "onChange",
  });
  const onSubmit = (data: ContactFormData) => {
    startTransition(async () => {
      const { message, status, error_code } = await create(data);

      if (status && error_code === 200) {
        reset();
        toast.success("Gửi liên hệ", {
          description: message,
          position: "top-center",
        });
      } else {
        toast.success("Gửi liên hệ", {
          description: message,
          position: "top-center",
        });
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 min-h-screen p-8"
    >
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className=" p-8 border-b border-[#d3d3d3]">
          <div className="mb-5">
            <span className=" font-semibold text-2xl">{data.title}</span>
          </div>

          <span className="text-gray-700">{data.description}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div>
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Thông tin công ty
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.companyInfo ?? "",
                }}
              />
            </section>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <InputField
                    id="name"
                    label="Họ tên của bạn"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.name}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputField
                    id="email"
                    label="Email của bạn"
                    type="email"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.email}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <InputField
                    id="phone"
                    label="Điện thoại"
                    type="tel"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.phone}
                  />
                )}
              />
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <InputField
                    id="message"
                    label="Nội dung"
                    type="textarea"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.content}
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
              <Button
                type="submit"
                text="GỬI ĐI"
                variant="black"
                disabled={!isValid || loading}
                propClassName="w-full"
              />
            </form>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Thông tin liên hệ
              </h2>
              <div className="text-gray-700 space-y-2">
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: data.contactInfo ?? "",
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.address ?? "",
                  }}
                />
                <strong>Email:</strong>{" "}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.mail ?? "",
                  }}
                />
                <strong>Website:</strong>{" "}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.website ?? "",
                  }}
                />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Thông tin thanh toán
              </h2>
              <div className="text-gray-700 space-y-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.payment ?? "",
                  }}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
