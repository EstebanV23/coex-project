import React from 'react'
import sendDataContact from './../services/modalEmailService'
import { LogoIcon, WaveUp } from './Icons'
import LinksFooter from './LinksFooter'

export default function Footer () {
  return (
    <>
      <div className='text-primary-blue-100 text-base bg-primary-blue-900'>
        <div className='-mt-[5px]'>
          <WaveUp fill='#9DC6CA' />
        </div>
        <div className='w-full max-w-[1200px] m-auto h-fit flex flex-wrap justify-around gap-10 pb-5 font-light px-2'>
          <div className='w-80'>
            <h3 className='text-xl text-center font-bold text-white mb-2.5'>Nosotros</h3>
            <p>Somos un grupo de desarrolladores que ha implementado esta herramienta para la ayuda de nutricionistas.</p>
            <div className='my-5 w-[200px] h-[20px] xs:w-[300px] sm:h-[30px] mx-auto'>
              <LogoIcon fill='#68A7AD' />
            </div>
          </div>

          <div className='text-center'>
            <h3 className='text-xl text-center font-bold text-white mb-2.5 '>Navegacion</h3>
            <div className='flex flex-col gap-1'>
              <LinksFooter />
            </div>

          </div>

          <div className='w-80 flex flex-col items-center'>
            <h3 className='text-xl text-center font-bold text-white mb-2.5'>Contacto</h3>
            <p>¿Quieres contactar con nosotros para futuros trabajos? Dejanos tu correo electronico y estaremos contactando contigo las proximas horas.</p>
            <button onClick={sendDataContact} className='bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Contactar</button>
          </div>
        </div>
      </div>
    </>

  )
}
