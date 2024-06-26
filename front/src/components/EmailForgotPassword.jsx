import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import sweetAlert from '../constants/sweetAlert'
import forgotPasswordService from '../services/forgotPasswordService'
import Input from './Input'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import Button from './Button'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import { regex } from '../constants/regex'
import { useModalStore } from '../stores/useModalStore'
import { shallow } from 'zustand/shallow'

export default function EmailForgotPassword () {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { closeLoggin, closeRegister } = useModalStore(store => store, shallow)
  useEffect(() => {
    closeLoggin()
    closeRegister()
  }, [])

  return (
    <>
      {loading && <Loading />}
      <h2 className='text-3xl font-bold text-center mb-3'>Cambio de contraseña</h2>
      <Formik
        initialValues={{ email: '' }}
        validate={(values) => {
          const errors = {}
          if (!regex.email.exp.test(values.email)) {
            errors.email = regex.email.msg
          }
          return errors
        }}
        onSubmit={async (values) => {
          const { email } = values
          setLoading(true)
          const response = await forgotPasswordService(email)
          setLoading(false)
          response.error
            ? sweetAlert('Este correo no tiene cuenta asociada', 'El correo al que intentas cambiar lac contraseña no tiene una cuenta asociada', 'error')
            : sweetAlert(`Email enviado a ${email}`, 'Te hemos enviado un email con las instrucciones para cambiar tu contraseña')
          navigate('/')
        }}
      >
        {({ errors }) => (
          <Form className='bg-white w-[95%] max-w-[500px] rounded-xl py-8 px-6 sm:px-8 flex flex-col gap-4'>
            <Input
              icon={<MdOutlineAlternateEmail size={23} />}
              name='email'
              type='email'
              textLabel='Correo electrónico'
              autoComplete='on'
              error={errors}
            />
            <Button type='submit' className='text-primary-blue py-3 border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-500'>Enviar</Button>
          </Form>

        )}
      </Formik>
    </>
  )
}
