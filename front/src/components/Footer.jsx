import React from 'react'
import { NavLink } from 'react-router-dom'
// import Modal from './ModalContact'
export default function Footer () {
  return (
    <>
      <div className='mt-10 md:mt-0 h-full '>
        <img src='wave.svg' width='100%' height='100%' />
      </div>
      <div className='w-full h-fit flex flex-wrap 2xl:justify-around md:justify-start justify-center gap-10 p-7 font-light text-gray-500 text-base bg-black bottom-0'>

        <div className='w-80 text-left'>
          <h3 className='text-xl font-bold text-white mb-2.5'>Nosotros</h3>
          <p>Somos un grupo de desarrolladores que ha implementado esta herramienta para la ayuda de nutricionistas.</p>
          <img src='' alt='' />

          <div className='my-5 w-[200px] h-[20px] sm:w-[300px] sm:h-[30px]'>
            <img src='logoAzul.svg' />
          </div>
        </div>

        <div className='w-80 text-left '>
          <h3 className='text-xl font-bold text-white mb-2.5'>Navegacion</h3>
          <div className='flex flex-col  '>
            <NavLink to='/'>
              <p>Inicio</p>
            </NavLink>
            <NavLink to='/valoracion'>
              <p>Valoracion Unitaria</p>
            </NavLink>
            <NavLink to='/archivo'>
              <p>Subida de archivos</p>
            </NavLink>
            <NavLink to='/unidades'>
              <p>Gestion de unidades</p>
            </NavLink>
          </div>

        </div>

        <div className='w-80 text-justify'>
          <h3 className='text-xl font-bold text-white mb-2.5'>Contacto</h3>
          <p>¿Quieres contactar con nosotros para futuros trabajos? Dejanos tu correo electronico y estaremos contactando contigo las proximas horas.</p>
        </div>
      </div>
    </>

  )
}
