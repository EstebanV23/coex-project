import { useEffect } from 'react'
import HomeCards from '../components/HomeCards'
import HomePresentation from '../components/HomePresentation'
import { useNavbarStore } from '../stores/useNavbarStore'

export default function HomePage () {
  const { hiddenTrue } = useNavbarStore(reduce => reduce)

  useEffect(() => {
    hiddenTrue()
  }, [])

  return (
    <div className='h-full bg-primary-blue-300'>
      <HomePresentation />
      <HomeCards />
    </div>
  )
}
