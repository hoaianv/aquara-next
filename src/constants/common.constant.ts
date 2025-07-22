import { ServiceItem } from "@/interfaces/common";
import { HandHeart, Truck, ShieldPlus, ShieldCheck } from "lucide-react";

export const service: ServiceItem[] = [
  {
    title: "Giao hàng nhanh & miễn phí",
    description:
      "Đơn hàng thường được xử lý và giao trong vòng 3–7 ngày làm việc.",
    icon: Truck,
  },
  {
    title: "Bảo hành sản phẩm",
    description: "Tất cả sản phẩm đều được áp dụng chính sách bảo hành.",
    icon: ShieldPlus,
  },
  {
    title: "Thanh toán an toàn",
    description:
      "Thanh toán bằng thẻ ghi nợ, thẻ tín dụng, PayPal hoặc nền tảng thanh toán an toàn khác.",
    icon: ShieldCheck,
  },
  {
    title: "Hỗ trợ khách hàng trọn đời",
    description:
      "Từ 9 giờ sáng đến 5 giờ chiều (giờ PST), các ngày trong tuần.",
    icon: HandHeart,
  },
];
