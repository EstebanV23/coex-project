import { NavLink } from 'react-router-dom'
import linksProfile from '../constants/linksProfile'

export default function LinksProfile () {
  const defaultStyles = 'py-0 after:contens-[] text-base after:transition-all text-primary-blue-500 after:w-full after:opacity-0 after:h-0.5 after:bg-slate-900 after:absolute after:bottom-0 after:left-0 relative sm:transition-all hover:text-primary-blue-800 lg:text-lg'
  const activeStyles = `${defaultStyles} after:opacity-100 text-primary-blue-800`
  return (
    linksProfile.map(({ path, name, id }) => (
      <NavLink to={path} key={id} className={({ isActive }) => isActive ? activeStyles : defaultStyles}>
        {name}
      </NavLink>
    ))
  )
}
