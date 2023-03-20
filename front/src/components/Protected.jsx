import { Navigate } from 'react-router-dom'
import useUser from '../hooks/useUser'

export default function Protected ({ children, verified = false, restrictLogged = false }) {
  const { isLogged, isVerified } = useUser()
  if (restrictLogged && isLogged) return <Navigate to='/' />

  if ((!restrictLogged && !isLogged) || (verified && !isVerified)) return <Navigate to='/login' />

  return children
}
