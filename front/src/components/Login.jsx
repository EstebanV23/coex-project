import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import Input from './Input'
import { EmailIcon, PasswordIcon, LogoIcon } from './Icons'
import useUser from '../hooks/useUser'
import { Formik } from 'formik'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLogged, login } = useUser()
  const navigate = useNavigate()
  console.log(email, password)
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
        const errores = {}
        if (!values.email) {
          errores.email = '*campo obligatorio'
        }
        if (!values.password) {
          errores.password = '*campo obligatorio'
        }
        return errores
      }}
      onSubmit={(values) => {
        const options = {
          method: 'POST',
          headers: { 'Content-type': 'application/json;charset=UTF-8' },
          body: `{"email":"${values.email}","password":"${values.password}"}`
        }
        fetch('http://localhost:5000/auth/signin', options)
          .then(response => response.json())
          .then(response => console.log(response))
      }}
    >
      {({ errors, values, handleSubmit, handleChange, handleBlur, touched }) => (
        <form className='flex justify-center items-center h-screen  bg-[#99c3c8]' onSubmit={handleSubmit}>
          <div className='bg-white h-2/3 rounded-xl  w-11/12 lg:w-1/2 '>
            <div className='container_title flex justify-center items-center mt-10'>
              <img src='logoFlor.svg' className='h-10' />
              <strong>
                <h1 className='text-center text-6xl font-work mt-2'>mianthro</h1>
              </strong>
            </div>

            <Input
              icon={<PasswordIcon />}
              type='password'
              name='password'
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
          </div>
        </form>
      )}

    </Formik>
  )
}
