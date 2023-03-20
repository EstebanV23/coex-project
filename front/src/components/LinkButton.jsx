import { NavLink } from 'react-router-dom'

export default function LinkButton ({ children, to, className, ...props }) {
  return <NavLink to={to} className={`py-2 transition-all px-3 border w-fit self-center rounded-xl font-semibold border-b-4 ${className}`} {...props}>{children}</NavLink>
}
