import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useProfileStore } from '../stores/useProfileStore'
import { useUserStore } from '../stores/useUserStore'
import LinkButton from './LinkButton'
import VerifiedText from './VerifiedText'

export default function InfoProfile () {
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)
  const { name, surname, email, phone, isVerified } = useUserStore(store => store, shallow)
  useEffect(() => {
    hiddenProfileTrue()
  }, [])
  return (
    <div className='flex flex-col items-start text-base lg:text-xl gap-5'>
      <div className='flex flex-col gap-5'>
        <h3 className=' break-all'>Nombre: <span className='font-bold'>{name} {surname}</span></h3>
        <h3 className=' break-all'>Email: <span className='font-bold'>{email}sdfafsf</span></h3>
      </div>
      <h3 className=' break-all'>Teléfono: <span className='font-bold'>{phone}</span></h3>
      <LinkButton to='edit' className='transition-all text-primary-blue border-primary-blue hover:text-primary-blue-600 self-start '>Editar información</LinkButton>
      <VerifiedText />
    </div>
  )
}
