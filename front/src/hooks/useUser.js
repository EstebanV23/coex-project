import { useCallback } from 'react'
import { useUserStore } from '../stores/useUserStore'
import loginService from '../services/login'

export default function useUser () {
  const { token, setToken, restarUser } = useUserStore(store => store)

  const login = useCallback((email, password) => {
    loginService(email, password)
      .then(data => {
        setToken(token)
      }).catch(err => {
        
      })
  }, [setToken])

  const logout = useCallback(() => {
    restarUser()
  }, [restarUser])

  return {
    isLogged: Boolean(token),
    login,
    logout
  }
}
