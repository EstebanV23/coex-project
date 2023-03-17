import { create } from 'zustand'

export const useProfileStore = create((set, get) => ({
  hiddenModalProfile: true,
  editProfile: false,
  toggleHiddenProfile: () => set(() => ({ hiddenModalProfile: !get().hiddenModalProfile })),
  hiddenProfileTrue: () => set(() => ({ hiddenModalProfile: true })),
  toggleEditProfile: () => set(() => ({ editProfile: !get().editProfile }))

}))
