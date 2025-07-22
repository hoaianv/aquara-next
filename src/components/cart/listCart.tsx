"use client";
import { remove, update } from "@/apis/models/cart.apis";
import CardCart from "@/components/cart/cardCart";
import {
  ICartProduct,
  IDeleteCartRequest,
  IUpdateCartRequest,
} from "@/interfaces/models/ICart.interface";
import { brand } from "@/constants/routes";
import { useCartStore } from "@/stores/useCartStore";
import { memo, useCallback, useState, useTransition } from "react";
import { toast } from "sonner";
import CartEmpty from "@/components/cart/cartEmpty";
import { IOrderItem } from "@/interfaces/models/IOrder.interface";
import { useOrderStore } from "@/stores/useOrder";

function ListCart() {
  const { cart, removeItems, addItems } = useCartStore();
  const { updateOrder, order } = useOrderStore();

  const [selectRemove, setSelectRemove] = useState<IDeleteCartRequest>({
    items: [],
  });

  const [loading, startTransition] = useTransition();

  const handleRemove = (data: IDeleteCartRequest) => {
    startTransition(async () => {
      try {
        const response = await remove(data);

        if (
          (response.status && response.error_code === 200) ||
          response.error_code === 207
        ) {
          toast.success("Xóa sản phẩm giỏ hàng", {
            description: response.message,
            position: "top-right",
          });

          removeItems(response.ids);
          setSelectRemove({
            items: [],
          });
        } else {
          toast.error("Xóa sản phẩm giỏ hàng", {
            description: response.message,
            position: "top-right",
          });
        }
      } catch (error) {
        toast.error("Lỗi khi xóa sản phẩm", {
          description: (error as Error).message,
          position: "top-right",
        });
      }
    });
  };

  const handleChooseRemove = (item: ICartProduct) => {
    const exists = selectRemove.items.some((i) => i.cartId === item.id);
    const newItems = exists
      ? selectRemove.items.filter((i) => i.cartId !== item.id)
      : [...selectRemove.items, { cartId: item.id, brand }];

    setSelectRemove({ items: newItems });

    toast.warning("Xóa sản phẩm giỏ hàng", {
      description: `Xóa ${item.name}`,
      position: "top-right",
      action: {
        label: "Đồng ý",
        onClick: () => handleRemove({ items: newItems }),
      },
    });
  };
  const handleUpdateQuantity = (value: ICartProduct) => {
    startTransition(async () => {
      try {
        const isInOrder = order.some((ord) => ord.cartId === value.id);

        addItems([value]);

        if (isInOrder) {
          const found = cart.items.find((ci) => ci.id === value.id);
          if (found) {
            const updatedOrderItem: IOrderItem = {
              cartId: found.id,
              productId: found.productId,
              quantity: value.quantity, // ✅
              selectedOptions: found.selectedOptions,
            };

            updateOrder(updatedOrderItem);
          }
        }
        const valueUpdate: IUpdateCartRequest = {
          items: [
            {
              cartId: value.id,
              brand: brand,
              quantity: value.quantity,
            },
          ],
        };
        const response = await update(valueUpdate);

        if (
          (response.status && response.error_code === 200) ||
          response.error_code === 207
        ) {
          toast.success("Cập nhật số lượng", {
            description: response.message,
            position: "top-right",
          });
        } else {
          toast.error("Cập nhật số lượng thất bại", {
            description: response.message,
            position: "top-right",
          });
        }
      } catch (error) {
        toast.error("Lỗi khi cập nhật số lượng", {
          description: (error as Error).message,
          position: "top-right",
        });
      }
    });
  };

  const handleChooseProduct = useCallback(
    (item: ICartProduct) => {
      // Tìm trong cart.items chính xác item được click
      const found = cart.items.find((ci) => ci.id === item.id);
      if (!found) return;

      const payload: IOrderItem = {
        cartId: found.id,
        productId: found.productId,
        quantity: found.quantity,
        selectedOptions: found.selectedOptions,
      };

      updateOrder(payload);
    },
    // Chỉ recreate khi cart.items hoặc updateOrder thay đổi
    [cart.items, updateOrder]
  );

  return (
    <>
      {cart && cart.items.length > 0 ? (
        <div className="col-span-6 px-5 py-3 bg-white rounded-lg">
          {cart.items.map((item, idx) => (
            <CardCart
              checked={order.some((ord) => ord.cartId === item.id)}
              onChooseProduct={handleChooseProduct}
              onUpdateQuantity={handleUpdateQuantity}
              loading={loading}
              onChooseSelect={handleChooseRemove}
              item={item}
              key={idx}
            />
          ))}
        </div>
      ) : (
        <CartEmpty />
      )}
    </>
  );
}
export default memo(ListCart);
