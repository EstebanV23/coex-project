import { useNavbarStore } from '../stores/useNavbarStore'

export default function ContentNavbar ({ children }) {
  const { hidden } = useNavbarStore(reduce => reduce)
  const hiddenNavbar = hidden ? 'translate-x-full' : 'translate-x-0'
  return (
    <div className={`flex md:transition-none md:translate-x-0 md:flex-row md:gap-1 md:items-center md:static md:bg-none md:min-w-0 md:min-h-0 fixed min-w-full bg-primary-blue min-h-screen top-0 left-0 flex-col justify-center px-1 transition-all z-3 gap-4 ${hiddenNavbar}`}>
      {children}
    </div>
  )
}
