import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import Input from './Input'
import { EmailIcon, PasswordIcon, LogoIcon } from './Icons'
import useUser from '../hooks/useUser'
import { regex } from '../constants/regex'
import Loading from './Loading'
import { useNavbarStore } from '../stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import EyePassword from './EyePassword'

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
        {({ errors, values, handleChange }) => (
          <div className='bg-white rounded-3xl w-[95%] sm:max-w-3xl lg:w-3xl m-auto px-2 sm:px-10 py-12'>
            <div className='flex flex-col justify-center items-center'>
              <LogoIcon fill='black' />
              <h1 className='text-4xl font-work mt-6 font-bold'>Login</h1>
            </div>
            <Form className='flex flex-col w-full gap-8 items-center pt-8'>
              <Input
                icon={<EmailIcon />}
                type='email'
                name='email'
                error={errors}
                placeholder='Tucorreo@ejemplo.com'
              />

              <div className='relative w-full'>
                <Input
                  icon={<PasswordIcon />}
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  error={errors}
                  placeholder='************'
                  autoComplete='off'
                />
                <EyePassword size={23} state={showPassword} setState={setShowPassword} />
              </div>

              {hasLoginError && <p className='text-red-500 text-lg font-semibold text-center'>El correo o la contraseña son incorrectos</p>}

              <div className='flex flex-col sm:flex-row justify-between w-full text-center gap-3'>
                <NavLink
                  to='/forgot-password'
                  className='text-xl text-primary-blue-500 hover:text-slate-700 hover:underline ease-in-out duration-200'
                >Olvidó su contraseña?
                </NavLink>
                <NavLink
                  to='/register'
                  className='text-xl text-primary-blue-500 hover:text-slate-700 hover:underline ease-in-out duration-200'
                >Aún no tienes una cuenta?
                </NavLink>
              </div>

              <button
                type='submit'
                className='bg-primary-blue text-white h-14 w-full rounded-xl text-2xl font-bold hover:bg-primary-blue-600 ease-in-out duration-200'
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
