export default function Button ({ children, className, ...props }) {
  return <button className={`py-1 transition-all w-full border self-center rounded-xl font-semibold border-b-4 ${className}`} {...props}>{children}</button>
}
