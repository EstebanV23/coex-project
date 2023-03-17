import { Formik } from 'formik'

export default function Register () {
  return (
    <Formik>
      {({ errors, values, handleSubmit, handleChange, handleBlur, touched }) => (
        <div className='flex justify-center items-center h-screen '>
          <form className='bg-white md:h-5/6 h-full rounded-xl  w-11/12 lg:w-5/6 ' onSubmit={handleSubmit}>
            <div className='container_title flex justify-center items-center mt-10'>
              <img src='logoFlor.svg' className='h-10' />
              <strong>
                <h1 className='text-center text-6xl font-work mt-2'>mianthro</h1>
              </strong>
            </div>
            <strong><h1 className='text-center text-3xl font-work mt-10 md:mb-10'>Registro</h1></strong>

            <div className='grid  md:grid-cols-2  place-items-center w-full'>
              <div className='w-11/12 grid place-items-center md:mb-6 '>
                <label htmlFor=''>Apellidos: <br /></label>
                <input type='text' className='w-10/12 h-8 border-2 border-gray-500 rounded' />
              </div>
              <div className='w-11/12 grid place-items-center md:mb-6'>
                <label htmlFor=''>Telefono <br /></label>
                <input type='text' className='w-10/12 h-8 border-2 border-gray-500 rounded' />
              </div>
              <div className='w-11/12 grid place-items-center md:mb-6'>
                <label htmlFor=''>Cedula <br /></label>
                <input type='number' className=' w-10/12 h-8 border-2 border-gray-500 rounded' />
              </div>

              <div className='w-11/12 grid place-items-center md:mb-6   md:col-start-1 md:col-end-3 md:w-full'>
                <label htmlFor=''>Correo electronico: <br /></label>
                <input type='email' className='w-10/12 text_input h-8 border-2 border-gray-500 rounded' />
              </div>

              <div className='w-11/12 grid place-items-center'>
                <label htmlFor=''>Contraseña: <br /></label>
                <input type='password' className='w-10/12 h-8 bgstorder-2 border-gray-500 rounded ' />
              </div>
              <div className='w-11/12 grid place-items-center '>
                <label htmlFor=''>Repita la contraseña: <br /></label>
                <input type='password' className='w-10/12 h-8 border-2 border-gray-500 rounded' />
              </div>

              <div className='w-full grid place-items-center md:col-start-1 md:col-end-3 mt-20'>
                <button className='text_input bg-[#66a7ad] text-white h-10 w-10/12 rounded-md   hover:bg-[#3A676B]'>Registrarse</button>
              </div>

            </div>
          </form>
        </div>

      )}
    </Formik>

  )
}
