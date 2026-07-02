import { create } from 'zustand';

export const useStore = create((set, get) => ({
  // Auth
  user: null,
  setUser: (user) => set({ user }),
  isAuthModalOpen: false,
  setAuthModalOpen: (isOpen) => set({ isAuthModalOpen: isOpen }),
}));
