import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import LogedNavbar from './LogedNavbar'
import ContentNavbar from './ContentNavbar'
import { useNavbarStore } from '../stores/useNavbarStore'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'

export default function Navbar () {
  const { toggleHidden, hidden } = useNavbarStore(reduce => reduce)
  const [logged, setLogged] = useState(true)
  return (
    <>
      <div className='flex items-center justify-between px-2 sm:px-8 md:px-20 py-1 bg-primary-blue h-16 font-work'>
        <NavLink to='/'>
          <img src='logo.svg' className='h-8 md:10' alt='' />
        </NavLink>
        <ContentNavbar hideShow={hidden}>
          {logged
            ? <LogedNavbar />
            : <button>Ingresar</button>}
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
