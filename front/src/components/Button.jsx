export default function Button ({ children, className, ...props }) {
  return <button className={`py-1 transition-all duration-200 w-full border self-center rounded-xl font-semibold border-b-4  text-primary-blue-600 bg-white  hover:text-white hover:bg-primary-blue hover:border-primary-blue ${className}`} {...props}>{children}</button>
}
