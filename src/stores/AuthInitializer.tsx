"use client";

import { IUser } from "@/interfaces/models/IUser.interface";
import { useAuthStore } from "@/stores/useAuth";
import { useEffect } from "react";

export function AuthInitializer({ user }: { user: IUser | null }) {
  const { setUser } = useAuthStore();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  return null;
}
