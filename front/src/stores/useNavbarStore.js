import { create } from 'zustand'

export const useNavbarStore = create((set, get) => ({
  hidden: true,
  toggleHidden: () => set({ hidden: !get().hidden }),
  hiddenTrue: () => { set({ hidden: true }) },
  hiddenFalse: () => { set({ hidden: false }) },
  hiddenModal: true,
  toggleHiddenModal: () => set({ hiddenModal: !get().hiddenModal }),
  hiddenModalTrue: () => { set({ hiddenModal: true }) },
  hiddenModalFalse: () => { set({ hiddenModal: false }) }
}))
