import { NavLink } from 'react-router-dom'
import LogedNavbar from './LogedNavbar'
import ContentNavbar from './ContentNavbar'
import { useNavbarStore } from '../stores/useNavbarStore'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import useUser from '../hooks/useUser'
import { AiFillWarning } from 'react-icons/ai'

export default function Navbar () {
  const { toggleHidden } = useNavbarStore(reduce => reduce)
  const { isLogged, isVerified } = useUser()
  return (
    <div className='bg-primary-blue'>
      <div className='flex items-center justify-between px-2 sm:px-8 py-1 bg-primary-blue h-16 font-work max-w-[1200px] m-auto'>
        <NavLink to='/'>
          <img src='/logo.svg' className='h-8 md:h-10' alt='logo_empresa' />
        </NavLink>
        <ContentNavbar>
          <LogedNavbar />
          <IoCloseSharp size={30} className='block lg:hidden absolute right-10 top-10 cursor-pointer text-white' onClick={toggleHidden} />
        </ContentNavbar>
        <GiHamburgerMenu
          size={30}
          color='white'
          className='block lg:hidden cursor-pointer'
          onClick={toggleHidden}
        />
      </div>
      {
        (!isVerified && isLogged) &&
          <div className='px-2 min-h-[1.7rem] gap-3 flex items-center bg-secondary-yellow sm:px-8 md:px-20'>
            <div className='max-w-[1200px] m-auto px-2 gap-3 flex items-center bg-secondary-yellow'>
              <AiFillWarning size={20} color='rgb(234 179 8/1)' />
              <p className='text-primary-blue-700 text-xs sm:text-base'>A su correo se ha enviado un link para verificar su cuenta</p>

            </div>
          </div>
      }
    </div>
  )
}
