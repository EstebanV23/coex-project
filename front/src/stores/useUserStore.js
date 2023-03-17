import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
  id: null,
  name: 'Brayan',
  surname: 'Villamizar',
  email: 'Esteban.bevf@gmail.com',
  token: null,
  isVerified: false,
  setToken: (token) => set({ token }),
  restarUser: () => set({ id: null, name: null, surname: null, email: null, isVerified: false }),
  setUser: (user) => set(
    {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      token: user.token,
      isVerified: user.verify
    }
  )

}))
