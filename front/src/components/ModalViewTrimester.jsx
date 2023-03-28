import { shallow } from 'zustand/shallow'
import { useTrimesterStore } from '../stores/useTrimesterStore'
import { useFileStore } from '../stores/useFileStore'
import { useEffect, useState } from 'react'
import getTrimesterService from '../services/getTrimesterService'
import { useUnitStore } from '../stores/useUnitStore'
import { useUserStore } from '../stores/useUserStore'
import TableExcel from './TableExcel'
import DownloadExcel from './DownloadExcel'
import LoadingComponents from './LoadingComponents'
import Button from './Button'
import deleteTrimesterService from '../services/deleteTrimesterService'
import { useModalStore } from '../stores/useModalStore'
import sweetAlert from '../constants/sweetAlert'

export default function ModalViewTrimester () {
  const { trimesterId } = useTrimesterStore(store => store, shallow)
  const { setFileDataPython, resetValuesFile } = useFileStore(store => store, shallow)
  const { unitId } = useUnitStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const [loading, setLoading] = useState(true)
  const { closeViewTrimesterModal } = useModalStore()

  useEffect(() => {
    resetValuesFile()
    getTrimesterService({ trimesterId, unit: unitId }, token)
      .then(response => {
        setFileDataPython(response.data.document)
        setLoading(false)
      })
  }, [])

  function deleteTrimester () {
    sweetAlert(
      'Are you sure?', "You won't be able to revert this!", 'warning', 'Eliminar!', true, '#3085d6', '#d33')
      .then((response) => {
        if (!response.isConfirmed) {
          sweetAlert('No se ha completado la acción', 'Mensaje', 'error')
          return
        }
        deleteTrimesterService({ unit: unitId, trimesterId }, token)
          .then((responseDelete) => {
            if (responseDelete.error) {
              sweetAlert('Algo salio mal', 'no se pudo borrar el trimestre', 'error')
              return
            }
            closeViewTrimesterModal()
            sweetAlert('Se ha Borrado el trimestre  exitosamente', '', 'success')
          })
      })
  }

  if (loading) return <LoadingComponents size={30} />
  return (
    <>
      <TableExcel />
      <DownloadExcel />
      <Button onClick={deleteTrimester}>borrar</Button>
    </>
  )
}
