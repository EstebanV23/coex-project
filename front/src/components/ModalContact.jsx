import React, { useState } from 'react'

export default function ModalContact (false) {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <>
    <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Correo Electronico</label>
        <input type='email' id='emailContact' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='example@example.com' required />
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Mensaje</label>
        <textarea name='' id='' cols='20' rows='5' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required />
        <button className='bg-blue-500 mx-[33%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => setIsOpen(false)}>Enviar</button>
      </div>
    </>
  )
}
