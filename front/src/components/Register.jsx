import { Formik } from 'formik'
import Input from './Input'
import { BsPersonFill } from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { TbPassword } from 'react-icons/tb'
import { regex } from '../constants/regex'
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
            <div className='container_title flex justify-center items-center mt-10'>
              <img src='logoFlor.svg' className='h-10' />
              <strong>
                <h1 className='text-center text-6xl font-work mt-2'>mianthro</h1>
              </strong>
            </div>
            <strong><h1 className='text-center text-3xl font-work mt-10 '>Registro</h1></strong>
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
              <div className='w-full px-6 mt-6'>
                <button className=' w-full px-6 bg-[#66a7ad] text-white h-10 rounded-md   hover:bg-[#3A676B]'>Registrarse</button>
              </div>

            </div>
          </form>
        </div>

      )}
    </Formik>

  )
}
