import useUser from '../hooks/useUser'

export default function Avatar ({ children, sizeProp, className, ...props }) {
  const { avatar } = useUser()
  return (
    <img src={avatar} alt='Avatar profile' width={sizeProp + 8} height={sizeProp + 8} className={`aspect-square rounded-full object-cover ${className}`} {...props} />
  )
}
