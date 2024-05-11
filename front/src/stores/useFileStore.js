import { create } from 'zustand'

export const useFileStore = create((set, get) => ({
  fileData: null,
  fileName: null,
  fileDataPython: null,
  setFileData: (file) => set({ fileData: file, fileName: file[0].name }),
  setFileDataPython: (data) => set({ fileDataPython: data }),
  resetValuesFile: () => set({ fileData: null, fileName: null, fileDataPython: null })
}))
