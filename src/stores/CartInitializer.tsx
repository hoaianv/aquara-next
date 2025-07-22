"use client";

import { ICart } from "@/interfaces/models/ICart.interface";
import { useAuthStore } from "@/stores/useAuth";
import { useCartStore } from "@/stores/useCartStore";
import { useEffect } from "react";

export function CartInitializer({ data }: { data: ICart | null }) {
  const { setInitCart } = useCartStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (data) {
      setInitCart(data);
    }
  }, [user?.userId]);

  return null;
}
