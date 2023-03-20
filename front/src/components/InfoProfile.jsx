import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useProfileStore } from '../stores/useProfileStore'
import { useUserStore } from '../stores/useUserStore'
import LinkButton from './LinkButton'

export default function InfoProfile () {
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)
  const { name, surname, email, phone } = useUserStore(store => store, shallow)
  useEffect(() => {
    hiddenProfileTrue()
  }, [])
  return (
    <div className='flex flex-col items-start text-xl gap-5'>
      <div className='flex flex-col gap-5'>
        <h3>Nombre: <span className='font-bold'>{name} {surname}</span></h3>
        <h3>Email: <span className='font-bold'>{email}</span></h3>
      </div>
      <h3>Teléfono: <span className='font-bold'>{phone}</span></h3>
      <LinkButton to='edit' className='transition-all text-primary-blue border-primary-blue hover:text-primary-blue-600'>Editar información</LinkButton>
    </div>
  )
}
