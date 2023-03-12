import {
  IconHome,
  IconUser,
  IconFileInvoice,
  IconAccessible,
  IconX
} from '@tabler/icons-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ContentNavbar from './ContentNavbar'
import MyAvatar from './MyAvatar'

const linksRouter = [
  {
    id: 'link1',
    name: 'Inicio',
    icon: <IconHome stroke='2' size={25} />,
    path: '/'
  },
  {
    id: 'link2',
    name: 'Valoración unitaria',
    icon: <IconUser stroke='2' size={25} />,
    path: '/valoracion'
  },
  {
    id: 'link3',
    name: 'Subir archivo',
    icon: <IconFileInvoice stroke='2' size={25} />,
    path: '/archivo'
  },
  {
    id: 'link4',
    name: 'Unidades',
    icon: <IconAccessible stroke='2' size={25} />,
    path: '/unidades'
  }
]

const generateLinks = () => {
  const stylesDefault = 'flex flex-col items-center h-full py-1 px-3 rounded-2xl transition-all duration-300 ease-in-out text-white font-medium text-sm'
  const stylesActive = `${stylesDefault.replace('text-white', 'text-primary-blue')} bg-white font-bolder`
  return linksRouter.map(link => (
    <NavLink key={link.id} to={link.path} className={({ isActive }) => { return isActive ? stylesActive : stylesDefault }}>
      {link.icon}
      <p>{link.name}</p>
    </NavLink>
  ))
}
export default function VerifyNavbar ({ hidden }) {
  const hideShow = hidden ? 'translate-x-full' : 'translate-x-0'
  return (
    <ContentNavbar hideShow={hideShow}>
      {generateLinks()}
      <button className='h-fill border-solid rounded-2xl text-white border border-white px-3 font-medium lg:self-stretch hover:text-primary-blue hover:bg-white transition-all duration-300 lg:py-0 py-3 self-center'>Cerrar sesión</button>
      <NavLink to='/perfil' className='ml-3 order-first lg:order-none self-center lg:self-auto mb-4 lg:mb-0'><MyAvatar fullName='Estefania Araque' /></NavLink>
      <IconX className='block lg:hidden absolute right-10 top-10 cursor-pointer' size={30} />
    </ContentNavbar>
  )
}
