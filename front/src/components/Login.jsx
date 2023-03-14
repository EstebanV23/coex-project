import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
    console.log(login)
    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
      body: `{"email":"${login.email}", "password":"${login.password}"}`
    }
    console.log(options.body)
    fetch(`${URL}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
  }

  return (
    <div className='flex justify-center items-center h-screen  bg-[#99c3c8]'>
      <div className='bg-white h-2/3 rounded-xl  w-11/12 lg:w-1/2 '>
        <div className='container_title flex justify-center items-center mt-10'>
          <img src='logoFlor.svg' className='h-10' />
          <strong>
            <h1 className='text-center text-6xl font-work mt-2'>mianthro</h1>
          </strong>
        </div>

        <h1 className='text-center text-2xl mt-10'>Iniciar sesión</h1>

        <div className='flex justify-end items-start w-full h-5/6 mt-10'>
          <div className='grid w-5/6'>
            <label htmlFor='' className=''>
              Correo electronico
            </label>
            <input
              type='email'
              placeholder='micorreo@ejemplo.com'
              required
              className='w-10/12 h-8 mb-6 border-2 border-gray-500 rounded '
              value={login.email}
              name='email'
              onChange={loginChange}
            />

            <label htmlFor='' className=''>
              Contraseña
            </label>
            <input
              type='password'
              id=''
              placeholder='************'
              required
              className='w-10/12 h-8 mb-6  border-2 border-gray-500 rounded'
              name='password'
              value={login.password}
              onChange={loginChange}
            />
            <NavLink to='/forgot-password'>Olvidó su contraseña?</NavLink>
            <button
              className='bg-[#66a7ad] text-white h-8 w-10/12 rounded-md   hover:bg-[#3A676B]'
              onClick={submitLogin}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
