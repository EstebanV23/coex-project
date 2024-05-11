import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function EyePassword ({ state, setState, ...props }) {
  return (
    <div className='text-primary-blue-300 absolute right-2 top-[1rem]' onClick={() => setState(!state)} {...props}>
      {!state ? <AiFillEye size={28} /> : <AiFillEyeInvisible size={28} />}
    </div>
  )
}
