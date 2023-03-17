import { Formik } from 'formik'

export default function UnitVal () {
  return (
    <Formik
      initialValues={{
        peso: '',
        talla: '',
        genero: ''
      }}
      validate={(values) => {
        const errores = {}
        if (!values.peso) {
          errores.peso = '*campo obligatorio'
        }
        if (!values.talla) {
          errores.talla = '*campo obligatorio'
        }
        if (!values.genero) {
          errores.genero = '*campo obligatorio'
        }
        return errores
      }}
      onSubmit={(values) =>
        console.log(values)}
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

            <h1 className='text-center text-2xl mt-10'>Valoración unitaria</h1>

            <div className='flex justify-end items-start w-full h-5/6 mt-10'>
              <div className='grid w-5/6'>
                <div className='mb-6'>
                  <label htmlFor='' className=''>
                    Peso
                  </label>
                  <input
                    type='number'
                    placeholder='12'
                    required
                    className='w-10/12 h-8  border-2 border-gray-500 rounded '
                    name='peso'
                    value={values.peso}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.peso && errors.peso ? <div className='text-error-700'>{errors.peso}</div> : null}
                </div>

                <div className='mb-6'>
                  <label htmlFor='' className=''>
                    Talla <br />
                  </label>
                  <input
                    type='number'
                    id=''
                    placeholder='10'
                    required
                    className='w-10/12 h-8  border-2 border-gray-500 rounded'
                    name='talla'
                    value={values.talla}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.talla && errors.talla ? <div className='text-error-700'>{errors.talla}</div> : null}
                </div>
                <button
                  type='submit'
                  className='bg-[#66a7ad] text-white h-8 w-10/12 rounded-md   hover:bg-[#3A676B]'
                >
                  Valorar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}
