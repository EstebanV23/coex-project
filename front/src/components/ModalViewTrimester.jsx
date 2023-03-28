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

export default function ModalViewTrimester () {
  const { trimesterId } = useTrimesterStore(store => store, shallow)
  const { setFileDataPython, resetValuesFile } = useFileStore(store => store, shallow)
  const { unitId } = useUnitStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    resetValuesFile()
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
      <DownloadExcel />
    </>
  )
}
