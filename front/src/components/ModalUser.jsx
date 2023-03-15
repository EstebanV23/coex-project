import { NavLink } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore'
import { useNavbarStore } from '../stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import { IoReturnUpBack } from 'react-icons/io5'

export default function ModalUser () {
  const { hiddenModal } = useNavbarStore(store => store, shallow)
  const { restarUser } = useUserStore(store => store, shallow)
  const translate = hiddenModal ? 'translate-x-full' : 'translate-x-0'
  return (
    <div className={`text-xl font-medium absolute transition-all duration-500 ease-in-out left-0 top-0 w-full h-full grid text-center place-content-center text-white bg-slate-700 ${translate}`}>
      <NavLink className=''>Perfíl</NavLink>
      <button onClick={restarUser} className='cursor-pointer'>Cerrar sesión</button>
      <IoReturnUpBack className='cursor-pointer' />
    </div>
  )
}
