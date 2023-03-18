import { Formik } from 'formik'
import Input from './Input'
import { BsPersonFill } from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { TbPassword } from 'react-icons/tb'
import { regex } from '../constants/regex'
import { LogoIcon } from './Icons'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import registerService from '../services/registerService'
import { useState } from 'react'
import LoadingComponents from './LoadingComponents'
import sweetAlert from '../constants/sweetAlert'

export default function Register () {
  const [loading, setLoading] = useState(false)
  const [emailDuplicate, setEmailDuplicate] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          dni: '',
          phone: '',
          email: '',
          password: '',
          secondPassword: ''
        }}
        validate={(values) => {
          const errorsValidate = {}
          if (!regex.name.test(values.name)) {
            errorsValidate.name = '*Los nombres solo permiten letras'
          }
          if (!regex.name.test(values.surname)) {
            errorsValidate.surname = '*Los apellido solo permiten letras'
          }
          if (!regex.phone.test(values.phone)) {
            errorsValidate.phone = '*El teléfono debe contener 10 digitos'
          }
          if (!regex.email.test(values.email)) {
            errorsValidate.email = '*El email debe tener un dóminio válido Ej: ejemplo@dominio.com'
          }
          if (!regex.password.test(values.password)) {
            errorsValidate.password = '*La contraseña debe ser de 8 caracteres, con al menos una letra mayúscula, una letra minúscula y un número'
          }
          if (values.password !== values.secondPassword) {
            errorsValidate.secondPassword = '*Las contraseñas no coinciden'
          }
          return errorsValidate
        }}
        onSubmit={async (values) => {
          setLoading(true)
          setEmailDuplicate(false)
          const { name, surname, email, phone, password } = values
          const response = await registerService({ name, surname, email, phone, password })
          setLoading(false)
          if (response === undefined) {
            setEmailDuplicate(true)
            return
          }

          sweetAlert('Registro exitoso', `A tu correo ${email} se ha enviado un link para verificar tu cuenta`)
          navigate('/login')
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
                    disabled={loading} icon={<BsPersonFill size={22} />} type='text' placeholder='Nombres' name='name' error={errors}
                  />
                  <Input
                    disabled={loading} icon={<BsPersonFill size={22} />} type='text' placeholder='Apellidos' name='surname' error={errors}
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-6 w-full'>
                  <Input
                    disabled={loading} icon={<AiTwotonePhone size={22} />} type='text' placeholder='Telefono' name='phone' error={errors}
                  />
                  <Input
                    disabled={loading} icon={<BsPersonFill size={22} />} type='text' placeholder='Correo electrónico' name='email' error={errors}
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-6 w-full'>
                  <Input
                    disabled={loading} autoComplete='off' icon={<TbPassword size={22} />} type='password' placeholder='Contraseña' name='password' error={errors}
                  />

                  <Input
                    disabled={loading} autoComplete='off' icon={<TbPassword size={22} />} type='password' placeholder='Repetir contraseña' name='secondPassword' error={errors}
                  />
                </div>
                <div className='flex flex-col items-start justify-between w-full'>
                  <Link to='/login' className='text-primary-blue text-xl'>Ya tienes una cuenta?</Link>
                  {emailDuplicate && <p className='text-error text-xl'>Este correo ya se encuentra registrado</p>}
                </div>
                <Button disabled={loading} type='submit' className='py-2 transition-all duration-500 text-xl text-primary-blue font-bold hover:bg-primary-blue hover:text-white border-primary-blue'>{loading ? <LoadingComponents size={27} /> : 'Registrarse'}</Button>
              </div>
            </form>
          </div>

        )}
      </Formik>
    </>

  )
}
