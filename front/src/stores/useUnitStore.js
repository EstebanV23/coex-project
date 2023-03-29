import { create } from 'zustand'

export const useUnitStore = create((set, get) => ({
  getChange: 0,
  changeDetected: () => set({ getChange: get().getChange + 1 }),
  unitId: null,
  setUnitId: (id) => set({ unitId: id }),
  resetValue: () => set({ unitId: null })
}))
