import { Formik } from 'formik'
import Input from './Input'
import { BsPersonFill } from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { TbPassword } from 'react-icons/tb'
import { regex } from '../constants/regex'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import Button from './Button'
import { NavLink, useNavigate } from 'react-router-dom'
import registerService from '../services/registerService'
import { useState } from 'react'
import LoadingComponents from './LoadingComponents'
import sweetAlert from '../constants/sweetAlert'
import EyePassword from './EyePassword'
import { shallow } from 'zustand/shallow'
import { useModalStore } from '../stores/useModalStore'
import ButtonMinimalist from './ButtonMinimalist'

export default function Register () {
  const [loading, setLoading] = useState(false)
  const [emailDuplicate, setEmailDuplicate] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { openLoggin, closeRegister } = useModalStore(store => store, shallow)
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
          sweetAlert('Registro exitoso', `A tu correo ${email} se ha enviado un link para verificar tu cuenta, recuerda que tienes 3 días para verificarte, de lo contrario tu cuenta será eliminada`)
          closeRegister()
          openLoggin()
        }}
      >
        {({ errors, handleSubmit }) => (
          <div className='w-full flex justify-center items-center'>
            <form className='bg-white h-fit p-3 rounded-xl sm:p-6 md:max-w-3xl lg:w-3xl' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-0 sm:gap-4 mb-5 justify-center items-center'>
                <h1 className='text-3xl font-work font-bold'>Registro</h1>
              </div>
              <div className=' flex flex-wrap gap-6 w-full'>

                <div className='flex flex-col md:flex-row gap-6 w-full'>
                  <Input
                    disabled={loading} icon={<BsPersonFill size={22} />} type='text' textLabel='Nombres' name='name' error={errors}
                  />
                  <Input
                    disabled={loading} icon={<BsPersonFill size={22} />} type='text' textLabel='Apellidos' name='surname' error={errors}
                  />
                </div>
                <Input
                  disabled={loading} icon={<AiTwotonePhone size={22} />} type='tel' textLabel='Telefono' name='phone' error={errors}
                />
                <Input
                  disabled={loading} icon={<MdOutlineAlternateEmail size={22} />} type='email' textLabel='Correo electrónico' name='email' error={errors}
                />
                <div className='flex flex-col md:flex-row gap-6 w-full'>
                  <div className='w-full relative'>
                    <Input
                      disabled={loading} autoComplete='off' icon={<TbPassword size={22} />} type={showPassword ? 'text' : 'password'} textLabel='Contraseña' name='password' error={errors}
                    />

                    <EyePassword state={showPassword} setState={setShowPassword} />
                  </div>
                  <Input
                    disabled={loading} autoComplete='off' icon={<TbPassword size={22} />} type={showPassword ? 'text' : 'password'} textLabel='Repetir contraseña' name='secondPassword' error={errors}
                  />
                </div>
                <div className='flex flex-col items-start justify-between w-full'>
                  <NavLink
                    className='text-base text-primary-blue-500 hover:text-slate-700 hover:underline ease-in-out duration-200'
                    onClick={() => {
                      closeRegister()
                      openLoggin()
                    }}
                  >Ya tienes una cuenta?
                  </NavLink>
                  {emailDuplicate && <p className='text-red-500 text-base'>Este correo ya se encuentra registrado</p>}
                </div>
                <ButtonMinimalist type='submit'>{loading ? <LoadingComponents size={27} color='white' /> : 'Registrarse'}</ButtonMinimalist>
              </div>
            </form>
          </div>

        )}
      </Formik>
    </>

  )
}
