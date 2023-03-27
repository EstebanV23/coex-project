import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'nino', label: 'Niño' },
  { value: 'nina', label: 'Niña' }
]

function SelectUnit () {
  return <Select options={options} />
}

export default SelectUnit
