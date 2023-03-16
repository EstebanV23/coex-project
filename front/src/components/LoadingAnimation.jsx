import { VscLoading } from 'react-icons/vsc'

export default function LoadingAnimation ({ props }) {
  return (
    <div className='w-100 min-h-full grid place-items-center'>
      <VscLoading size={30} className='animate-spin duration-75' {...props} />
    </div>
  )
}
