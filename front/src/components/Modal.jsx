import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'

export default function Modal ({ isOpen, close, title, className, children }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-40' onClose={close}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-50' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-75'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className={`${className ?? 'max-w-xl'} w-full transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all opasity-100 scale-100`}>
                {title && (
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 mb-4 text-gray-400'
                  >
                    {title}
                  </Dialog.Title>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
