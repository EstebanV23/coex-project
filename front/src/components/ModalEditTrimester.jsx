import UpdateTrimester from './UpdateTrimester'
import File from './File'
import { useFileStore } from '../stores/useFileStore'
import { shallow } from 'zustand/shallow'

export default function ModalViewTrimester () {
  const { fileDataPython } = useFileStore(store => store, shallow)
  return (
    <>
      <File title='Cambiar archivo' />
      {fileDataPython &&
        <div className='flex items-center justify-center gap-3 w-full mt-5'>
          <UpdateTrimester>Actualizar</UpdateTrimester>
        </div>}
    </>
  )
}
