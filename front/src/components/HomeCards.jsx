import Card from './Card'
import { WaveUp } from './Icons'
export default function HomeCards () {
  return (
    <div className='w-full'>
      <WaveUp fill='white' />
      <div className='lg:-mt-10'>
        <h2 className='px-2 font-semibold text-white text-xl text-center mb-5 md:text-2xl'>Puedes utilizar una de nuestras opciones</h2>
        <div className='flex flex-row items-stretch justify-center gap-5 px-2 sm:px-8 max-w-[1200px] m-auto flex-wrap'>
          <Card title='Valoración Unitaria' to='/valoration' needVerify={false}>
            Esta opción te permitirá valorar el indice de masa corporal, simplemente introduciendo los datos de <strong>peso</strong>, <strong>altura</strong> y <strong>género</strong> del niño/a
          </Card>
          <Card title='Subida de archivos' to='/file-up'>
            Subiendo un documento excel, con extensión .xlsx, el programa te hará una valoración nutricional de todos los niños que estén en el documento
          </Card>
          <Card title='Gestión de unidades'>
            Aquí podras gestionar tus unidades, manteniendo así un control de subida de archivos con relación a cada unidad, también el control extendido por cada niño
          </Card>
        </div>
      </div>
    </div>
  )
}
