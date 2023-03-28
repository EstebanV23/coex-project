import React from 'react'
import TableExcel from './TableExcel'
import './../assets/ViewerExcel.css'
import DownloadExcel from './DownloadExcel'
import SaveTrimester from './SaveTrimester'
export default function ViewerExcel ({ json }) {
  return (
    <>
      <TableExcel json={json} />
      <DownloadExcel json={json} />
      <SaveTrimester json={json} />
    </>
  )
}
