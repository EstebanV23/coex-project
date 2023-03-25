export default function Button ({ children, className, ...props }) {
  return <button className={`py-1 transition-all w-full border self-center rounded-xl font-semibold border-b-4  text-primary-blue-600 bg-white duration-300 hover:text-primary-blue-100 hover:bg-primary-blue hover:border-primary-blue ${className}`} {...props}>{children}</button>
}
