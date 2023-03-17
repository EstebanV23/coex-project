import { NavLink } from 'react-router-dom'
import { useNavbarStore } from '../stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import { IoReturnUpBack } from 'react-icons/io5'
import useUser from '../hooks/useUser'

export default function ModalUser () {
  const { hiddenModal, toggleHiddenModal } = useNavbarStore(store => store, shallow)
  const { logout } = useUser()
  const translate = hiddenModal ? 'translate-x-full' : 'translate-x-0'
  const translateDesktop = hiddenModal ? 'md:translate-y-14 md:opacity-0 md:-z-10' : 'md:translate-y-[3.7rem] md:opacity-100'
  return (
    <div className={`text-xl font-medium absolute transition-all duration-500 ease-in-out left-0 top-0 w-full h-full grid text-center place-content-center text-white bg-slate-700 ${translate} md:h-fit md:left-auto md:translate-x-full md:px-6 md:w-fit md:py-6 md:right-24 md:left- md:text-base md:rounded-lg ${translateDesktop} md:gap-3 md:after:contents-[] md:after:w-4 md:after:h-4 md:after:bg-slate-700 md:after:absolute md:after:-top-2 md:after:left-1/2 md:after:-translate-x-1/2 md:after:rotate-45`}>
      <NavLink to='profile' className='hover:text-primary-blue-400'>Perfíl</NavLink>
      <button onClick={logout} className='cursor-pointer hover:text-primary-blue-400'>Cerrar sesión</button>
      <IoReturnUpBack size={30} className='cursor-pointer absolute md:hidden left-10 top-10' onClick={toggleHiddenModal} />
    </div>
  )
}
