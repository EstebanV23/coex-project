import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useProfileStore } from '../stores/useProfileStore'

export default function InfoProfile () {
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)
  useEffect(() => {
    hiddenProfileTrue()
  }, [])
  return (
    <h1>Soy info profile</h1>
  )
}
