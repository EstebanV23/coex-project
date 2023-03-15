import { IoHome } from 'react-icons/io5'
import { BsPersonHeart, BsFillFileEarmarkArrowUpFill, BsPeopleFill } from 'react-icons/bs'

export default [
  {
    id: 'link1',
    name: 'Inicio',
    icon: <IoHome stroke='2' size={25} />,
    path: '/',
    verify: true
  },
  {
    id: 'link2',
    name: 'Valoración unitaria',
    icon: <BsPersonHeart stroke='2' size={25} />,
    path: '/valoracion',
    verify: true
  },
  {
    id: 'link3',
    name: 'Subir archivo',
    icon: <BsFillFileEarmarkArrowUpFill stroke='2' size={25} />,
    path: '/archivo',
    verify: false
  },
  {
    id: 'link4',
    name: 'Unidades',
    icon: <BsPeopleFill stroke='2' size={25} />,
    path: '/unidades',
    verify: false
  }
]
