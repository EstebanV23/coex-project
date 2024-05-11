import { VscLoading } from 'react-icons/vsc'

export default function LoadingComponents ({ size, color = '#68A7AD' }) {
  return <VscLoading size={size} color={color} className='font-bold animate-spin duration-75 m-auto' />
}
