import { NavLink } from 'react-router-dom'
import { useNavbarStore } from '../stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import { IoReturnUpBack } from 'react-icons/io5'
import useUser from '../hooks/useUser'

export default function ModalUser () {
  const { hiddenModal, toggleHiddenModal } = useNavbarStore(store => store, shallow)
  const { logout } = useUser()
  const translate = hiddenModal ? 'translate-x-full' : 'translate-x-0'
  const translateDesktop = hiddenModal ? 'lg:hidden' : 'lg:translate-y-[3.7rem] lg:opacity-100'
  return (
    <div className={`text-xl font-medium absolute transition-all duration-500 ease-in-out left-0 top-0 w-full h-full grid text-center place-content-center text-white bg-slate-700 ${translate} lg:h-fit lg:left-auto lg:translate-x-full lg:px-1 lg:w-fit lg:py-4 lg:right-[153px] lg:text-base lg:rounded-lg ${translateDesktop} lg:gap-1 lg:after:contents-[] lg:after:w-5 lg:after:transition-all lg:after:duration-300 lg:after:h-5 lg:after:bg-slate-700 lg:after:absolute lg:after:-top-1  lg:after:rotate-45 lg:after:left-full lg:after:-translate-x-[20px] lg:after:rounded-full lg:after:rounded-tl-none xl:rounded-tr-lg xl:after:left-1/2 xl:after:-translate-x-1/2 xl:right-[100px]`}>
      <NavLink to='/profile' className='hover:bg-slate-600 rounded-lg lg:px-3'>Perfíl</NavLink>
      <button onClick={logout} className='cursor-pointer hover:bg-slate-600 rounded-lg px-3'>Cerrar sesión</button>
      <IoReturnUpBack size={30} className='cursor-pointer absolute lg:hidden left-10 top-10' onClick={toggleHiddenModal} />
    </div>
  )
}
