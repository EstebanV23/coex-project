import { ErrorMessage, Field } from 'formik'

export default function Input ({ children, textLabel, icon, error, name, colorBase = 'gray-400', colorFocus = 'primary-blue-400', ...props }) {
  return (
    <div className='w-full'>
      <div className='relative z-0'>
        <Field className={`block rounded-t-lg pt-5 pb-2.5 px-7 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-${colorBase} appearance-none focus:outline-none focus:ring-0 focus:border-${colorFocus} peer`} name={name} id={name} placeholder=' ' {...props}>
          {children}
        </Field>
        <label
          className={`absolute text-base cursor-text text-${colorBase} dark:text-${colorBase} duration-300 transform -translate-y-4 translate-x-7 scale-75 top-3.5 z-10 origin-[0] peer-focus:left-0 peer-focus:text-${colorFocus} peer-focus:dark:text-${colorFocus} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4`}
          htmlFor={name}
        >{textLabel}
        </label>
        <i className={`absolute left-0 top-5 text-${colorBase} peer-focus:text-${colorFocus} peer-focus:dark:text-${colorFocus}`}>{icon}</i>
      </div>
      <ErrorMessage name={name} component={() => <p className='text-error-600 font-bold mt-1'>{error[name]}</p>} />
    </div>
  )
}
