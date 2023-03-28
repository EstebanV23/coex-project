import { Formik } from 'formik'
import { InputBlack } from './Input'
import { regex } from '../constants/regex'
import { useUserStore } from '../stores/useUserStore'
import sweetAlert from '../constants/sweetAlert'
import { TbPassword } from 'react-icons/tb'
import Button from './Button'
import { useEffect, useState } from 'react'
import EyePassword from './EyePassword'
import changePasswordService from '../services/changePasswordService'
import { useProfileStore } from '../stores/useProfileStore'
import { shallow } from 'zustand/shallow'

export default function ChangePassword () {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordOld, setShowPasswordOld] = useState(false)
  const { email, token } = useUserStore(store => store)
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)

  useEffect(() => {
    hiddenProfileTrue()
  }, [])

  return (
    <div>
      <h2 className='text-3xl font-bold text-center mb-3'>Cambio de contraseña</h2>
      <Formik
        initialValues={{
          oldPassword: '',
          password: '',
          passwordConfirm: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!regex.password.exp.test(values.oldPassword)) {
            errors.oldPassword = regex.password.msg
          }

          if (!regex.password.exp.test(values.password)) {
            errors.password = regex.password.msg
          }

          if (values.password === values.oldPassword) {
            errors.password = 'La nueva contraseña no puede ser igual a la antigua'
          }

          if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = 'Las contraseñas no coinciden'
          }
          return errors
        }}
        onSubmit={async (values, { resetForm }) => {
          const { oldPassword, password } = values
          const response = await changePasswordService(oldPassword, password, email, token)
          if (response.error) {
            sweetAlert('Tu antigua contraseña no es la correcta', 'Ha ocurrido un error al cambiar tu contraseña, por favor, vuelve a intentarlo', 'error')
            return
          }
          sweetAlert('Cambio de contraseña exitoso', 'Tu contraseña ha sido cambiada con éxito')
          resetForm({ values: { oldPassword: '', password: '', passwordConfirm: '' } })
        }}
      >
        {
          ({ errors, handleSubmit }) =>
            <form action='' className='flex flex-col gap-3' onSubmit={handleSubmit}>
              <div className='relative'>
                <InputBlack
                  icon={<TbPassword size={23} />}
                  error={errors}
                  name='oldPassword'
                  autoComplete='off'
                  textLabel='Antigua contraseña'
                  type={showPasswordOld ? 'text' : 'password'}
                />
                <EyePassword setState={setShowPasswordOld} state={showPasswordOld} />
              </div>
              <div className='relative'>
                <InputBlack
                  icon={<TbPassword size={23} />}
                  error={errors}
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  autoComplete='off'
                  textLabel='Nueva contraseña'
                />
                <EyePassword setState={setShowPassword} state={showPassword} />
              </div>
              <InputBlack
                icon={<TbPassword size={23} />}
                error={errors}
                type={showPassword ? 'text' : 'password'}
                name='passwordConfirm'
                autoComplete='off'
                textLabel='Repite tu nueva contraseña'
              />
              <Button type='submit' className='text-xl py-2'>Enviar</Button>
            </form>
        }
      </Formik>
    </div>
  )
}
