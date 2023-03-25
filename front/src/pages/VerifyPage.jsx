import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import sweetAlert from '../constants/sweetAlert'
import verifyService from '../services/veirifyService'
import { useUserStore } from '../stores/useUserStore'

export default function VerifyPage () {
  const [searchParams] = useSearchParams()
  const { setVerified } = useUserStore(store => store, shallow)
  const token = searchParams.get('key')
  const navigate = useNavigate()

  useEffect(() => {
    verifyService(token)
      .then(data => {
        if (data.error) {
          sweetAlert('Tu tiempo ha caducado', 'Vuelve a crear tu cuenta y verifícala en el tiempo correspondiente', 'error')
          return
        } else {
          sweetAlert('Verificado correctamente', 'Tu cuenta ha sido verificada correctamente, ahora puedes disfrutar de todos los servicios')
          setVerified()
        }

        navigate('/login')
      })
  }, [])
  return null
}
