import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
  id: null,
  name: null,
  surname: null,
  email: null,
  phone: null,
  token: null,
  isVerified: false,
  setToken: (token) => set({ token }),
  restarUser: () => set(
    {
      id: null,
      name: null,
      surname: null,
      email: null,
      phone: null,
      token: null,
      isVerified: false
    }
  ),
  setUser: (user) => set(
    {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      token: user.token,
      isVerified: user.verify
    }
  )
}))
