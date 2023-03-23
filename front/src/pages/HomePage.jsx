import { useEffect } from 'react'
import HomePresentation from '../components/HomePresentation'
import { useNavbarStore } from '../stores/useNavbarStore'
export default function HomePage () {
  const { hiddenTrue } = useNavbarStore(reduce => reduce)
  useEffect(() => {
    hiddenTrue()
  }, [])
  return (
    <>
      <HomePresentation />
    </>
  )
}
