import { useEffect, useState } from 'react'
import { useNavbarStore } from '../stores/useNavbarStore'
import LoadingAnimation from './LoadingAnimation'

export default function Profile () {
  const { hiddenTrue } = useNavbarStore(store => store)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    hiddenTrue()
  }, [])
  if (loading) {
    return (
      <div className='h-screen'>
        <LoadingAnimation />
      </div>
    )
  }
  return (
    <form action='' />
  )
}
