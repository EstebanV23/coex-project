import { ErrorMessage, Field } from 'formik'

export default function Input ({ children, textLabel, icon, error, name, ...props }) {
  return (
    <div className='w-full'>
      <div className='relative z-0'>
        <Field className='block rounded-t-lg pt-5 pb-2.5 px-7 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-primary-blue-400 peer' name={name} id={name} placeholder=' ' {...props}>
          {children}
        </Field>
        <label
          className='absolute text-base cursor-text text-gray-400 duration-300 transform -translate-y-4 translate-x-7 scale-75 top-3.5 z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4'
          htmlFor={name}
        >{textLabel}
        </label>
        <i className='absolute left-0 top-5 text-gray-400 peer-focus:text-primary-blue-400'>{icon}</i>
      </div>
      <ErrorMessage name={name} component={() => <p className='text-error-600 font-bold mt-1'>{error[name]}</p>} />
    </div>
  )
}

export function InputBlack ({ children, textLabel, icon, error, name, ...props }) {
  return (
    <div className='w-full'>
      <div className='relative z-0'>
        <Field className='block rounded-t-lg pt-5 pb-2.5 px-7 w-full text-base text-gray-900 bg-transparent border-b-2 border-slate-600 appearance-none focus:outline-none focus:ring-0 focus:border-primary-blue-800 peer' name={name} id={name} placeholder=' ' {...props}>
          {children}
        </Field>
        <label
          className='absolute text-base cursor-text text-slate-600 duration-300 transform -translate-y-4 translate-x-7 scale-75 top-3.5 z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4'
          htmlFor={name}
        >{textLabel}
        </label>
        <i className='absolute left-0 top-5 text-slate-600 peer-focus:text-primary-blue-800'>{icon}</i>
      </div>
      <ErrorMessage name={name} component={() => <p className='text-error-600 font-bold mt-1'>{error[name]}</p>} />
    </div>
  )
}
