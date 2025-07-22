import { ISearch } from "@/interfaces/common";
import { IAdPosition } from "@/interfaces/models/IAdvertise.interface";
import { create } from "zustand";

interface SearchState {
  search: ISearch;
  setSearch: (search: ISearch) => void;
  banner: { [key: string]: IAdPosition };
  setBanner: (banner: { [key: string]: IAdPosition }) => void;
}

export const useStateStore = create<SearchState>((set) => ({
  search: { status: false, content: "" },
  setSearch: (search) => set({ search }),
  banner: {},
  setBanner: (banner) => set({ banner }),
}));
