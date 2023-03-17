import { useCallback, useState } from 'react'
import { useUserStore } from '../stores/useUserStore'
import loginService from '../services/loginService'

export default function useUser () {
  const { token, restarUser, setUser } = useUserStore(store => store)
  const { loading, setLoading } = useState(false)
  const { error, setError } = useState(false)

  const login = useCallback(({ email, password }) => {
    // setLoading(true)
    loginService({ email, password })
      .then(user => {
        // setLoading(false)
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch(err => {
        // setLoading(false)
        // setError(true)
        console.error(err)
      })
  }, [setUser])

  const logout = useCallback(() => {
    restarUser()
    localStorage.removeItem('user')
  }, [restarUser])

  return {
    isLogged: Boolean(token),
    isLoginLoading: loading,
    hasLoginError: error,
    login,
    logout
  }
}
