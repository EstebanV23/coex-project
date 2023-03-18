import { createPortal } from 'react-dom'
import { VscLoading } from 'react-icons/vsc'

export default function Loading () {
  return createPortal(
    <div className='fixed w-full h-full grid place-content-center bg-opacity-60 backdrop-blur-[4px] z-20'>
      <VscLoading size={30} className='-mt-40 animate-spin duration-75' />
    </div>,
    document.getElementById('loading-root')
  )
}
