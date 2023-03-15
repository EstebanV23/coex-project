import { NavLink } from 'react-router-dom'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import LogedNavbar from './LogedNavbar'
import ContentNavbar from './ContentNavbar'
import { useHiddenNavbar } from '../stores/useHiddenNavbar'
import { LogoIcon } from './Icons'

export default function Navbar () {
  const { toggleHidden, hidden } = useHiddenNavbar(reduce => reduce)
  const [logged, setLogged] = useState(true)
  return (
    <>
      <div className='flex items-center justify-between px-2 sm:px-8 md:px-12 py-1 bg-primary-blue h-16 font-work'>
        <NavLink to='/'>
          <img src='logo.svg' className='h-10' alt='' />
          {/* <LogoIcon /> */}
        </NavLink>
        <ContentNavbar hideShow={hidden}>
          {logged
            ? <LogedNavbar />
            : <button>Ingresar</button>}
          <IconX size={30} color='white' className='block md:hidden absolute right-10 top-10 cursor-pointer text-white' onClick={toggleHidden} />
        </ContentNavbar>
        <IconMenu2
          size={30}
          color='white'
          className='block md:hidden cursor-pointer'
          onClick={toggleHidden}
        />

      </div>
    </>
  )
}
