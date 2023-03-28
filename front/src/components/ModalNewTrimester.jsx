
import { Formik } from 'formik'
import createUnitService from '../services/createUnitServices'
import { useUserStore } from '../stores/useUserStore'
import { useModalStore } from '../stores/useModalStore'
import sweetAlert from '../constants/sweetAlert'
import File from './File'

export default function ModalNewTrimestre () {
  const { token } = useUserStore(store => store)
  const { closeUnitModal } = useModalStore()
  const update = true
  return (
    <Formik
      initialValues={{
        file: ''
      }}
      onSubmit={(elements) => {
        createUnitService(token, elements)
          .then((response) => {
            if (response.error) {
              sweetAlert('No tienes permisoss para crear mas unidades', '', 'error')
              return
            }

            sweetAlert('Unidad creada con exito', '', 'success')
          }).finally(() => closeUnitModal())
      }}
    >
      {({ errors, handleSubmit }) => (

        <div>
          <File update={update} />
        </div>

      )}
    </Formik>
  )
}
