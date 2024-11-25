import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(persist(
    (set) => ({
      email: null,
      setEmail: (email) => set({ email }),
    }),
    {
      name: 'user-store',
    }
  ));
