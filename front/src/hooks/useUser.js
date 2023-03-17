import { useCallback } from 'react'
import { useUserStore } from '../stores/useUserStore'
import loginService from '../services/loginService'

export default function useUser () {
  const { token, restarUser, setUser } = useUserStore(store => store)

  const login = useCallback(({ email, password }) => {
    loginService({ email, password })
      .then(user => {
        console.log(token)
        setUser(user)
      })
      .catch(err => {
        console.log(err)
      })
  }, [setUser])

  const logout = useCallback(() => {
    restarUser()
  }, [restarUser])

  return {
    isLogged: Boolean(token),
    login,
    logout
  }
}
