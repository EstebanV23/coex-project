import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import ViwerExcel from './ViwerExcel'
import LoadingComponents from './LoadingComponents'
import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'

export default function File () {
  const [fileData, setFileData] = useState(null)
  function Change (e) {
    setFileData(e)
  }
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    hiddenTrue()
  }, [])
  return (
    <Formik
      initialValues={{
        file: ''
      }}
      onSubmit={() => {
        const f = new FormData()
        setLoading(true)
        f.append('file', fileData[0])
        const options = {
          method: 'POST',
          body: f
        }
        fetch('https://mianthroapi.onrender.com/multi/mitoken', options)
          .then(response => response.json())
          .then(response => {
            setData(response)
            setLoading(false)
          })
      }}
    >
      {({ errors, values, handleSubmit, handleChange, handleBlur }) => (
        <div className='h-full mb-36'>
          <form onSubmit={handleSubmit} className='text-center '>
            <strong> <h1 className='text-center text-white text-5xl mb-10'>Subir archivo</h1></strong>
            <input type='file' name='file' id='file' required onChange={() => Change(event.target.files)} /><br />
            <button type='submit' className='w-1/3 px-6 bg-[#66a7ad] text-white h-10 rounded-md   hover:bg-[#3A676B mt-10'>cargar archivo</button>
          </form>

          {loading && <LoadingComponents size={100} />}
          {data && <ViwerExcel json={data} />}

        </div>
      )}

    </Formik>
  )
}
