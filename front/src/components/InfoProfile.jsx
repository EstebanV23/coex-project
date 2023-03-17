import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useProfileStore } from '../stores/useProfileStore'
import { useUserStore } from '../stores/useUserStore'

export default function InfoProfile () {
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)
  const { name, surname, email, token, id } = useUserStore(store => store, shallow)
  useEffect(() => {
    hiddenProfileTrue()
  }, [])
  return (
    <div>
      <h3>Nombre: {name} {surname}</h3>
      <h3>Email: {email}</h3>

    </div>
  )
}
