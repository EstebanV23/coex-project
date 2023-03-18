import { useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser'

export default function Protected ({ children, verified = false, restrictLogged = false }) {
  const { isLogged, isVerified } = useUser()
  const navigate = useNavigate()
  if (restrictLogged && isLogged) {
    navigate('/')
    return
  }

  if ((!restrictLogged && !isLogged) || (verified && !isVerified)) {
    navigate('/login')
    return
  }
  return children
}
