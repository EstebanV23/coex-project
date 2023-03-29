import { shallow } from 'zustand/shallow'
import { useTrimesterStore } from '../stores/useTrimesterStore'
import { useFileStore } from '../stores/useFileStore'
import { useEffect, useState } from 'react'
import getTrimesterService from '../services/getTrimesterService'
import { useUnitStore } from '../stores/useUnitStore'
import { useUserStore } from '../stores/useUserStore'
import TableExcel from './TableExcel'
import DownloadExcel from './DownloadExcel'
import LoadingComponents from './LoadingComponents'
import ButtonsActionsTrimester from './ButtonsActionsTrimester'
import { useErrorHeightStore } from '../stores/useErrorHeightStore'

export default function ModalViewTrimester () {
  const { trimesterId } = useTrimesterStore(store => store, shallow)
  const { setFileDataPython, resetValuesFile } = useFileStore(store => store, shallow)
  const { unitId } = useUnitStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const { resetValuesIncorrects } = useErrorHeightStore(store => store, shallow)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    resetValuesFile()
    resetValuesIncorrects()
    getTrimesterService({ trimesterId, unit: unitId }, token)
      .then(response => {
        setFileDataPython(response.data.document)
        setLoading(false)
      })
  }, [])

  if (loading) return <LoadingComponents size={30} />
  return (
    <>
      <TableExcel />
      <div className='flex items-center justify-center gap-3 w-full mt-5'>
        <DownloadExcel />
        <div className='text-3xl w-fit p-2 rounded-md'>
          <ButtonsActionsTrimester />
        </div>
      </div>
    </>
  )
}
