import {
  IconHome,
  IconUser,
  IconFileInvoice,
  IconAccessible
} from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import MyAvatar from './MyAvatar'

const linksRouter = [
  {
    id: 'link1',
    name: 'Inicio',
    icon: <IconHome stroke='2' size={25} />,
    path: '/',
    verify: true
  },
  {
    id: 'link2',
    name: 'Valoración unitaria',
    icon: <IconUser stroke='2' size={25} />,
    path: '/valoracion',
    verify: true
  },
  {
    id: 'link3',
    name: 'Subir archivo',
    icon: <IconFileInvoice stroke='2' size={25} />,
    path: '/archivo',
    verify: false
  },
  {
    id: 'link4',
    name: 'Unidades',
    icon: <IconAccessible stroke='2' size={25} />,
    path: '/unidades',
    verify: false
  }
]

const Links = () => {
  const stylesDefault = 'flex flex-col items-center h-full py-1 px-3 rounded-2xl transition-all duration-400 ease-in-out text-white font-medium text-xl md:text-base'
  const stylesActive = `${stylesDefault.replace('text-white', 'text-primary-blue')} bg-white font-bolder`
  return linksRouter.map(link => {
    return (
      <NavLink
        key={link.id}
        to={link.path}
        className={({ isActive }) => { return isActive ? stylesActive : stylesDefault }}
        onClick={() => console.log('click')}
      >
        {({ isActive }) => isActive ? <>{link.icon} <p>{link.name}</p></> : <>{link.icon} <p className='absolute opacity-0'>{link.name}</p></>}
      </NavLink>
    )
  })
}

export default function LogedNavbar () {
  return (
    <>
      <Links />
      <MyAvatar fullName='Brayan Villamizar' className='self-center cursor-pointer md:ml-2' />
    </>
  )
}
