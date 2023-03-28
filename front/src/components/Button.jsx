export default function Button ({ children, className, ...props }) {
  return <button className={`py-2 transition-all duration-300 ease-in-out border rounded-xl font-semibold border-b-4 text-primary-blue-700 bg-white hover:text-white hover:bg-primary-blue-700 hover:border-primary-blue ${className}`} {...props}>{children}</button>
}
