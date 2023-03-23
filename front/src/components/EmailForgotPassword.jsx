import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import sweetAlert from '../constants/sweetAlert'
import forgotPasswordService from '../services/forgotPasswordService'
import Input from './Input'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import Button from './Button'
import { useState } from 'react'
import Loading from './Loading'
import { regex } from '../constants/regex'

export default function EmailForgotPassword () {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

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
          navigate('/login')
        }}
      >
        {({ errors, handleSubmit }) => (
          <form
            className='bg-white w-full max-w-[500px] rounded-xl py-8 px-2 sm:px-8 flex flex-col gap-4'
            onSubmit={handleSubmit}
          >
            <Input
              icon={<MdOutlineAlternateEmail size={23} />}
              name='email'
              type='email'
              autoComplete='on'
              error={errors}
              placeholder='Email. ej: ejemplo@dominio.com'
            />
            <Button type='submit' className='text-primary-blue py-3 border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-500'>Enviar</Button>
          </form>

        )}
      </Formik>
    </>
  )
}
