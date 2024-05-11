import { useState } from 'react'
import { shallow } from 'zustand/shallow'
import sweetAlert from '../constants/sweetAlert'
import addTrimesterService from '../services/addTrimesterService'
import { useErrorHeightStore } from '../stores/useErrorHeightStore'
import { useFileStore } from '../stores/useFileStore'
import { useModalStore } from '../stores/useModalStore'
import { useUnitStore } from '../stores/useUnitStore'
import { useUserStore } from '../stores/useUserStore'
import Button from './Button'
import LoadingComponents from './LoadingComponents'

export default function SaveTrimester () {
  const { closeTrimesterModal } = useModalStore(store => store, shallow)
  const { fileDataPython } = useFileStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const { unitId, changeDetected } = useUnitStore(store => store, shallow)
  const { setValuesIncorrects } = useErrorHeightStore(store => store, shallow)
  const [loading, setLoading] = useState(false)

  async function checkData (json) {
    setLoading(true)
    const response = await addTrimesterService({
      name: 'trimestre',
      document: json,
      unit: unitId
    }, token)
    setLoading(false)
    if (response.error) {
      sweetAlert('Ha ocurrido un error al tratar de agregar el trimestre', 'Por favor intenta de nuevo', 'error')
      return
    }

    if (response.msg.toLowerCase().includes('tallas')) {
      sweetAlert('Algunas tallas están incorrectas', 'A continuación se mostrarán el listado de qué niños tiene mal su altura con respecto al último trimestre', 'warning')
      setValuesIncorrects(response.data)
      return
    }
    sweetAlert('Trimestre agregado con exito', 'Se ha agregado un trimestre exitosamente', 'success')
    closeTrimesterModal()
    changeDetected()
  }

  if (loading) return <LoadingComponents size={30} />

  return (
    <>
      {fileDataPython && <Button className='w-full' onClick={() => checkData(fileDataPython)}>Guardar trimestre</Button>}
    </>
  )
}
