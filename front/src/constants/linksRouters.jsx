import { IconAccessible, IconFileInvoice, IconHome, IconUser } from '@tabler/icons-react'

export default [
  {
    id: 'link1',
    name: 'Inicio',
    icon: <IconHome stroke='2' size={25} />,
    path: '/',
    verify: true
  },
  {
    id: 'link2',
    name: 'Valoración unitaria',
    icon: <IconUser stroke='2' size={25} />,
    path: '/valoracion',
    verify: true
  },
  {
    id: 'link3',
    name: 'Subir archivo',
    icon: <IconFileInvoice stroke='2' size={25} />,
    path: '/archivo',
    verify: false
  },
  {
    id: 'link4',
    name: 'Unidades',
    icon: <IconAccessible stroke='2' size={25} />,
    path: '/unidades',
    verify: false
  }
]
