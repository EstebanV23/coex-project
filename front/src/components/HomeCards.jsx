import Card from './Card'
import { WaveUp } from './Icons'
export default function HomeCards () {
  return (
    <div className='w-full'>
      <div className='-mt-[2px]'>
        <WaveUp fill='white' />
      </div>
      <div className='lg:-mt-10'>
        <h2 className='px-2 font-semibold text-white text-xl text-center mb-5 md:text-2xl'>Puedes utilizar una de nuestras opciones</h2>
        <div className='flex flex-row items-stretch justify-center gap-5 px-2 sm:px-8 max-w-[1200px] m-auto flex-wrap'>
          <Card title='Valoración Unitaria' to='/valoration' needVerify={false}>
            Esta opción te permitirá realizar la valoración nutricional de acuerdo al indicador <i>peso para la talla</i>, de manera individual, incluyendo los datos de <strong>peso</strong>, <strong>talla</strong> y <strong>género</strong> del niño/a
          </Card>
          <Card title='Subida de archivos' to='/file-up'>
            Esta opción te permitirá realizar la valoración nutricional de un determinado grupo de niños/as, de acuerdo al indicador <i>peso para la talla</i>. Para ello se tendrá un documento en excel, con extensión .xlsx, relacionando los datos de <strong>registro civíl</strong>, <strong>nombre</strong>, <strong>peso</strong>, <strong>talla</strong> y <strong>género</strong> de cada niño/a
          </Card>
          <Card title='Gestión de unidades'>
            Esta opción está diseñada para llevar un control de las valoraciones nutricionales, realizadas a un mismo usuario en diferentes meses, de acuerdo a lo relacionado en la opción de valoración grupal, te permitirá <strong>verificar</strong>verificar inconsistencias cómo talla inferior a la anterior toma nutricional.
          </Card>
        </div>
      </div>
    </div>
  )
}
