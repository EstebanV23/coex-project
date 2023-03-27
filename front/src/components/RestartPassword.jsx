import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Formik } from 'formik'
import sweetAlert from '../constants/sweetAlert'
import Input from './Input'
import Button from './Button'
import Loading from './Loading'
import { regex } from '../constants/regex'
import EyePassword from './EyePassword'
import { TbPassword } from 'react-icons/tb'
import resetPasswordService from '../services/resetPasswordService'

export default function RestartPassword () {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [searchParams] = useSearchParams()
  const token = searchParams.get('key')
  const navigate = useNavigate()

  return (
    <>
      {loading && <Loading />}
      <h2 className='text-3xl font-bold text-center mb-3'>Reestablecer contraseña</h2>
      <Formik
        initialValues={{
          oldPassword: '',
          password: '',
          passwordConfirm: ''
        }}
        validate={(values) => {
          const errors = {}

          if (!regex.password.exp.test(values.password)) {
            errors.password = regex.password.msg
          }

          if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = 'Las contraseñas no coinciden'
          }
          return errors
        }}
        onSubmit={async (values) => {
          const { password } = values
          setLoading(true)
          const response = await resetPasswordService(password, token)
          setLoading(false)
          response.error ? sweetAlert('Tu tiempo ha caducado', 'Vuelve a solicitar el cambio de contraseña y realizado en el menor tiempo posible', 'error') : sweetAlert('Cambio de contraseña exitoso', 'Tu contraseña ha sido cambiada con éxito')
          navigate('/')
        }}
      >
        {
          ({ errors, handleSubmit }) =>
            <form action='' className='flex flex-col gap-3 bg-white py-8 px-2 w-full max-w-[500px] sm:px-8 rounded-xl' onSubmit={handleSubmit}>
              <div className='relative'>
                <Input
                  id='password'
                  icon={<TbPassword size={23} />}
                  error={errors}
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  autoComplete='off'
                  placeholder='Nueva contraseña'
                />
                <EyePassword setState={setShowPassword} state={showPassword} />
              </div>
              <Input
                id='passwordConfirm'
                icon={<TbPassword size={23} />}
                error={errors}
                type={showPassword ? 'text' : 'password'}
                name='passwordConfirm'
                autoComplete='off'
                placeholder='Repite tu nueva contraseña'
              />
              <Button type='submit' className='text-primary-blue border-primary-blue hover:text-white hover:bg-primary-blue py-3 text-xl'>Enviar</Button>
            </form>
        }
      </Formik>
    </>
  )
}
