import { useNavbarStore } from '../stores/useNavbarStore'
import LinksNavbar from './LinksNavbar'
import ModalUser from './ModalUser'
import MyAvatar from './MyAvatar'

export default function LogedNavbar () {
  const { toggleHiddenModal } = useNavbarStore(reduce => reduce)
  return (
    <>
      <LinksNavbar />
      <MyAvatar fullName='Brayan Villamizar' className='self-center text-[1.4rem] md:text-[1.2rem] cursor-pointer md:ml-2' onClick={toggleHiddenModal} />
      <ModalUser />
    </>
  )
}
