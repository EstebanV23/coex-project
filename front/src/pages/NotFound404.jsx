import LinkButton from '../components/LinkButton'

export default function NotFound404 () {
  return (
    <div className='bg-primary-blue-300 min-h-[55vh] max-w-3xl flex flex-col items-center m-auto mt-12 gap-8 text-primary-blue-900'>
      <h2 className='font-extrabold text-9xl text-primary-blue-800'>404</h2>
      <div className='text-center'>
        <h3 className='font-bold text-2xl'>Upss!!</h3>
        <p className='text-base sm:w-full text-center px-6'>Parece que te has perdido, dale al siguiente botón para volver a casa</p>
      </div>
      <LinkButton className='py-2 px-6' to='/'>Volver al inicio</LinkButton>
    </div>
  )
}
