import { NavLink } from 'react-router-dom'
import LogedNavbar from './LogedNavbar'
import ContentNavbar from './ContentNavbar'
import { useNavbarStore } from '../stores/useNavbarStore'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import useUser from '../hooks/useUser'
import LinkButton from './LinkButton'
import { AiFillWarning } from 'react-icons/ai'

export default function Navbar () {
  const { toggleHidden, hidden } = useNavbarStore(reduce => reduce)
  const { isLogged, isVerified } = useUser()
  return (
    <>
      <div className='flex items-center justify-between px-2 sm:px-8 md:px-20 py-1 bg-primary-blue h-16 font-work'>
        <NavLink to='/'>
          <img src='/logo.svg' className='h-8 md:10' alt='' />
        </NavLink>
        <ContentNavbar>
          {isLogged
            ? <LogedNavbar />
            : <LinkButton to='login' className='text-white hover:text-primary-blue hover:bg-white duration-500'>Ingresar</LinkButton>}
          <IoCloseSharp size={30} className='block md:hidden absolute right-10 top-10 cursor-pointer text-white' onClick={toggleHidden} />
        </ContentNavbar>
        <GiHamburgerMenu
          size={30}
          color='white'
          className='block md:hidden cursor-pointer'
          onClick={toggleHidden}
        />
      </div>
      {
        (!isVerified && isLogged) &&
          <div className='px-2 min-h-[1.7rem] gap-3 flex items-center bg-secondary-yellow sm:px-8 md:px-20'>
            <AiFillWarning size={20} color='rgb(234 179 8/0.7)' />
            <p className='text-yellow-500 text-xs sm:text-base'>A su correo se ha enviado un link para verificar su cuenta</p>
          </div>
      }
    </>
  )
}
