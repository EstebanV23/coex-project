import { create } from 'zustand'

export const useModalStore = create(set => ({
  isOpenLoggin: true,
  openLoggin: () => set({ isOpenLoggin: true }),
  closeLoggin: () => set({ isOpenLoggin: false }),
  isOpenRegister: false,
  openRegister: () => set({ isOpenRegister: true }),
  closeRegister: () => set({ isOpenRegister: false }),
  isOpenAvatarEdit: false,
  openAvatarEdit: () => set({ isOpenAvatarEdit: true }),
  closeAvatarEdit: () => set({ isOpenAvatarEdit: false })
}))
