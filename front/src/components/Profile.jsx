import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useUserStore } from '../stores/useUserStore'
import LoadingAnimation from './LoadingAnimation'
import MyAvatar from './MyAvatar'
import { IoChevronBack } from 'react-icons/io5'
import { useProfileStore } from '../stores/useProfileStore'

const linksProfile = [
  {
    id: 'linkProfile1',
    path: '/profile/',
    name: 'Perfil'
  },
  {
    id: 'linkProfile2',
    path: '/profile/edit',
    name: 'Editar información'
  }
]

function LinksProfile () {
  const activeStyles = ''
  const defaultStyles = ''
  return (
    linksProfile.map(({ path, name, id }) => (
      <NavLink to={path} key={id} className={({ isActive }) => { return isActive ? activeStyles : defaultStyles }}>
        {name}
      </NavLink>
    ))
  )
}

export default function Profile () {
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { hiddenModalProfile, toggleHiddenProfile } = useProfileStore(store => store, shallow)

  const { name, surname, email, token, id } = useUserStore(store => store, shallow)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    hiddenTrue()
  }, [])

  if (loading) {
    return (
      <div className='h-screen'>
        <LoadingAnimation />
      </div>
    )
  }

  const hiddenStyles = hiddenModalProfile ? '-translate-x-[10.3rem]' : 'translate-x-0'
  const arrowStyle = hiddenModalProfile ? 'rotate-180' : 'rotate-0'

  return (
    <div className='flex gap-10 items-center py-8 px-2 sm:px-8 md:px-20'>
      <div className={`${hiddenStyles} transition-all z-0 flex flex-col items-center fixed gap-3 h-fit top-1/2 -translate-y-1/2 left-5 w-fit justify-center sm:static sm:left-auto sm:top-auto sm:translate-x-0 sm:translate-y-0`}>
        <h1 className='text-2xl hidden font-semibold sm:block'>Hola <span className='font-bold'>{name}</span>!</h1>
        <MyAvatar fullName={`${name} ${surname}`} className='text-2xl hidden sm:block' />
        <ul className='flex flex-col items-center'>
          <LinksProfile />
        </ul>
        <IoChevronBack className={`${arrowStyle} absolute -right-6 cursor-pointer top-1/2 -translate-y-1/2 sm:hidden`} onClick={toggleHiddenProfile} />
      </div>
      <Outlet />
    </div>
  )
}
