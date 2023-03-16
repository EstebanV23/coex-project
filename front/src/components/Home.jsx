import { useEffect } from 'react'
import { useNavbarStore } from '../stores/useNavbarStore'
export default function Home () {
  const { hiddenTrue } = useNavbarStore(reduce => reduce)
  useEffect(() => {
    hiddenTrue()
  }, [])
  return (
    <h1 className='font-work text-2xl font-bold text-center'>Here is home</h1>
  )
}
