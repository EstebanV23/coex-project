import { NavLink } from 'react-router-dom'

export default function LinkButton ({ children, to, className, ...props }) {
  return <NavLink to={to} className={`py-2 transition-all duration-300 ease-in-out border rounded-xl font-semibold border-b-4  text-primary-blue-700 bg-white hover:text-white hover:bg-primary-blue-700 hover:border-primary-blue text-center ${className}`} {...props}>{children}</NavLink>
}
