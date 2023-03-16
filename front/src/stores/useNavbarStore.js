import { create } from 'zustand'

export const useNavbarStore = create((set, get) => ({
  hidden: true,
  hiddenModal: true,
  toggleHidden: () => set({ hidden: !get().hidden, hiddenModal: true }),
  hiddenTrue: () => { set({ hidden: true, hiddenModal: true }) },
  hiddenFalse: () => { set({ hidden: false }) },
  toggleHiddenModal: () => set({ hiddenModal: !get().hiddenModal }),
  hiddenModalTrue: () => { set({ hiddenModal: true }) },
  hiddenModalFalse: () => { set({ hiddenModal: false }) }
}))
