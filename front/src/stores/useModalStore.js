import { create } from 'zustand'

export const useModalStore = create(set => ({
  isOpen: true,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}))
