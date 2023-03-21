import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'
import { useProfileStore } from '../stores/useProfileStore'
import { useUserStore } from '../stores/useUserStore'
import { BsPersonFill } from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import Input from './Input'
import Button from './Button'
import { regex } from '../constants/regex'
import { updateNutritionist } from '../services/editProfileService'
import sweetAlert from '../constants/sweetAlert'

export default function EditProfile () {
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)
  const { id, name, surname, email: emailOld, phone, token, setUser } = useUserStore(store => store)
  const [errorEdit, setErrorEdit] = useState(false)

  useEffect(() => {
    hiddenProfileTrue()
  }, [])
  return (
    <div>
      <h2 className='text-3xl font-bold text-center mb-3'>Edita tu información</h2>
      <Formik
        initialValues={{ name, surname, email: emailOld, phone }}
        validate={(values) => {
          const errors = {}
          if (!regex.name.exp.test(values.name)) errors.name = regex.name.msg
          if (!regex.name.exp.test(values.surname)) errors.surname = regex.name.msg.replace('nombres', 'apellidos')
          if (!regex.phone.exp.test(values.phone)) errors.phone = regex.phone.msg
          if (!regex.email.exp.test(values.email)) errors.email = regex.email.msg
          return errors
        }}
        onSubmit={async (values) => {
          setErrorEdit(false)
          const { name, surname, email, phone } = values
          const response = await updateNutritionist(id, { name, surname, email, phone, emailOld }, token)
          if (response === undefined) {
            setErrorEdit(true)
            return
          }
          setUser({ ...response.data, token })
          sweetAlert('Editado correctamente', 'Tus datos han sido editados correctamente')
        }}
      >
        {
          ({ errors, handleSubmit }) =>
            <form action='' className='flex flex-col gap-3' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-3 md:flex-row'>
                <Input
                  id='name'
                  icon={<BsPersonFill size={23} />}
                  error={errors}
                  name='name'
                  autoComplete='off'
                  placeholder='Nombres'
                />
                <Input
                  id='surname'
                  icon={<BsPersonFill size={23} />}
                  error={errors}
                  name='surname'
                  autoComplete='off'
                  placeholder='Apellidos'
                />
              </div>
              <div className='flex flex-col gap-3 lg:flex-row'>
                <Input
                  id='email'
                  icon={<MdOutlineAlternateEmail size={23} />}
                  error={errors}
                  name='email'
                  autoComplete='off'
                  placeholder='Email. ej: ejemplo@midominio.com'
                />
                <Input
                  id='phone'
                  icon={<AiTwotonePhone size={23} />}
                  error={errors}
                  name='phone'
                  autoComplete='off'
                  placeholder='Telefono. ej: 3156254789'
                />
              </div>
              {errorEdit && <p className='text-xl text-error'>El correo al que tratas de cambiar ya está registrado</p>}
              <Button type='submit' className='text-primary-blue border-primary-blue hover:text-white hover:bg-primary-blue py-3 text-xl'>Enviar</Button>
            </form>
        }
      </Formik>
    </div>
  )
}
