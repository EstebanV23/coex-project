import { GoVerified } from 'react-icons/go'
import { shallow } from 'zustand/shallow'
import { useUserStore } from '../stores/useUserStore'

export default function VerifiedText () {
  const { isVerified } = useUserStore(store => store, shallow)
  return (
    <div>
      {isVerified
        ? <h3 className='flex items-center gap-1 text-green-600'><GoVerified /> Verificado</h3>
        : <h3 className='text-error'>No estás verificado</h3>}
    </div>
  )
}
