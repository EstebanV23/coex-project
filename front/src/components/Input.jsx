import { ErrorMessage, Field } from 'formik'

export default function Input ({ children, icon, error, name, ...props }) {
  return (
    <div className='w-full'>
      <div className='relative'>
        <Field className='px-4 py-3.5 w-full text-base text-gray-900 border-b border-b-[#5757577e] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary-blue-700 focus:outline-none focus:ring-0 focus:border-secondary-blue-700 peer' name={name} placeholder=" " {...props}>
          {children}
        </Field>
        <label
          className='absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 peer-focus:px-2 peer-focus:text-primary-blue-600 peer-focus:dark:text-primary-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3'
          htmlFor={name}
        >{icon}
        </label>
      </div>
      <ErrorMessage name={name} component={() => <p className='text-error-600 font-bold mt-1'>{error[name]}</p>} />
    </div>
  )
}
