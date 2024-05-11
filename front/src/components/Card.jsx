import { Link } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import useUser from '../hooks/useUser'
import { useModalStore } from '../stores/useModalStore'
import sweetAlert from './../constants/sweetAlert'

export default function Card ({ children, title, to, needVerify = true }) {
  const { isLogged, isVerified } = useUser()
  const { openLoggin } = useModalStore(store => store, shallow)
  const textButtonLog = (!isLogged && 'Inicia sesión') || (needVerify && (!isVerified && 'Verifícate')) || 'Utilizar'
  const classNotAuth = 'brightness-75'
  const stylesDefault = 'px-4 py-2 mt-auto bg-primary-yellow-400 w-fit rounded-xl font-bold text-primary-blue transition-all duration-300 ease-in-out hover:bg-primary-blue hover:text-white'

  function handleClickVerify (e) {
    e.preventDefault()
    sweetAlert('No estás verificado', 'Debes verificar tu cuenta para ingresar a este apartado', 'info')
  }

  function handleClickLogged (e) {
    e.preventDefault()
    openLoggin()
  }

  return (
    <div className='flex flex-col items-center text-center gap-3 bg-white rounded-[3rem] px-6 py-4 basis-[330px]'>
      <h2 className='text-primary-blue font-bold text-2xl'>{title}</h2>
      <p className='font-medium'>{children}</p>
      <Link className={(needVerify && !isVerified && isLogged) ? `${classNotAuth} ${stylesDefault}` : stylesDefault} onClick={(!isLogged && handleClickLogged) || ((!isVerified && needVerify) && handleClickVerify)} to={to}>{textButtonLog}</Link>
    </div>
  )
}
