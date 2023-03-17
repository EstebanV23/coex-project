import { NavLink } from 'react-router-dom'

export default function Button ({ children, to, ...props }) {
  return <NavLink to={to} className={`py-3 transition-all px-6 text-white border w-fit self-center border-white rounded-xl font-semibold hover:bg-white hover:text-primary-blue-400 border-b-4 hover:border-b-0 ${props.className}`}>{children}</NavLink>
}
