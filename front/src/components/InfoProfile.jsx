import { useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'
import sweetAlert from '../constants/sweetAlert'
import { useProfileStore } from '../stores/useProfileStore'
import { useUserStore } from '../stores/useUserStore'
import LinkButton from './LinkButton'
import VerifiedText from './VerifiedText'
import againVerifyService from '../services/againVerifyService'
import Loading from './Loading'

export default function InfoProfile () {
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)
  const { name, surname, email, phone, isVerified, retriesVerify, token, setRetries } = useUserStore(store => store, shallow)
  const [loading, setLoading] = useState(false)

  const handleClickOff = (e) => {
    e.preventDefault()
    sweetAlert('Haz llegado a tu límite', 'Haz alcanzado el límite de solicitudes, por favor, revisa tu bandeja de entrada, spam, o no deseados, búscalo como "MiAnthro"', 'error')
  }

  const againVerify = async () => {
    setLoading(true)
    const responseAgain = await againVerifyService(token)
    setLoading(false)
    if (responseAgain.error) {
      sweetAlert('Ha ocurrido un error al solicitar tu nueva verificación', 'Tu verificación ha expirado o has llegado al límite de tus solicitudes, revisa tu correo', 'error')
      return
    }
    const { retriesVerify } = responseAgain.data
    setRetries(retriesVerify)
    sweetAlert('Hemos enviado un nuevo correo para tu verificación', 'Revisa tu bandeja de entrada, spam o correos no deseados, el correo es enviado como "MiAnthro", así podrás buscarlo')
  }
  useEffect(() => {
    hiddenProfileTrue()
  }, [])
  return (
    <div className='flex flex-col items-start text-base lg:text-xl gap-5'>
      {loading && <Loading />}
      <div className='flex flex-col gap-5'>
        <h3 className=' break-all'>Nombre: <span className='font-bold'>{name} {surname}</span></h3>
        <h3 className=' break-all'>Email: <span className='font-bold'>{email}</span></h3>
      </div>
      <h3 className=' break-all'>Teléfono: <span className='font-bold'>{phone}</span></h3>
      <LinkButton to='edit' className='transition-all duration-300 text-primary-blue-700 bg-white self-start hover:text-white hover:bg-primary-blue-700 hover:border-primary-blue'>Editar información</LinkButton>
      <VerifiedText />
      {(!isVerified) &&
        <button className='text-base text-primary-blue-700 hover:text-slate-700 hover:underline ease-in-out duration-200' onClick={retriesVerify >= 2 ? handleClickOff : () => againVerify()}>
          Reenviar verificación
        </button>}
    </div>
  )
}
