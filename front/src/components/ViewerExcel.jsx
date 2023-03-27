import React from 'react'
import TableExcel from './TableExcel'
import './../assets/ViewerExcel.css'
export default function ViewerExcel ({ json }) {
  return (
    <>
      {json && (<TableExcel json={json} />)}
    </>
  )
}
