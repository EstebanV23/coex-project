import updateTrimesterService from '../services/updateTrimesterService'
import Button from './Button'
import { shallow } from 'zustand/shallow'
import { useTrimesterStore } from '../stores/useTrimesterStore'
import { useFileStore } from '../stores/useFileStore'
import { useUnitStore } from '../stores/useUnitStore'
import { useUserStore } from '../stores/useUserStore'
import LoadingComponents from './LoadingComponents'
import { useState } from 'react'
import sweetAlert from '../constants/sweetAlert'

export default function UpdateTrimester () {
  const { trimesterId } = useTrimesterStore(store => store, shallow)
  const { fileDataPython } = useFileStore(store => store, shallow)
  const { unitId, changeDetected } = useUnitStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const [loading, setLoading] = useState(false)

  if (loading) return <LoadingComponents size={30} />

  async function updateTrimester () {
    setLoading(true)
    const response = updateTrimesterService({
      unit: unitId,
      trimesterId,
      document: fileDataPython
    }, token)
    setLoading(false)
    if (response.error) {
      sweetAlert('Ha ocurrido un error al tratar de actualizar el trimestre', 'Por favor intenta de nuevo', 'error')
      return
    }
    sweetAlert('Trimestre actualizado con exito', 'Se ha actualizado el trimestre exitosamente', 'success')
    changeDetected()
  }
  return (
    <Button className='w-full' onClick={() => updateTrimester()}>Actualizar</Button>
  )
}
