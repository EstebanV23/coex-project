import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'

import Input from './Input'
import { EmailIcon, PasswordIcon, LogoIcon } from './Icons'
import useUser from '../hooks/useUser'
import { regex } from '../constants/regex'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLoginLoading, hasLoginError, isLogged, login } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={(values) => {
        const errors = {}
        if (!regex.email.test(values.email)) errors.email = 'El correo debe ser válido. ej: ejemplo@dominio.com'
        if (!values.password) errors.password = 'La contraseña es requerida'
        return errors
      }}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <div className='bg-white h-2/3 rounded-xl  w-11/12 lg:w-1/2 '>
          <LogoIcon fill='black' />
          <h1 className='text-center'>Login</h1>
          <form onSubmit={handleSubmit} className='flex flex-col w-full gap-4 items-center'>
            <Input
              icon={<EmailIcon />}
              type='email'
              name='email'
              error={errors}
              placeholder='Tucorreo@ejemplo.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              icon={<PasswordIcon />}
              type='password'
              name='password'
              error={errors}
              placeholder='************'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <NavLink to='/forgot-password' className='text-xl text-primary-blue-500 hover:text-slate-700 hover:underline ease-in-out duration-200'>Olvidó su contraseña?</NavLink>
            <NavLink to='/register' className='text-xl text-primary-blue-500 hover:text-slate-700 hover:underline ease-in-out duration-200'>Aún no tienes una cuenta?</NavLink>

            <button
              className='bg-primary-blue text-white h-14 w-10/12 rounded-xl text-2xl font-bold hover:bg-primary-blue-600 ease-in-out duration-200'
              onClick={handleSubmit}
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      )}
    </Formik>

  )
}
