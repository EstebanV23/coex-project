import { shallow } from 'zustand/shallow'
import sweetAlert from '../constants/sweetAlert'
import { useModalStore } from '../stores/useModalStore'
import { useUnitStore } from '../stores/useUnitStore'
import { useUserStore } from '../stores/useUserStore'
import updateUnitService from '../services/updateUnitService'

export default function useEditUnitModal () {
  const { closeEditUnit } = useModalStore(store => store, shallow)
  const { changeDetected, unitId } = useUnitStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)

  return async (elements) => {
    return await updateUnitService({ ...elements, unitId }, token)
      .then((response) => {
        if (response.error) {
          sweetAlert('Error al actualizar la unidad', 'Ha ocurrido un error inesperado', 'error')
          return
        }
        closeEditUnit()
        sweetAlert('Editado con exito', 'Su unidad se ha actualizado correctamente', 'success')
        changeDetected()
      })
  }
}
