import { NavLink } from 'react-router-dom'
import linksRouters from '../constants/linksRouters'

export default function LinksNavbar () {
  const stylesDefault = 'flex flex-col items-center h-full py-1 px-3 rounded-2xl transition-all duration-400 ease-in-out text-white font-medium text-xl md:text-base'
  const stylesActive = `${stylesDefault.replace('text-white', 'text-primary-blue')} bg-white font-bolder`

  return linksRouters.map(link =>
    <NavLink
      key={link.id}
      to={link.path}
      className={({ isActive }) => { return isActive ? stylesActive : stylesDefault }}
    >
      {({ isActive }) => isActive ? <>{link.icon} <p>{link.name}</p></> : link.icon}
    </NavLink>
  )
}
