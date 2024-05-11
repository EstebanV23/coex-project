import { shallow } from 'zustand/shallow'
import { useErrorHeightStore } from '../stores/useErrorHeightStore'
import { useFileStore } from '../stores/useFileStore'

export default function TableExcel () {
  const { fileDataPython } = useFileStore(store => store, shallow)
  const { valuesIncorrects } = useErrorHeightStore(store => store, shallow)

  if (!fileDataPython) return null

  return (
    <div className='w-full'>
      <div className='max-h-[600px] max-w-[800px] w-full overflow-y-auto overflow-x-auto touch-auto'>
        <table id='cellTableExcel' className='w-full border-spacing-5 text-xs'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Registro C</th>
              <th>Nombre</th>
              <th>Peso</th>
              <th>Talla</th>
              <th>Género</th>
              <th>Valoracion</th>
            </tr>
          </thead>
          <tbody>
            {fileDataPython.map((json, index) => (
              <tr key={index} className={valuesIncorrects && valuesIncorrects.includes(json.registro) ? 'bg-error-400' : 'text-gray-500 hover:bg-slate-300 hover:text-slate-800'}>
                <th>{index + 1}</th>
                <th>{json.registro}</th>
                <th>{json.nombre}</th>
                <th>{json.peso}</th>
                <th>{json.talla}</th>
                <th>{json.genero}</th>
                <th>{json.valoracion}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
