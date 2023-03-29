import { Form, Formik } from 'formik'
import Button from './Button'
import Input from './Input'
import { GiBodyHeight } from 'react-icons/gi'
import { FaWeight, FaBaby } from 'react-icons/fa'
import { RiPencilRulerLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { valoracionDiccionario } from '../constants/valorationDictionary'
import { useNavbarStore } from '../stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import LoadingComponents from './LoadingComponents'
import { regex } from '../constants/regex'
import getValorationUniqueService from '../services/getValorationUniqueService'

const validateInputs = values => {
  const errors = {}
  if (!regex.peso.exp.test(values.peso)) {
    errors.peso = regex.peso.msg
  }
  if (!regex.talla.exp.test(values.talla)) {
    errors.talla = regex.talla.msg
  }

  if (!values.genero) errors.genero = 'Selecciona una opción'
  return errors
}

export default function ValoracionUnica () {
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
      validate={validateInputs}
      onSubmit={(data) => {
        setLoading(true)
        getValorationUniqueService(data)
          .then(response => {
            setValoracion(response.resultado)
            setLoading(false)
          })
      }}
    >
      {({ errors }) => (

        <div className='flex justify-center my-12 items-center'>
          <Form className='bg-white h-fit py-10 w-[95%] px-6 rounded-2xl sm:py-12 sm:px-16 max-w-3xl shadow-xl'>
            <div className='flex flex-col gap-0 sm:gap-4 mb-5 justify-center items-center'>
              <h1 className='text-3xl font-bold text-center text-primary-blue-800'>Valoración unitaria</h1>
            </div>
            <div className=' flex flex-wrap gap-6 w-full'>

              <div className='flex flex-col md:flex-row gap-6 w-full'>
                <div className='relative w-full'>
                  <Input
                    disabled={loading} icon={<FaWeight size={22} />} type='number' textLabel='Peso' name='peso' error={errors}
                  />
                  <p className='absolute right-10 top-5 text-gray-500'>KG</p>
                </div>
                <div className='relative w-full'>
                  <Input
                    disabled={loading} icon={<GiBodyHeight size={22} />} type='number' textLabel='Talla' name='talla' error={errors}
                  />
                  <p className='absolute right-10 top-5 text-gray-500'>CM</p>
                </div>
              </div>
              <Input disabled={loading} name='genero' error={errors} icon={<FaBaby size={22} />} as='select'>
                <option value=''>Género</option>
                <option value='nino' id='nino'>Niño</option>
                <option value='nina' id='nina'>Niña</option>
              </Input>
              <div className='flex flex-col md:flex-row gap-6 w-full'>
                <Input
                  icon={<RiPencilRulerLine size={22} />} disabled type='text' textLabel='Valoración' name='valoracion' value={valoracionDiccionario[valoracion] ?? ''} error={errors}
                />
              </div>
              <Button type='submit' disabled={loading} className='py-2 w-full transition-all duration-500 text-xl text-primary-blue font-bold hover:bg-primary-blue hover:text-white border-primary-blue'>{loading ? <LoadingComponents size={27} /> : 'Valorar'}</Button>

            </div>
          </Form>
        </div>

      )}
    </Formik>
  )
}
