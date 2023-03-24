import { Navigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import useUser from '../hooks/useUser'
import { useModalStore } from '../stores/useModalStore'

export default function Protected ({ children, verified = false, restrictLogged = false }) {
  const { isLogged, isVerified } = useUser()
  const { open } = useModalStore(store => store, shallow)

  if ((restrictLogged && isLogged)) return <Navigate to='/' />

  if ((!restrictLogged && !isLogged)) {
    open()
    return <Navigate to='/' />
  }

  if (verified && !isVerified) return <Navigate to='/' />

  return children
}
