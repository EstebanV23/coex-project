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
  closeTrimesterModal: () => set({ isOpenTrimesterModal: false }),
  isOpenViewTrimesterModal: false,
  openViewTrimesterModal: () => set({ isOpenViewTrimesterModal: true }),
  closeViewTrimesterModal: () => set({ isOpenViewTrimesterModal: false }),
  isOpenEditTrimester: false,
  openEditTrimester: () => set({ isOpenEditTrimester: true }),
  closeEditTrimester: () => set({ isOpenEditTrimester: false }),
  resetValuesModals: () => set({ isOpenLoggin: false, isOpenRegister: false, isOpenAvatarEdit: false, isOpenUnitModal: false, isOpenTrimesterModal: false, isOpenViewTrimesterModal: false, isOpenEditTrimester: false }),
  isOpenEditUnit: false,
  openEditUnit: () => set({ isOpenEditUnit: true }),
  closeEditUnit: () => set({ isOpenEditUnit: false })
}))
