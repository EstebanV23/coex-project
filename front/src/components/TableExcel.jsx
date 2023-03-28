import { shallow } from 'zustand/shallow'
import { useFileStore } from '../stores/useFileStore'

export default function TableExcel () {
  const { fileDataPython } = useFileStore(store => store, shallow)
  return (
    <div className='mt-10 flex justify-center w-full h-full'>
      <div className='flex  flex-col h-fit w-fit items-center rounded-2xl bg-white sm:p-10 py-5 px-2'>
        <div className=' w-full max-h-[600px] max-w-[280px] sm:max-w-none overflow-y-auto overflow-x-auto touch-auto '>
          <table id='cellTableExcel' className=' border-spacing-5 text-xs'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Peso</th>
                <th>Talla</th>
                <th>Género</th>
                <th>Valoracion</th>
              </tr>
            </thead>
            <tbody>
              {fileDataPython.map((json, index) => (
                <tr key={index} className='text-gray-500 hover:bg-slate-300 hover:text-slate-800'>
                  <th>{index + 1}</th>
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
    </div>
  )
}
