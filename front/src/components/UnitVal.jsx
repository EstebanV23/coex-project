import { Formik } from 'formik'
import Button from './Button'
import { LogoIcon } from './Icons'
import Input from './Input'
import SelectUnit from './Select'
import { GiBodyHeight, FaWeight, GrBaby } from 'react-icons/gi'
import Navbar from './Navbar'

export default function UnitVal () {
  return (
    <>
      <Navbar />
      <Formik
        initialValues={{
          height: '',
          weight: '',
          gender: ''
        }}
      >
        {({ errors, handleSubmit }) => (
          <div className='flex justify-center items-center'>
            <form className='bg-white h-fit p-3 rounded-xl w-[95%] sm:p-6 md:p-12 md:max-w-3xl lg:w-3xl' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-0 sm:gap-4 mb-5 justify-center items-center'>
                <LogoIcon fill='black' />
                <h1 className='text-3xl font-work font-bold'>Registro</h1>
              </div>
              <div className=' flex flex-wrap gap-6 w-full'>

                <div className='flex flex-col md:flex-row gap-6 w-full'>
                  <Input
                    icon={<GiBodyHeight size={22} />} type='text' placeholder='Talla' name='height' error={errors}
                  />
                  <Input
                    icon={<FaWeight size={22} />} type='text' placeholder='Peso' name='weight' error={errors}
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-6 w-full'>
                  <SelectUnit
                    icon={<GrBaby size={22} />} type='text' placeholder='Género' name='gender' error={errors}
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-6 w-full'>
                  <Input
                    type='text' placeholder='Valoración' name='valoracion' error={errors}
                  />
                </div>
                <Button type='submit' className='py-2 transition-all duration-500 text-xl text-primary-blue font-bold hover:bg-primary-blue hover:text-white border-primary-blue'>Valorar</Button>

              </div>
            </form>
          </div>

        )}
      </Formik>
    </>
  )
}
