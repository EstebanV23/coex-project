import { Formik } from 'formik'
import Input from './Input'
import { BsPersonFill } from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { TbPassword } from 'react-icons/tb'
import { regex } from '../constants/regex'
import { LogoIcon } from './Icons'
export default function Register () {
  return (
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
        if (!regex.name.test(values.name) || !values.name) {
          errorsValidate.name = '*nombre invalido'
        }
        if (!regex.name.test(values.surname) || !values.surname) {
          errorsValidate.surname = '*apellido invalido'
        }
        if (!regex.dni.test(values.dni) || !values.dni) {
          errorsValidate.dni = '*cedula invalida'
        }
        if (!regex.phone.test(values.phone) || !values.phone) {
          errorsValidate.phone = '*telefono invalido'
        }
        if (!regex.email.test(values.email) || !values.email) {
          errorsValidate.email = '*email invalido'
        }
        if (!regex.password.test(values.password) || !values.password) {
          errorsValidate.password = '*contraseña invalida'
        }
        if (values.password !== values.secondPassword || !values.secondPassword) {
          errorsValidate.secondPassword = '*la contraseñas no coinciden'
        }
        return errorsValidate
      }}
      onSubmit={(values) => {
        const { name, surname, email, dni, phone, password } = values
        const options = {
          method: 'POST',
          headers: { 'Content-type': 'application/json;charset=UTF-8' },
          body: JSON.stringify({
            name,
            surname,
            email,
            password,
            dni,
            phone
          })
        }
        fetch('http://localhost:5000/auth/signup', options)
          .then(response => response.json())
          .then(response => console.log(response))
      }}
    >
      {({ errors, values, handleSubmit, handleChange, handleBlur, touched }) => (
        <div className='flex justify-center items-center h-screen '>
          <form className='bg-white h-fit rounded-xl w-[90%] md:max-w-3xl lg:w-3xl ' onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center mt-10'>
              <LogoIcon fill='black' />
              <h1 className='text-3xl font-work mt-10 font-bold'>Registro</h1>
            </div>
            <div className=' flex flex-wrap gap-6 w-full p-10'>

              <div className='flex flex-col md:flex-row gap-6 px-6 w-full'>
                <Input
                  icon={<BsPersonFill size={22} />} type='text' placeholder='Nombres' name='name' onChange={handleChange}
                  onBlur={handleBlur} value={values.name} error={errors} touch={touched}
                />
                <Input
                  icon={<BsPersonFill size={22} />} type='text' placeholder='Apellidos' name='surname' onChange={handleChange}
                  onBlur={handleBlur} value={values.surname} error={errors} touch={touched}
                />
              </div>
              <div className='flex flex-col md:flex-row gap-6 px-6 w-full'>
                <Input
                  icon={<AiTwotonePhone size={22} />} type='text' placeholder='Telefono' name='phone' onChange={handleChange}
                  onBlur={handleBlur} value={values.phone} error={errors} touch={touched}
                />

                <Input
                  icon={<BsPersonFill size={22} />} type='text' placeholder='Cedula' name='dni' onChange={handleChange}
                  onBlur={handleBlur} value={values.dni} error={errors} touch={touched}
                />
              </div>
              <div className='w-full px-6'>
                <Input
                  icon={<BsPersonFill size={22} />} type='text' placeholder='Correo electronico' name='email' onChange={handleChange}
                  onBlur={handleBlur} value={values.email} error={errors} touch={touched}
                />
              </div>
              <div className='flex flex-col md:flex-row gap-6 px-6 w-full'>
                <Input
                  icon={<TbPassword size={22} />} type='password' placeholder='Contraseña' name='password' onChange={handleChange}
                  onBlur={handleBlur} value={values.password} error={errors} touch={touched}
                />

                <Input
                  icon={<TbPassword size={22} />} type='password' placeholder='Repetir contraseña' name='secondPassword' onChange={handleChange}
                  onBlur={handleBlur} value={values.secondPassword} error={errors} touch={touched}
                />
              </div>
              <button className='bg-primary-blue pt- text-white h-14 w-full rounded-xl text-2xl font-bold hover:bg-primary-blue-600 ease-in-out duration-200'>Registrarse</button>
            </div>
          </form>
        </div>

      )}
    </Formik>

  )
}
