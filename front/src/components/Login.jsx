import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Formik, Form } from 'formik'

import Input from './Input'
import { EmailIcon, PasswordIcon, LogoIcon } from './Icons'
import useUser from '../hooks/useUser'
import { regex } from '../constants/regex'
import Loading from './Loading'
import { useNavbarStore } from '../stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import EyePassword from './EyePassword'
import { useModalStore } from '../stores/useModalStore'

const validateInputs = values => {
  const errors = {}
  if (!regex.email.exp.test(values.email)) errors.email = regex.email.msg
  if (!values.password) errors.password = 'La contraseña es requerida'
  return errors
}

export default function Login () {
  const { isLoginLoading, hasLoginError, login } = useUser()
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const [showPassword, setShowPassword] = useState(false)
  const { closeLoggin, openRegister } = useModalStore(store => store, shallow)

  useEffect(() => {
    hiddenTrue()
  }, [])

  const handleSubmit = values => {
    return login(values)
  }

  return (
    <>
      {isLoginLoading && <Loading />}
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={validateInputs}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <div className='w-full px-2 sm:px-10 py-12 transition-all '>
            <h1 className='text-4xl text-center font-work font-bold'>Login</h1>
            <Form className='flex flex-col w-full gap-8 items-center pt-8'>
              <Input
                icon={<EmailIcon />}
                type='email'
                name='email'
                textLabel='Correo electrónico'
                error={errors}
              />

              <div className='relative w-full'>
                <Input
                  icon={<PasswordIcon />}
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  textLabel='Contraseña'
                  error={errors}
                  autoComplete='off'
                />
                <EyePassword size={23} state={showPassword} setState={setShowPassword} />
              </div>

              {hasLoginError && <p className='text-red-500 text-base font-semibold text-center'>El correo o la contraseña son incorrectos</p>}

              <div className='flex flex-col sm:flex-row justify-between w-full text-center gap-2'>
                <NavLink
                  to='/forgot-password'
                  className='text-base text-primary-blue-500 hover:text-slate-700 hover:underline ease-in-out duration-200'
                >Olvidó su contraseña?
                </NavLink>
                <NavLink
                  className='text-base text-primary-blue-500 hover:text-slate-700 hover:underline ease-in-out duration-200'
                  onClick={() => {
                    closeLoggin()
                    openRegister()
                  }}
                >Aún no tienes una cuenta?
                </NavLink>
              </div>

              <button
                type='submit'
                className='bg-primary-blue text-white h-12 w-full rounded-xl text-xl font-bold hover:bg-primary-blue-600 ease-in-out duration-200'
              >
                Iniciar sesión
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}
