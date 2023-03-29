export default function Button ({ children, className, bgColor, textColor, ...props }) {
  return <button className={`${bgColor || 'bg-white hover:bg-primary-blue-700'} ${textColor || 'text-primary-blue-700 hover:text-white'} py-2 transition-all duration-300 ease-in-out border rounded-xl font-semibold border-b-4 hover:border-primary-blue ${className}`} {...props}>{children}</button>
}
