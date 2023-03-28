import { create } from 'zustand'

export const useUnitStore = create(set => ({
  unitId: null,
  setUnitId: (id) => set({ unitId: id }),
  resetValue: () => set({ unitId: null })
}))
