import { IoHome } from 'react-icons/io5'
import { BsPersonHeart, BsFillFileEarmarkArrowUpFill, BsPeopleFill } from 'react-icons/bs'
import useUser from '../hooks/useUser'

export default function () {
  const { isVerified, isLogged } = useUser()

  return [
    {
      id: 'link1',
      name: 'Inicio',
      icon: <IoHome stroke='2' size={25} />,
      path: '/',
      verify: true,
      isLogged: true
    },
    {
      id: 'link2',
      name: 'Valoración unitaria',
      icon: <BsPersonHeart stroke='2' size={25} />,
      path: '/valoration',
      verify: true,
      isLogged
    },
    {
      id: 'link3',
      name: 'Subir archivo',
      icon: <BsFillFileEarmarkArrowUpFill stroke='2' size={25} />,
      path: '/file-up',
      verify: isVerified,
      isLogged
    },
    {
      id: 'link4',
      name: 'Unidades',
      icon: <BsPeopleFill stroke='2' size={25} />,
      path: '/unidades',
      verify: isVerified,
      isLogged
    }
  ]
}
