import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import ViwerExcel from './ViwerExcel'
import LoadingComponents from './LoadingComponents'
import sweetAlert from '../constants/sweetAlert'
import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { useUserStore } from '../stores/useUserStore'
import sweetAlert from '../constants/sweetAlert'
import Button from './Button'
import Loading from './Loading'

export default function File () {
  const [fileData, setFileData] = useState(null)
  const [nameFile, setNameFile] = useState(null)
  function Change (file) {
    setFileData(file)
    setNameFile(file[0].name)
  }
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
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
            setLoading(false)
            if (response.error) {
              sweetAlert('Error de archivo', response.error, 'error')
              return
            }
            setData(response)
          })
      }}
    >
      {({ handleSubmit }) => (
        <div className='h-full my-10 text-black flex flex-col  items-center'>
          <strong> <h2 className='text-center text-primary-blue-800 text-4xl mb-10'>Subir Archivo</h2></strong>
          <form onSubmit={handleSubmit} className='text-center w-full flex flex-col gap-5 max-w-[200px]'>
            <div className='flex items-center bg-white flex-col rounded-3xl gap-3 w-full p-5'>
              <label className='cursor-pointer' htmlFor='file'><BsFillCloudUploadFill size={70} color='#66a7ad' /></label>
              <input type='file' name='file' id='file' className='w-full h-full' required onChange={(e) => Change(e.target.files)} accept='.xlsx' />
              {nameFile ? <p className='text-sm text-gray-500'>{nameFile}</p> : <label htmlFor='file' className='text-sm cursor-pointer text-gray-500'>Dale click para subir tu archivo</label>}
            </div>
            {fileData && <Button type='submit' id='btnSendFile'>Cargar archivo</Button>}

          </form>
          {loading && <Loading />}
          {data && <ViwerExcel json={data} />}
        </div>
      )}

    </Formik>
  )
}
