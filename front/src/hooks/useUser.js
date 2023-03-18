import { useCallback, useState } from 'react'
import { useUserStore } from '../stores/useUserStore'
import loginService from '../services/loginService'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useNavigate } from 'react-router-dom'

export default function useUser () {
  const { token, restarUser, setUser, isVerified } = useUserStore(store => store)
  const { hiddenTrue } = useNavbarStore(store => store)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const login = useCallback(({ email, password }) => {
    setLoading(true)
    loginService({ email, password })
      .then(user => {
        setLoading(false)
        setUser(user)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [setUser])

  const logout = useCallback(() => {
    restarUser()
    hiddenTrue()
    navigate('/login')
    localStorage.removeItem('user')
  }, [restarUser])

  return {
    isLogged: Boolean(token),
    isLoginLoading: loading,
    hasLoginError: error,
    isVerified,
    login,
    logout
  }
}
