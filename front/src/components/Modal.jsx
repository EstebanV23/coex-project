import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { useModalStore } from '../stores/useModalStore'

export default function Modal ({ children, title }) {
  const { close } = useModalStore()

  return createPortal(
    <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
      <div className='relative w-[500px] bg-white min-h-[100px] rounded-3xl shadow-xl p-5'>
        {title && <div className='flex justify-between mb-5 pb-5 border-b-2 border-primary-blue-200 pr-10 text-primary-blue-800'>{title}</div>}
        {children}
        <button onClick={() => close()} className='absolute right-5 top-5 hover:bg-gray-200 rounded-full px-2 py-1 ease-in-out duration-300'><AiOutlineClose size={20} fill='#264446' /></button>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}
