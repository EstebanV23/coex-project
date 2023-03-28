import { create } from 'zustand'

export const useModalStore = create(set => ({
  isOpenLoggin: false,
  openLoggin: () => set({ isOpenLoggin: true }),
  closeLoggin: () => set({ isOpenLoggin: false }),
  isOpenRegister: false,
  openRegister: () => set({ isOpenRegister: true }),
  closeRegister: () => set({ isOpenRegister: false }),
  isOpenAvatarEdit: false,
  openAvatarEdit: () => set({ isOpenAvatarEdit: true }),
  closeAvatarEdit: () => set({ isOpenAvatarEdit: false }),
  isOpenUnitModal: false,
  openUnitModal: () => set({ isOpenUnitModal: true }),
  closeUnitModal: () => set({ isOpenUnitModal: false }),
  isOpenTrimesterModal: false,
  openTrimesterModal: () => set({ isOpenTrimesterModal: true }),
  closeTrimesterModal: () => set({ isOpenTrimesterModal: false })
}))
