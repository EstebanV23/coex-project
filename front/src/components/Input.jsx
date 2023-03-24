import { ErrorMessage, Field } from 'formik'

export default function Input ({ children, textLabel, icon, error, name, ...props }) {
  return (
    <div className='w-full'>
      <div className='relative z-0'>
        <Field className='block rounded-t-lg pb-3 pt-5 px-7 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-blue-500 focus:outline-none focus:ring-0 focus:border-primary-blue-600 peer' name={name} id={name} placeholder=' ' {...props}>
          {children}
        </Field>
        <label
          className='absolute text-base cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 translate-x-7 scale-75 top-3.5 z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-blue-600 peer-focus:dark:text-primary-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4'
          htmlFor={name}
        >{textLabel}
        </label>
        <i className='absolute left-0 top-5 text-gray-400 peer-focus:text-primary-blue-600 peer-focus:dark:text-primary-blue-500'>{icon}</i>
      </div>
      <ErrorMessage name={name} component={() => <p className='text-error-600 font-bold mt-1'>{error[name]}</p>} />
    </div>
  )
}
