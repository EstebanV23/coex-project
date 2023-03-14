import { NavLink } from 'react-router-dom'

export default function ModalUser ({ open }) {
  const restarUser = useUserStore(state => state.restarUser)
  const translate = open ? 'translate-x-full' : 'translate-x-0'
  return (
    <div className={`text-xl font-medium absolute transition-all duration-500 ease-in-out left-0 top-0 w-full h-full grid text-center place-content-center text-white bg-slate-700 ${translate}`}>
      <NavLink className=''>Perfíl</NavLink>
      <button onClick={restarUser} className='cursor-pointer'>Cerrar sesión</button>
    </div>
  )
}
