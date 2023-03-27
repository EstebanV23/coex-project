import Button from './Button'
import Input from './Input'
import { Form, Formik } from 'formik'
import createUnitService from '../services/createUnitServices'
import { useUserStore } from '../stores/useUserStore'
import { useModalStore } from '../stores/useModalStore'
import sweetAlert from '../constants/sweetAlert'
export default function ModalNewUnidad () {
  const { token } = useUserStore(store => store)
  const { closeUnitModal } = useModalStore()
  return (
    <Formik
      initialValues={{
        name: '',
        zoneCenter: ''
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
      {({ errors }) => (

        <Form>
          <h1 className='text-2xl text-center mb-10 text-primary-blue'>Nueva unidad</h1>
          <Input
            type='text'
            name='name'
            textLabel='Nombre de la unidad'
            error={errors}
          />
          <Input
            type='text'
            name='zoneCenter'
            textLabel='Centro zonal'
            error={errors}
          />

          <Button className='mt-10' type='submit'>Guardar</Button>
        </Form>

      )}
    </Formik>
  )
}
