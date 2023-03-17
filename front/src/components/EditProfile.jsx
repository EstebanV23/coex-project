import { Formik } from 'formik'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useProfileStore } from '../stores/useProfileStore'
import { useUserStore } from '../stores/useUserStore'
import { BsPersonFill } from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { TbPassword } from 'react-icons/tb'
import Input from './Input'
import Button from './Button'

export default function EditProfile () {
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)
  const { id, name, surname, email, phone, token } = useUserStore(store => store)
  useEffect(() => {
    hiddenProfileTrue()
  }, [])
  return (
    <div>
      <h2 className='text-3xl font-bold text-center mb-3'>Edita tu información</h2>
      <Formik
        initialValues={{ name, surname, email }}
        validate={(values) => {
          const errors = {}
          if (!/[a-zA-Z]{3}/.test(values.name)) {
            errors.name = 'El nombre es requerido'
          }

          if (!/[a-zA-Z]{3}/.test(values.surname)) {
            errors.surname = 'El nombre es requerido'
          }

          if (!/[a-zA-Z]{3}/.test(values.email)) {
            errors.email = 'El nombre es requerido'
          }
          return errors
        }}
        onSubmit={(values) => {
          console.log('hola')
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
                />
                <Input
                  id='surname'
                  icon={<BsPersonFill size={23} />}
                  error={errors}
                  name='surname'
                  autoComplete='off'
                />
              </div>
              <Input
                id='email'
                icon={<BsPersonFill size={23} />}
                error={errors}
                name='email'
                autoComplete='off'
              />
              <Button type='submit' className='text-primary-blue border-primary-blue hover:text-white hover:bg-primary-blue'>Enviar</Button>
            </form>
        }
      </Formik>
    </div>
  )
}
