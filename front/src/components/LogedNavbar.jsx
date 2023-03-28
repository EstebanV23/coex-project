import { shallow } from 'zustand/shallow'
import useUser from '../hooks/useUser'
import { useModalStore } from '../stores/useModalStore'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useUserStore } from '../stores/useUserStore'
import Avatar from './Avatar'
import Button from './Button'
import LinksNavbar from './LinksNavbar'
import ModalUser from './ModalUser'

export default function LogedNavbar () {
  const { toggleHiddenModal } = useNavbarStore(store => store, shallow)
  const { name, surname } = useUserStore(store => store, shallow)
  const { openLoggin } = useModalStore(store => store, shallow)
  const { isLogged } = useUser()

  return (
    <>
      <LinksNavbar />
      {isLogged
        ? <><Avatar sizeProp={40} onClick={toggleHiddenModal} className='self-center cursor-pointer font-medium transition-all duration-300 hover:saturate-200'>{`${name} ${surname}`}</Avatar><ModalUser /></>
        : <Button className='text-white bg-primary-blue-500 px-5 w-fit self-center hover:text-primary-blue-500 hover:bg-white duration-500 ease-in hover:border-slate-300' onClick={() => openLoggin()}>Ingresar</Button>}

    </>
  )
}
