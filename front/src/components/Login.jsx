import { Formik } from 'formik'
import { useState } from 'react'
export default function Login () {
  const URL = 'http://localhost:5000/auth/signin'
  const [loginChange, setLoginChange] = useState({})
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
        console.log(values)

        const options = {
          method: 'POST',
          headers: { 'Content-type': 'application/json;charset=UTF-8' },
          body: `{"email":"${values.email}","password":"${values.password}"}`
        }

        console.log(options.body)

        fetch('http://localhost:5000/auth/signin', options)
          .then(response => response.json())
          .then(response => setLoginChange(loginChange))
        console.log(options.body)
        console.log(loginChange)
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

            <h1 className='text-center text-2xl mt-10'>Iniciar sesión</h1>

            <div className='flex justify-end items-start w-full h-5/6 mt-10'>
              <div className='grid w-5/6'>
                <div className='mb-6'>
                  <label htmlFor='' className=''>
                    Correo electronico
                  </label>
                  <input
                    type='email'
                    placeholder='micorreo@ejemplo.com'
                    required
                    className='w-10/12 h-8  border-2 border-gray-500 rounded '
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? <div className='text-error-700'>{errors.email}</div> : null}

                </div>

                <div className='mb-6'>
                  <label htmlFor='' className=''>
                    Contraseña <br />
                  </label>

                  <input
                    type='password'
                    id=''
                    placeholder='************'
                    required
                    className='w-10/12 h-8  border-2 border-gray-500 rounded'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password ? <div className='text-error-700'>{errors.password}</div> : null}
                </div>

                <button
                  type='submit'
                  className='bg-[#66a7ad] text-white h-8 w-10/12 rounded-md   hover:bg-[#3A676B]'
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

    </Formik>

  )
}
