import { ICart, ICartProduct } from "@/interfaces/models/ICart.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cart: ICart;
  setInitCart: (cart: ICart) => void;
  addItems: (items: ICartProduct[]) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItems: (ids: number[]) => void;
}

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      cart: {
        items: [],
        totalItems: 0,
        totalAmount: 0,
      },

      setInitCart: (cart: ICart) => set({ cart }),

      addItems: (newItems: ICartProduct[]) =>
        set((state) => {
          let updatedItems = [...state.cart.items];

          newItems.forEach((item) => {
            const idx = updatedItems.findIndex((i) => i.id === item.id);
            if (idx !== -1) {
              updatedItems[idx] = {
                ...updatedItems[idx],
                quantity: item.quantity,
                totalPrice: item.quantity * updatedItems[idx].priceBase,
              };
            } else {
              updatedItems.push(item);
            }
          });

          const totalItems = updatedItems.length;
          const totalAmount = updatedItems.reduce(
            (sum, i) => sum + i.totalPrice,
            0
          );

          return {
            cart: {
              ...state.cart,
              items: updatedItems,
              totalItems,
              totalAmount,
            },
          };
        }),

      updateQuantity: (id: number, quantity: number) =>
        set((state) => {
          const updatedItems = state.cart.items.map((item) =>
            item.id === id
              ? { ...item, quantity, totalPrice: quantity * item.priceBase }
              : item
          );
          const totalItems = updatedItems.length;

          const totalAmount = updatedItems.reduce(
            (sum, item) => sum + item.totalPrice,
            0
          );

          return {
            cart: {
              ...state.cart,
              items: updatedItems,
              totalItems,
              totalAmount,
            },
          };
        }),

      removeItems: (ids: number[]) =>
        set((state) => {
          const updatedItems = state.cart.items.filter(
            (item) => !ids.includes(item.id)
          );
          const totalItems = updatedItems.length;

          const totalAmount = updatedItems.reduce(
            (sum, item) => sum + item.totalPrice,
            0
          );

          return {
            cart: {
              ...state.cart,
              items: updatedItems,
              totalItems,
              totalAmount,
            },
          };
        }),
    }),
    { name: "cart" }
  )
);
