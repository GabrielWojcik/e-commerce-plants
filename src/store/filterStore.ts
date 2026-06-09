import { create } from "zustand";

interface FilterStore {
  category: string | null;
  setCategory: (category: string | null) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  category: null,
  setCategory: (category) => set({ category }),
  clearFilters: () => set({ category: null }),
}));
