import { create } from 'zustand'

export const useTrimesterStore = create(set => ({
  isLoadTrimester: false,
  loadTrimester: (data) => set({ isLoadTrimester: data }),
  onloadTrimester: () => set({ isOpenLoggin: false })
}))
