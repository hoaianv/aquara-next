"use client";

import { useStateStore } from "@/stores/stateStore";

export const Backdrop = () => {
  const { search, setSearch } = useStateStore();

  return (
    search.status && (
      <div
        onClick={() => setSearch({ ...search, status: false })}
        className="fixed inset-0 bg-black bg-opacity-50 z-30"
      ></div>
    )
  );
};
Backdrop.displayName = "Backdrop";
