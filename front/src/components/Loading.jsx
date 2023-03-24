import { createPortal } from 'react-dom'
import { VscLoading } from 'react-icons/vsc'

export default function Loading () {
  return createPortal(
    <div className='fixed w-full h-full grid place-items-center bg-opacity-60 backdrop-blur-[5px] z-40'>
      <VscLoading size={60} color='#68A7AD' className='font-bold animate-spin duration-75' />
    </div>,
    document.getElementById('loading-root')
  )
}
