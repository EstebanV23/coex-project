import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { EmailIcon, PasswordIcon, LogoIcon } from './Icons'
import Input from './Input'

export default function Login () {
  const URL = 'http://localhost:5000/auth/signin'

  const [login, setlogin] = useState({
    email: '',
    password: ''
  })

  const loginChange = ({ target }) => {
    const { name, value } = target
    setlogin({
      ...login,
      [name]: value
    })
  }

  const submitLogin = () => {
    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
      body: `{"email":"${login.email}", "password":"${login.password}"}`
    }
    fetch(`${URL}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err))
  }

  return (
    <div className='bg-white rounded-[40px] p-16  w-11/12 lg:w-1/2 '>

      <div className='flex justify-center items-center'>
        <LogoIcon fill='black' className='w-[700px] h-[200px]' />
      </div>

      <h1 className='text-center text-4xl font-bold mt-10'>Iniciar sesión</h1>

      <div className='flex justify-center mt-10'>
        <div className='flex flex-col w-full gap-4 items-center'>
          <Input
            icon={<EmailIcon />}
            type='email'
            name='email'
            placeholder='Tucorreo@ejemplo.com'
            value={login.email}
            onChange={loginChange}
          />

          <Input
            icon={<PasswordIcon />}
            type='password'
            name='password'
            placeholder='************'
            value={login.password}
            onChange={loginChange}
          />
          <NavLink to='/forgot-password' className='font-semibold text-xl hover:text-primary-blue-500 transition-colors duration-200'>Olvidó su contraseña?</NavLink>

          <button
            className='bg-primary-blue text-white h-14 w-10/12 rounded-xl text-2xl font-bold hover:bg-primary-blue-600'
            onClick={submitLogin}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  )
}
