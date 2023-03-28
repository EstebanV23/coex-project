export default function ButtonMinimalist ({ children, className, ...props }) {
  return (
    <button
      className={`bg-primary-blue text-white h-12 w-full rounded-xl text-xl font-bold hover:bg-primary-blue-600 ease-in-out duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
