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
      validate={(values) => {
        const errors = {}
        if (!values.name) errors.name = 'El nombre es requerido'
        if (!values.zoneCenter) errors.zoneCenter = 'El centro zonal es requerido'
        return errors
      }}
      onSubmit={(elements) => {
        createUnitService(token, elements)
          .then((response) => {
            if (response.error) {
              sweetAlert('No tienes permisos para crear mas unidades', 'Tienes un límite de creación de unidades, si deseas obtener más unidades comunicate con nosotros en el correo info.mianthro@gmail.com', 'error')
              return
            }
            sweetAlert('Unidad creada con exito', 'Se ha agregado una unidad exitosamente', 'success')
          })
          .finally(() => closeUnitModal())
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
