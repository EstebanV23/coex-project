export default function Input ({ icon, ...props }) {
  return (
    <div className='mx-auto w-screen-sm'>
      <div className='relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg'>
        <input className='peer w-full rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none' {...props} />
        <label className='flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-primary-blue peer-focus:text-white' htmlFor='domain'>{icon}</label>
      </div>
      <p className='text-error-600'> sdasda</p>
    </div>
  )
}
