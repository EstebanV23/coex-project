import { Formik } from 'formik'
import Input from './Input'
import { BsPersonFill } from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { TbPassword } from 'react-icons/tb'
import { regex } from '../constants/regex'
import { LogoIcon } from './Icons'
import { MdOutlineAlternateEmail } from 'react-icons/md'
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
          const errors = {}
          if (!regex.name.exp.test(values.name)) {
            errors.name = regex.name.msg
          }
          if (!regex.name.exp.test(values.surname)) {
            errors.surname = regex.name.msg.replace('nombres', 'apellidos')
          }
          if (!regex.phone.exp.test(values.phone)) {
            errors.phone = regex.phone.msg
          }
          if (!regex.email.exp.test(values.email)) {
            errors.email = regex.email.msg
          }
          if (!regex.password.exp.test(values.password)) {
            errors.password = regex.password.msg
          }
          if (values.password !== values.secondPassword) {
            errors.secondPassword = '*Las contraseñas no coinciden'
          }
          return errors
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
                    disabled={loading} icon={<MdOutlineAlternateEmail size={22} />} type='text' placeholder='Correo electrónico' name='email' error={errors}
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
