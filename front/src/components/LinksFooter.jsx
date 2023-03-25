import { NavLink } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import linksRouters from '../constants/linksRouters'
import sweetAlert from '../constants/sweetAlert'
import { useModalStore } from '../stores/useModalStore'

export default function LinksFooter () {
  const { openLoggin } = useModalStore(store => store, shallow)
  const stylesHover = 'hover:text-white hover:bg-primary-blue-500 hover:bg-opacity-20 px-2 rounded-md transition-colors duration-200'

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
          >
            <p className={stylesHover}>{link.nameOfFooter ?? link.name}</p>
          </NavLink>
        )
      })}
    </>
  )
}
