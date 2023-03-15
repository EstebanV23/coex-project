import { useHiddenNavbar } from '../stores/useHiddenNavbar'
import LinksNavbar from './LinksNavbar'
import ModalUser from './ModalUser'
import MyAvatar from './MyAvatar'

export default function LogedNavbar () {
  const { toggleHidden } = useHiddenNavbar(reduce => reduce)
  return (
    <>
      <LinksNavbar />
      <MyAvatar fullName='Brayan Villamizar' className='self-center cursor-pointer md:ml-2' onClick={toggleHidden} />
      <ModalUser />
    </>
  )
}
