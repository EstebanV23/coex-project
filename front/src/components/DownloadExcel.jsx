import * as XLSX from 'xlsx'
import { shallow } from 'zustand/shallow'
import { useFileStore } from '../stores/useFileStore'
import Button from './Button'

export default function DownloadExcel () {
  const { fileDataPython } = useFileStore(store => store, shallow)

  function fileExcel (data) {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    XLSX.writeFile(workbook, 'Valoracion.xlsx')
  };

  if (!fileDataPython) return null
  return (
    <Button className='w-fit' onClick={() => fileExcel(fileDataPython)}>
      Descargar Archivo
    </Button>
  )
}
