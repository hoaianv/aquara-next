import { IOrderItem } from "@/interfaces/models/IOrder.interface";
import { create } from "zustand";

interface CartOrderState {
  order: IOrderItem[];
  updateOrder: (payload: IOrderItem | IOrderItem[]) => void;
  clearOrder: () => void;
}

export const useOrderStore = create<CartOrderState>( // Bỏ persist<CartOrderState> ở đây
  (set, get) => ({
    order: [],
    updateOrder: (payload) => {
      if (Array.isArray(payload)) {
        set({ order: payload });
      } else {
        const exists = get().order.some((o) => o.cartId === payload.cartId);
        set({
          order: exists
            ? get().order.filter((o) => o.cartId !== payload.cartId)
            : [...get().order, payload],
        });
      }
    },
    clearOrder: () => set({ order: [] }),
  })
  // Bỏ phần { name: "order" } này đi
);
