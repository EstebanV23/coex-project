import { NavLink } from 'react-router-dom'
import linksRouters from '../constants/linksRouters'
import sweetAlert from './../constants/sweetAlert'

export default function LinksNavbar () {
  const stylesDefault = 'flex flex-col items-center h-full pt-1 px-3 rounded-2xl transition-all duration-400 ease-in-out text-white font-medium text-lg md:text-base hover:text-primary-blue hover:bg-white hover:font-bolder'
  const stylesActive = `${stylesDefault.replace('text-white', 'text-primary-blue')} bg-white font-bolder`

  function handleClickVerify (e) {
    e.preventDefault()
    sweetAlert('No estás verificado', 'Debes verificar tu cuenta para ingresar a este apartado', 'info')
  }

  function handleClickLogged (e) {
    e.preventDefault()
    sweetAlert('No tienes una sesión iniciada', 'Debes iniciar sesión con tu cuenta para ingresar a este apartado', 'info')
  }

  return linksRouters().map(link => {
    return (
      <NavLink
        key={link.id}
        to={link.path}
        onClick={(!link.isLogged && handleClickLogged) || (!link.verify && handleClickVerify)}
        className={link.verify & link.isLogged ? ({ isActive }) => { return isActive ? stylesActive : stylesDefault } : `${stylesDefault} opacity-50`}
      >
        {link.icon} <p>{link.name}</p>
      </NavLink>
    )
  }
  )
}
