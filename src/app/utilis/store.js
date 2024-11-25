import { create } from 'zustand';

export const useStore = create((set) => ({
  email: null,
  setEmail: (email) => set({ email }),
}));
