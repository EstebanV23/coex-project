import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useUserStore } from '../stores/useUserStore'
import LoadingAnimation from './LoadingAnimation'
import MyAvatar from './MyAvatar'
import { IoChevronBack } from 'react-icons/io5'
import { useProfileStore } from '../stores/useProfileStore'
import LinksProfile from './LinksProfile'

export default function Profile () {
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { hiddenModalProfile, toggleHiddenProfile } = useProfileStore(store => store, shallow)

  const { name, surname } = useUserStore(store => store, shallow)
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

  const hiddenStyles = hiddenModalProfile ? '-translate-x-[12rem]' : 'translate-x-0'
  const arrowStyle = hiddenModalProfile ? 'rotate-180' : 'rotate-0'

  return (
    <div className='flex gap-10 bg-gray-200 h-[20rem] items-stretch sm:p-0'>
      <div className={`${hiddenStyles} bg-slate-300 text-primary-blue-800 p-3 rounded-lg transition-all z-0 flex flex-col items-center fixed gap-8 h-fit top-1/2 -translate-y-1/2 left-0 w-fit justify-center sm:static sm:left-auto sm:top-auto sm:translate-x-0 sm:translate-y-0 sm:py-8 sm:px-8 md:pl-20 sm:rounded-none sm:h-full sm:justify-start sm:w-2/5 sm:max-w-[300px]`}>
        <h1 className='text-2xl hidden font-semibold sm:block'>Hola <span className='font-bold'>{name}</span>!</h1>
        <MyAvatar fullName={`${name} ${surname}`} className='text-2xl hidden sm:block' />
        <ul className='flex flex-col items-center text-lg'>
          <LinksProfile />
        </ul>
        <IoChevronBack size={23} className={`${arrowStyle} absolute -right-8 cursor-pointer top-1/2 -translate-y-1/2 sm:hidden`} onClick={toggleHiddenProfile} />
      </div>
      <div className='py-8 px-2 w-full sm:w-3/5 justify-self-center sm:pr-8 md:pr-20'>
        <Outlet />
      </div>
    </div>
  )
}
