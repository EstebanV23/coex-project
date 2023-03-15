import { create } from 'zustand'

export const useHiddenNavbar = create((set, get) => ({
  hidden: true,
  toggleHidden: () => set({ hidden: !get() }),
  hiddenTrue: () => { set({ hidden: true }) },
  hiddenFalse: () => { set({ hidden: false }) }
}))
