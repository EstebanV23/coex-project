import { NavLink } from 'react-router-dom'
import linksProfile from '../constants/linksProfile'

export default function LinksProfile () {
  const defaultStyles = 'text-white py-0 after:contens-[] after:transition-all after:w-full after:opacity-0 after:h-0.5 after:bg-gray-300 after:absolute after:bottom-0 after:left-0 relative sm:transition-all'
  const activeStyles = `${defaultStyles} after:opacity-100 text-gray-300`
  return (
    linksProfile.map(({ path, name, id }) => (
      <NavLink to={path} key={id} className={({ isActive }) => isActive ? activeStyles : defaultStyles}>
        {name}
      </NavLink>
    ))
  )
}

export const Hola = () => {
  return <div className='after:content afterL' />
}
