import { useCallback, useState } from 'react'
import { useUserStore } from '../stores/useUserStore'
import loginService from '../services/loginService'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useNavigate } from 'react-router-dom'
import { useModalStore } from '../stores/useModalStore'
import { shallow } from 'zustand/shallow'

export default function useUser () {
  const { token, restarUser, setUser, isVerified, avatar } = useUserStore(store => store)
  const { hiddenTrue } = useNavbarStore(store => store)
  const { closeLoggin, openLoggin } = useModalStore(store => store, shallow)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const login = useCallback(({ email, password }) => {
    setLoading(true)
    loginService({ email, password })
      .then(user => {
        closeLoggin()
        navigate('/')
        setUser(user)
      })
      .catch((e) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const logout = useCallback(() => {
    restarUser()
    hiddenTrue()
    navigate('/')
    openLoggin()
    localStorage.removeItem('user')
  }, [])

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
