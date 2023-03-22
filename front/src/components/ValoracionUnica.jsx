import { Formik } from 'formik'
import Button from './Button'
import { LogoIcon } from './Icons'
import Input from './Input'
import { GiBodyHeight } from 'react-icons/gi'
import { FaWeight, FaBaby } from 'react-icons/fa'
import { RiPencilRulerLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { valoracionDiccionario } from '../constants/valorationDictionary'
import { useNavbarStore } from '../stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import LoadingComponents from './LoadingComponents'

export default function UnitVal () {
  const [loading, setLoading] = useState(false)
  const [valoracion, setValoracion] = useState(null)
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  useEffect(() => {
    hiddenTrue()
  }, [])
  return (
    <Formik
      initialValues={{
        peso: '',
        talla: '',
        genero: ''
      }}
      onSubmit={(data) => {
        setLoading(true)
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
            setLoading(false)
          })
      }}
    >
      {({ errors, handleSubmit }) => (

        <div className='flex justify-center p-10 items-center'>
          <form className='bg-white h-fit p-3 rounded-xl w-[95%] sm:p-6 md:p-12 md:max-w-3xl lg:w-3xl' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-0 sm:gap-4 mb-5 justify-center items-center'>
              <h1 className='text-3xl font-work font-bold'>Valoración unitaria</h1>
            </div>
            <div className=' flex flex-wrap gap-6 w-full'>

              <div className='flex flex-col md:flex-row gap-6 w-full'>
                <Input
                  disabled={loading} icon={<GiBodyHeight size={22} />} type='text' placeholder='Talla' name='talla' error={errors}
                />
                <Input
                  disabled={loading} icon={<FaWeight size={22} />} type='text' placeholder='Peso' name='peso' error={errors}
                />
              </div>
              <Input disabled={loading} name='genero' icon={<FaBaby size={22} />} as='select'>
                <option value=''>Género</option>
                <option name='nino' id='nino'>Niño</option>
                <option name='nina' id='nina'>Niña</option>
              </Input>
              <div className='flex flex-col md:flex-row gap-6 w-full'>
                <Input
                  icon={<RiPencilRulerLine size={22} />} disabled type='text' placeholder='Valoración' name='valoracion' value={valoracionDiccionario[valoracion]} error={errors}
                />
              </div>
              <Button type='submit' disabled={loading} className='py-2 transition-all duration-500 text-xl text-primary-blue font-bold hover:bg-primary-blue hover:text-white border-primary-blue'>{loading ? <LoadingComponents size={27} /> : 'Valorar'}</Button>

            </div>
          </form>
        </div>

      )}
    </Formik>
  )
}
