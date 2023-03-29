import { MdDelete, MdEditDocument } from 'react-icons/md'
import deleteTrimesterService from '../services/deleteTrimesterService'
import { useModalStore } from '../stores/useModalStore'
import sweetAlert from '../constants/sweetAlert'
import { useUnitStore } from '../stores/useUnitStore'
import { shallow } from 'zustand/shallow'
import { useTrimesterStore } from '../stores/useTrimesterStore'
import { useUserStore } from '../stores/useUserStore'

export default function ButtonsActionsTrimester ({ trimester, unit }) {
  const { openEditTrimester, resetValuesModals } = useModalStore()
  const { unitId, changeDetected, setUnitId } = useUnitStore(store => store, shallow)
  const { trimesterId, setTrimesterId } = useTrimesterStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)

  function deleteTrimester () {
    sweetAlert(
      'Estás seguro que quieres borrar este trimestre', 'Lo eliminarás permantemente', 'warning', 'Eliminar!', true, '#d33', '#55e')
      .then((response) => {
        if (!response.isConfirmed) return
        const trimesterSelected = trimester ?? trimesterId
        const unitSelected = unit ?? unitId
        deleteTrimesterService({
          unit: unitSelected,
          trimesterId: trimesterSelected
        }, token)
          .then((responseDelete) => {
            if (responseDelete.error) {
              sweetAlert('Algo salio mal', 'no se pudo borrar el trimestre', 'error')
              return
            }
            sweetAlert('Se ha Borrado el trimestre  exitosamente', '', 'success')
            changeDetected()
          })
      })
  }

  function editTrimester () {
    setUnitId(unit ?? unitId)
    setTrimesterId(trimester ?? trimesterId)
    resetValuesModals()
    openEditTrimester()
  }

  return (
    <div className='flex relative z-10 gap-2 text-md'>
      <MdEditDocument onClick={() => editTrimester()} className='p-1 rounded-md bg-transparent hover:bg-secondary-blue-400 cursor-pointer hover:text-primary-blue-800 transition-all duration-300' />
      <MdDelete onClick={() => deleteTrimester()} className='p-1 rounded-md bg-transparent hover:bg-error-300 cursor-pointer hover:text-error-600 transition-all duration-300' />
    </div>
  )
}
