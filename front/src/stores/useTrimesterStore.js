import { create } from 'zustand'

export const useTrimesterStore = create(set => ({
  isLoadTrimester: false,
  trimesterId: null,
  loadTrimester: (data) => set({ isLoadTrimester: data }),
  onloadTrimester: () => set({ isOpenLoggin: false }),
  setTrimesterId: (id) => set({ trimesterId: id })
}))
