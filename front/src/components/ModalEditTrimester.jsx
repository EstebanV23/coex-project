import UpdateTrimester from './UpdateTrimester'
import File from './File'
import { useFileStore } from '../stores/useFileStore'
import { shallow } from 'zustand/shallow'
import { useErrorHeightStore } from '../stores/useErrorHeightStore'
import { useEffect } from 'react'
import { useModalStore } from '../stores/useModalStore'

export default function ModalViewTrimester () {
  const { fileDataPython } = useFileStore(store => store, shallow)
  const { resetValuesIncorrects } = useErrorHeightStore(store => store, shallow)
  const { isOpenViewTrimesterModal, closeViewTrimesterModal } = useModalStore(store => store, shallow)

  useEffect(() => {
    resetValuesIncorrects()
    closeViewTrimesterModal()
  }, [isOpenViewTrimesterModal])

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
