import { create } from 'zustand'

export const useErrorHeightStore = create((set, get) => ({
  valuesIncorrects: null,
  setValuesIncorrects: (values) => set({ valuesIncorrects: values }),
  resetValuesIncorrects: () => set({ valuesIncorrects: null })
}))
