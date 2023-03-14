import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import linksRouters from '../constants/linksRouters'
import ModalUser from './ModalUser'
import MyAvatar from './MyAvatar'

const Links = () => {
  const stylesDefault = 'flex flex-col items-center h-full py-1 px-3 rounded-2xl transition-all duration-400 ease-in-out text-white font-medium text-xl md:text-base'
  const stylesActive = `${stylesDefault.replace('text-white', 'text-primary-blue')} bg-white font-bolder`

  return linksRouters.map(link =>
    <NavLink
      key={link.id}
      to={link.path}
      className={({ isActive }) => { return isActive ? stylesActive : stylesDefault }}
      onClick={() => console.log('click')}
    >
      {({ isActive }) => isActive ? <>{link.icon} <p>{link.name}</p></> : link.icon}
    </NavLink>
  )
}

export default function LogedNavbar () {
  const [openModal, setOpenModal] = useState(true)

  return (
    <>
      <Links />
      <MyAvatar fullName='Brayan Villamizar' className='self-center cursor-pointer md:ml-2' onClick={() => setOpenModal(false)} />
      <ModalUser open={openModal} />
    </>
  )
}
