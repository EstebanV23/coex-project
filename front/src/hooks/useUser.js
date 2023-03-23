import { useCallback, useState } from 'react'
import { useUserStore } from '../stores/useUserStore'
import loginService from '../services/loginService'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useNavigate } from 'react-router-dom'
import { useModalStore } from '../stores/useModalStore'

export default function useUser () {
  const { token, restarUser, setUser, isVerified, avatar } = useUserStore(store => store)
  const { hiddenTrue } = useNavbarStore(store => store)
  const { close, open } = useModalStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const login = useCallback(({ email, password }) => {
    setLoading(true)
    loginService({ email, password })
      .then(user => {
        setLoading(false)
        close()
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
    navigate('/')
    open()
    localStorage.removeItem('user')
  }, [restarUser])

  return {
    isLogged: Boolean(token),
    isLoginLoading: loading,
    hasLoginError: error,
    isVerified,
    avatar,
    login,
    logout
  }
}
