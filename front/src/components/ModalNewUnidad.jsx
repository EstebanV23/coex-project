import Button from './Button'
import Input from './Input'
import { Formik } from 'formik'

export default function ModalNewUnidad () {
  return (
    <Formik
      initialValues={{
        name: '',
        zonal: '',
        file: ''
      }}
    >
      {({ errors }) => (

        <div>
          <h1 className='text-2xl text-center mb-10 text-primary-blue'>Nueva unidad</h1>
          <Input
            type='text'
            name='email'
            textLabel='Nombre de la unidad'
            error={errors}
          />
          <Input
            type='text'
            name='zonal'
            textLabel='Centro zonal'
            error={errors}
          />

          <Button className='mt-10'>Guardar</Button>
        </div>

      )}
    </Formik>
  )
}
