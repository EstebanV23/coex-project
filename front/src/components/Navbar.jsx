import { NavLink } from 'react-router-dom'
import LogedNavbar from './LogedNavbar'
import ContentNavbar from './ContentNavbar'
import { useNavbarStore } from '../stores/useNavbarStore'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import useUser from '../hooks/useUser'
import Button from './Button'

export default function Navbar () {
  const { toggleHidden, hidden } = useNavbarStore(reduce => reduce)
  const { isLogged } = useUser()
  return (
    <>
      <div className='flex items-center justify-between px-2 sm:px-8 md:px-20 py-1 bg-primary-blue h-16 font-work'>
        <NavLink to='/'>
          <img src='/logo.svg' className='h-8 md:10' alt='' />
        </NavLink>
        <ContentNavbar>
          {isLogged
            ? <LogedNavbar />
            : <Button>Ingresar</Button>}
          <IoCloseSharp size={30} className='block md:hidden absolute right-10 top-10 cursor-pointer text-white' onClick={toggleHidden} />
        </ContentNavbar>
        <GiHamburgerMenu
          size={30}
          color='white'
          className='block md:hidden cursor-pointer'
          onClick={toggleHidden}
        />
      </div>
    </>
  )
}
