export default function ContentNavbar ({ children, hideShow }) {
  return (
    <div className={`flex lg:transition-none lg:translate-x-0 lg:flex-row lg:gap-1 lg:items-center lg:static lg:bg-none lg:min-w-0 lg:min-h-0 fixed min-w-full bg-primary-blue min-h-screen top-0 left-0 flex-col justify-center px-1 transition-all gap-4 ${hideShow}`}>
      {children}
    </div>
  )
}
