import React, { useState} from "react";
import { NavLink } from 'react-router-dom'
import Modal from './ModalContact'
import { LogoIcon } from './Icons'
export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)
  return (
  <div className="w-full h-fit flex justify-around p-7 font-light text-gray-500 text-base bg-black   bottom-0">
    <div className="w-80 text-left">
      <h3 className="text-xl font-bold text-white mb-2.5">Nosotros</h3>
      <p>Somos un grupo de desarrolladores que ha implementado esta herramienta para la ayuda de nutricionistas</p>
      <img src="" alt="" />
    
      <div className='w-[200px] h-[20px]'>
       <LogoIcon fill='cyan' className='w-[700px] h-[200px]' />
      </div>
    </div>


    <div  className="w-80  ">
      <h3 className="text-xl font-bold text-white mb-2.5">Navegacion</h3>
      <div className="flex flex-col  ">
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


    <div className="w-80 text-justify">
      <h3 className="text-xl font-bold text-white mb-2.5">Contacto</h3>
      <p>¿Quieres contactar con nosotros para futuros trabajos? Dejanos tu correo electronico y estaremos contactando contigo las proximas horas</p>
      <Modal open = {isOpen} close = { () => setIsOpen(false)} >
      <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico</label>
        <input type="email" id="emailContact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@example.com" required />
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
        <textarea name="" id="" cols="20" rows="5" class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
        <button className="bg-blue-500 mx-[33%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick = {() => setIsOpen(false) }>Enviar</button>
    </div> 
      </Modal>
       <div>
         <button className="bg-blue-500 mx-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick = {() => setIsOpen(true) }>Contactar</button>
       </div>

      </div>
  </div>
  );
 }
