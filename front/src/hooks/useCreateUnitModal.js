import { shallow } from 'zustand/shallow'
import sweetAlert from '../constants/sweetAlert'
import { useModalStore } from '../stores/useModalStore'
import { useUnitStore } from '../stores/useUnitStore'
import { useUserStore } from '../stores/useUserStore'
import createUnitService from '../services/createUnitServices'

export default function useCreateUnitModal () {
  const { closeUnitModal } = useModalStore(store => store, shallow)
  const { changeDetected } = useUnitStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)

  return async (elements) => {
    const response = await createUnitService(elements, token)
    closeUnitModal()
    if (response.error) {
      sweetAlert('No tienes permisos para crear mas unidades', 'Tienes un límite de creación de unidades, si deseas obtener más unidades comunicate con nosotros en el correo info.mianthro@gmail.com', 'error')
      return response
    }
    sweetAlert('Unidad creada con exito', 'Se ha agregado una unidad exitosamente', 'success')
    changeDetected()
    return response
  }
}
