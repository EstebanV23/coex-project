import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
  id: null,
  name: null,
  surname: null,
  email: null,
  phone: null,
  token: null,
  isVerified: false,
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
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    return set(
      {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.phone,
        token: user.token,
        isVerified: user.isVerified
      }
    )
  },
  setVerified: () => set({ isVerified: true })
}))
