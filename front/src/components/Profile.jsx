import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useUserStore } from '../stores/useUserStore'
import { IoChevronBack } from 'react-icons/io5'
import { useProfileStore } from '../stores/useProfileStore'
import LinksProfile from './LinksProfile'
import { WaveUp } from './Icons'
import Avatar from './Avatar'

export default function Profile () {
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { hiddenModalProfile, toggleHiddenProfile } = useProfileStore(store => store, shallow)

  const { name, surname } = useUserStore(store => store, shallow)

  useEffect(() => {
    hiddenTrue()
  }, [])

  const hiddenStyles = hiddenModalProfile ? '-translate-x-[12rem]' : 'translate-x-0'
  const arrowStyle = hiddenModalProfile ? 'rotate-180' : 'rotate-0'

  return (
    <div className='flex gap-5 bg-gray-200 h-fit relative'>
      <div className={`${hiddenStyles} bg-slate-300 text-primary-blue-800 p-3 rounded-lg transition-all z-10 flex flex-col items-center fixed gap-8 h-fit top-1/2 -translate-y-1/2 left-0 w-fit justify-center sm:static sm:left-auto sm:top-auto sm:translate-x-0 sm:translate-y-0 sm:py-14 sm:pr-8 md:pl-20 sm:rounded-none sm:h-auto sm:justify-start sm:w-3/5 sm:max-w-[300px]`}>
        <h1 className='text-2xl hidden font-semibold sm:block'>Hola <span className='font-bold'>{name}</span>!</h1>
        <Avatar sizeProp={53} className='text-2xl hidden sm:block'>{`${name} ${surname}`}</Avatar>
        <ul className='flex flex-col items-center text-lg'>
          <LinksProfile />
        </ul>
        <IoChevronBack size={23} className={`${arrowStyle} absolute -right-8 cursor-pointer top-1/2 -translate-y-1/2 sm:hidden`} onClick={toggleHiddenProfile} />
      </div>
      <div className='py-14 px-2 w-full sm:max-w-4xl m-auto sm:pr-8 md:pr-20'>
        <Outlet />
      </div>
      <WaveUp fill='#9dc6ca' />
    </div>
  )
}
