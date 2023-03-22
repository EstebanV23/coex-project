import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'
import { useUserStore } from '../stores/useUserStore'
import Avatar from './Avatar'
import LinksNavbar from './LinksNavbar'
import ModalUser from './ModalUser'

export default function LogedNavbar () {
  const { toggleHiddenModal } = useNavbarStore(store => store, shallow)
  const { name, surname } = useUserStore(store => store, shallow)
  return (
    <>
      <LinksNavbar />
      <Avatar sizeProp={40} onClick={toggleHiddenModal} className='self-center cursor-pointer font-medium transition-all duration-300 hover:saturate-200'>{`${name} ${surname}`}</Avatar>
      <ModalUser />
    </>
  )
}
