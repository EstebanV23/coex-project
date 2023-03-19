import { Formik } from 'formik'
import Input from './Input'
import { regex } from '../constants/regex'
import { useUserStore } from '../stores/useUserStore'
import sweetAlert from '../constants/sweetAlert'
import { TbPassword } from 'react-icons/tb'
import Button from './Button'

export default function ChangePassword () {
  const { password: passwordRegex } = regex
  const { id, token } = useUserStore(store => store)
  return (
    <div>
      <h2 className='text-3xl font-bold text-center mb-3'>Cambio de contraseña</h2>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          newPasswordConfirm: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!passwordRegex.test(values.oldPassword)) {
            errors.oldPassword = 'La contraseña debe tener al menos 8 caracteres, con una mayúscula, minúscula y un número'
          }

          if (!passwordRegex.test(values.newPassword)) {
            errors.newPassword = 'La contraseña debe tener al menos 8 caracteres, con una mayúscula, minúscula y un número'
          }

          if (values.newPassword !== values.newPasswordConfirm) {
            errors.newPasswordConfirm = 'Las contraseñas no coinciden'
          }
          return errors
        }}
        onSubmit={async (values) => {
          sweetAlert('Editado correctamente', 'Tus datos han sido editados correctamente')
        }}
      >
        {
          ({ errors, handleSubmit }) =>
            <form action='' className='flex flex-col gap-3' onSubmit={handleSubmit}>
              <Input
                id='oldPassword'
                icon={<TbPassword size={23} />}
                error={errors}
                name='oldPassword'
                autoComplete='off'
                placeholder='Antigua contraseña'
              />
              <Input
                id='newPassword'
                icon={<TbPassword size={23} />}
                error={errors}
                name='newPassword'
                autoComplete='off'
                placeholder='Nueva contraseña'
              />
              <Input
                id='confirmPassword'
                icon={<TbPassword size={23} />}
                error={errors}
                name='confirmPassword'
                autoComplete='off'
                placeholder='Repite tu nueva contraseña'
              />
              <Button type='submit' className='text-primary-blue border-primary-blue hover:text-white hover:bg-primary-blue py-3 text-xl'>Enviar</Button>
            </form>
        }
      </Formik>
    </div>
  )
}
