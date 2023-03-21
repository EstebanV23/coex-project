import { Formik } from 'formik'
import Button from './Button'
import { LogoIcon } from './Icons'
import Input from './Input'
import { GiBodyHeight } from 'react-icons/gi'
import { FaWeight } from 'react-icons/fa'
import { RiPencilRulerLine } from 'react-icons/ri'
import { useState } from 'react'
import { valoracionDiccionario } from '../constants/valorationDictionary'

export default function UnitVal () {
  const [valoracion, setValoracion] = useState(null)
  return (
    <Formik
      initialValues={{
        peso: '',
        talla: '',
        genero: ''
      }}
      onSubmit={(data) => {
        const { peso, talla, genero } = data
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            peso,
            talla,
            genero
          })
        }
        fetch('https://mianthroapi.onrender.com/unico', options)
          .then(response => response.json())
          .then(response => {
            setValoracion(response.resultado)
          })
      }}
    >
      {({ errors, values, handleSubmit, handleChange, handleBlur }) => (

        <div className='flex justify-center items-center'>
          <form className='bg-white h-fit p-3 rounded-xl w-[95%] sm:p-6 md:p-12 md:max-w-3xl lg:w-3xl' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-0 sm:gap-4 mb-5 justify-center items-center'>
              <LogoIcon fill='black' />
              <h1 className='text-3xl font-work font-bold'>Valoración unitaria</h1>
            </div>
            <div className=' flex flex-wrap gap-6 w-full'>

              <div className='flex flex-col md:flex-row gap-6 w-full'>
                <Input
                  icon={<GiBodyHeight size={22} />} type='text' placeholder='Talla' name='talla' error={errors} value={values.talla} onChange={handleChange} onBlur={handleBlur}
                />
                <Input
                  icon={<FaWeight size={22} />} type='text' placeholder='Peso' name='peso' error={errors} value={values.peso} onChange={handleChange} onBlur={handleBlur}
                />
              </div>
              <div className='flex flex-col gap-3 w-full'>
                <label htmlFor=''>Género</label>
                <select id='' name='genero' value={values.genero} onChange={handleChange} onBlur={handleBlur}>
                  <option value=''>Seleccione</option>
                  <option name='nino' id='nino'>nino</option>
                  <option name='nina' id='nina'>nina</option>
                </select>
              </div>
              <div className='flex flex-col md:flex-row gap-6 w-full'>
                <Input
                  icon={<RiPencilRulerLine size={22} />} disabled type='text' placeholder='Valoración' name='valoracion' value={valoracionDiccionario[valoracion]} error={errors}
                />
              </div>
              <Button type='submit' className='py-2 transition-all duration-500 text-xl text-primary-blue font-bold hover:bg-primary-blue hover:text-white border-primary-blue'>Valorar</Button>

            </div>
          </form>
        </div>

      )}
    </Formik>
  )
}
