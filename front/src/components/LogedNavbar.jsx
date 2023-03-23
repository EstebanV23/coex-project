import { shallow } from 'zustand/shallow'
import useUser from '../hooks/useUser'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useUserStore } from '../stores/useUserStore'
import Avatar from './Avatar'
import LinkButton from './LinkButton'
import LinksNavbar from './LinksNavbar'
import ModalUser from './ModalUser'

export default function LogedNavbar () {
  const { toggleHiddenModal } = useNavbarStore(store => store, shallow)
  const { name, surname } = useUserStore(store => store, shallow)
  const { isLogged, isVerified } = useUser()
  return (
    <>
      <LinksNavbar />
      {isLogged
        ? <><Avatar sizeProp={40} onClick={toggleHiddenModal} className='self-center cursor-pointer font-medium transition-all duration-300 hover:saturate-200'>{`${name} ${surname}`}</Avatar><ModalUser /></>
        : <LinkButton to='login' className='text-white self-center hover:text-primary-blue hover:bg-white duration-500'>Ingresar</LinkButton>}

    </>
  )
}
