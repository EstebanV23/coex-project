import { NavLink } from 'react-router-dom'

export default function LinkButton ({ children, to, className, ...props }) {
  return <NavLink to={to} className={`py-1 px-3 border w-fit rounded-xl font-semibold border-b-4 ${className}`} {...props}>{children}</NavLink>
}
