import { useCallback } from 'react'
import { useUserStore } from '../stores/useUserStore'

export default function useUser () {
  const { token, setToken, restarUser } = useUserStore(store => store)

  const login = useCallback(() => {
    setToken(token)
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
