import { ErrorMessage, Field } from 'formik'

export default function Input ({ icon, error, name, ...props }) {
  return (
    <div className='w-full'>
      <div className='flex h-14 flex-row-reverse overflow-clip rounded-lg'>
        <Field className='peer text-lg w-full rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-primary-blue focus:outline-none' name={name} {...props} />
        <label
          className='flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-primary-blue peer-focus:bg-primary-blue peer-focus:text-white'
          htmlFor={name}
        >{icon}
        </label>
      </div>
      <ErrorMessage name={name} component={() => <p className='text-error-600 font-bold mt-1'>{error[name]}</p>} />
    </div>
  )
}
