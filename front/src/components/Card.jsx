import { Link } from 'react-router-dom'
import useUser from '../hooks/useUser'

export default function Card ({ children, title, to, needVerify = true }) {
  const { isLogged, isVerified } = useUser()
  const textButtonLog = (!isLogged && 'Inicia sesión') || (needVerify && (!isVerified && 'Verifícate')) || 'Utilizar'
  const classNotAuth = 'opacity-50 cursor-not-allowed'

  return (
    <div className='flex flex-col items-center text-center gap-3 bg-white rounded-[3rem] px-6 py-4 basis-[330px]'>
      <h2 className='text-primary-blue font-bold text-2xl'>{title}</h2>
      <p className='font-medium'>{children}</p>
      <Link className='px-4 py-2 mt-auto bg-primary-yellow-400 w-fit rounded-xl font-bold text-primary-blue transition-all duration-300 ease-in-out hover:bg-primary-blue hover:text-white' to={to}>{textButtonLog}</Link>
    </div>
  )
}
