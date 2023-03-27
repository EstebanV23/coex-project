import React from "react";
import TableExcel from './TableExcel'
import "./../assets/ViwerExcel.css";
export default function ViwerExcel({ json }) {
  return (
    <>
    { json && (<TableExcel json={json}/>) }
    </>
  );
}
