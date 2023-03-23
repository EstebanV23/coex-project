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
        avatar: user.avatar ?? 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.phone,
        token: user.token,
        isVerified: user.isVerified
      }
    )
  },
  setVerified: () => set({ isVerified: true }),
  updateAvatar: (avatar) => set({ avatar })
}))
