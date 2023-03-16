import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'ninio', label: 'Niño' },
  { value: 'ninia', label: 'Niña' }
]

function SelectUnit () {
  return <Select options={options} />
}

export default SelectUnit
