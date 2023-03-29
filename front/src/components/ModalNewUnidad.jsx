import Button from './Button'
import Input from './Input'
import { Form, Formik } from 'formik'
import useCreateUnitModal from '../hooks/useCreateUnitModal'
import Loading from './Loading'
import { useState } from 'react'

export default function ModalNewUnidad ({ name = '', zoneCenter = '', textButton = 'Guardar', callBack, title = 'Nueva Unidad' }) {
  const defaultFunction = useCreateUnitModal()
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading && <Loading />}
      <Formik
        initialValues={{
          name,
          zoneCenter
        }}
        validate={(values) => {
          const errors = {}
          if (!values.name) errors.name = 'El nombre es requerido'
          if (!values.zoneCenter) errors.zoneCenter = 'El centro zonal es requerido'
          return errors
        }}
        onSubmit={async (elements) => {
          setLoading(true)
          if (callBack) {
            await callBack(elements)
            setLoading(false)
            return
          }

          await defaultFunction(elements)
          setLoading(false)
        }}
      >
        {({ errors }) => (

          <Form>
            <h1 className='text-2xl font-bold text-center text-primary-blue-700'>{title}</h1>
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

            <Button className='mt-10' type='submit'>{textButton}</Button>
          </Form>

        )}
      </Formik>
    </>
  )
}
