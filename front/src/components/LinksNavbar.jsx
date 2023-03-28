import { NavLink } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import linksRouters from '../constants/linksRouters'
import { useModalStore } from '../stores/useModalStore'
import sweetAlert from './../constants/sweetAlert'

export default function LinksNavbar () {
  const { openLoggin } = useModalStore(store => store, shallow)
  const stylesDefault = 'flex flex-col items-center h-full pt-1 px-3 rounded-2xl transition-all duration-300 ease-in-out text-white text-opacity-90 hover:text-opacity-100 font-medium text-lg md:text-base hover:bg-primary-blue-700 hover:font-bolder hover:bg-opacity-30'
  const stylesActive = `${stylesDefault} bg-primary-blue-700 bg-opacity-50 font-bolder text-opacity-100`

  function handleClickVerify (e) {
    e.preventDefault()
    sweetAlert('No estás verificado', 'Debes verificar tu cuenta para ingresar a este apartado', 'info')
  }

  function handleClickLogged (e) {
    e.preventDefault()
    openLoggin()
  }

  return (
    <>
      {linksRouters().map(link => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            onClick={(!link.isLogged && handleClickLogged) || (!link.verify && handleClickVerify)}
            className={link.verify && link.isLogged ? ({ isActive }) => { return isActive ? stylesActive : stylesDefault } : `${stylesDefault} opacity-50`}
          >
            {link.icon} <p>{link.name}</p>
          </NavLink>
        )
      })}
    </>
  )
}
