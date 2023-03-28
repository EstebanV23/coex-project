import { shallow } from 'zustand/shallow'
import sweetAlert from '../constants/sweetAlert'
import addTrimesterService from '../services/addTrimesterService'
import { useFileStore } from '../stores/useFileStore'
import { useModalStore } from '../stores/useModalStore'
import { useUnitStore } from '../stores/useUnitStore'
import { useUserStore } from '../stores/useUserStore'
import Button from './Button'

export default function SaveTrimester () {
  const { isOpenTrimesterModal, closeTrimesterModal } = useModalStore()
  const { fileDataPython } = useFileStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const { unitId } = useUnitStore(store => store, shallow)

  async function checkData (json) {
    const response = await addTrimesterService({
      name: 'trimestre',
      document: json,
      unit: unitId
    }, token)
    if (response.error) {
      sweetAlert('Ha ocurrido un error al tratar de agregar el trimestre', 'Por favor intenta de nuevo', 'error')
      return
    }
    sweetAlert('Trimestre agregado con exito', 'Se ha agregado un trimestre exitosamente', 'success')
    closeTrimesterModal()
  }

  return (
    <>
      {fileDataPython && <Button className='' onClick={() => checkData(fileDataPython)}>Guardar trimestre</Button>}
    </>
  )
}
