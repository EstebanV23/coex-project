import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
  id: null,
  name: null,
  surname: null,
  email: null,
  token: null,
  isVerified: false,
  loginUser: async ({ user }) => {

  },
  restarUser: () => set({ id: null, name: null, surname: null, email: null, isVerified: false })

}))
