import { LogoIcon } from './Icons'

export default function HomePresentation () {
  return (
    <section className='pt-4 px-2 bg-white flex flex-col items-center gap-3 text-center'>
      <h2 className='text-primary-blue text-xl font-bold lg:text-2xl'>BIENVENIDO A</h2>
      <LogoIcon fill='black' className='w-3/4 max-w-[550px]' />
      <p className='w-[90%] font-bold text-primary-yellow-600 max-w-[330px] lg:max-w-[550px] text-base lg:text-xl'>Una aplicación hecha para ti, pensando en tus necesidades y tiempo, espero disfrutes de tu estadia aquí</p>
    </section>
  )
}
