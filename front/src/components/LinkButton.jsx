import { NavLink } from 'react-router-dom'

export default function LinkButton ({ children, to, ...props }) {
  return <NavLink to={to} className={`py-2 transition-all px-3 text-white border w-fit self-center border-white rounded-xl font-semibold hover:bg-white hover:text-primary-blue-400 border-b-4 hover:border-b-0 ${props.className}`}>{children}</NavLink>
}
