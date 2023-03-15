import { NavLink } from 'react-router-dom'
import { IconMenu2 } from '@tabler/icons-react'

import { useState } from 'react'

export default function Navbar () {
  const [hidden, setHidden] = useState(true)
  return (
    <>
      <div className='flex items-center justify-between px-16 py-1 bg-primary-blue h-16 font-work'>
        <NavLink to='/'>
          <img src='logo.svg' className='h-10' alt='' />
        </NavLink>

        <IconMenu2
          size={30}
          color='white'
          className='block lg:hidden cursor-pointer'
          onClick={() => setHidden(false)}
        />

      </div>
    </>
  )
}
