import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
  id: null,
  avatar: null,
  name: null,
  surname: null,
  email: null,
  phone: null,
  token: null,
  isVerified: false,
  restarUser: () => set(
    {
      id: null,
      avatar: null,
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
        avatar: user.avatar,
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.phone,
        token: user.token,
        isVerified: user.isVerified
      }
    )
  },
  setVerified: () => {
    const user = JSON.parse(localStorage.getItem('user'))
    user.isVerified = true
    localStorage.setItem('user', JSON.stringify(user))

    return set({ isVerified: true })
  },
  updateAvatar: (avatar) => {
    const user = JSON.parse(localStorage.getItem('user'))
    user.avatar = avatar
    localStorage.setItem('user', JSON.stringify(user))

    return set({ avatar })
  }
}))
