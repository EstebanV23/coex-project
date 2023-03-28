import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import getValorationService from '../services/getValorationService'
import deleteDocumentsService from '../services/deleteDocumentsService'
import sweetAlert from '../constants/sweetAlert'
import ViewerExcel from './ViewerExcel'
import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { useUserStore } from '../stores/useUserStore'
import Button from './Button'
import Loading from './Loading'
import TableExcel from './TableExcel'
import { useFileStore } from '../stores/useFileStore'
import { useModalStore } from '../stores/useModalStore'

export default function File () {
  const { fileData, fileName, setFileData, fileDataPython, setFileDataPython, resetValuesFile } = useFileStore(store => store, shallow)

  function Change (file) {
    setFileData(file)
  }

  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const [loading, setLoading] = useState(false)
  const { isOpenTrimesterModal } = useModalStore(store => store, shallow)

  useEffect(() => {
    hiddenTrue()
    resetValuesFile()
  }, [isOpenTrimesterModal])

  return (
    <Formik
      initialValues={{
        file: ''
      }}
      onSubmit={() => {
        setLoading(true)
        getValorationService(token, fileData)
          .then(response => {
            setLoading(false)
            deleteDocumentsService(token)
            if (response.error) {
              sweetAlert('Error de archivo', response.error, 'error')
              return
            }
            setFileDataPython(response)
          })
      }}
    >
      {() => (
        <div className='h-full my-10 text-black flex flex-col items-center '>
          <strong> <h2 className='text-center text-primary-blue-800 text-4xl mb-10'>Subir Archivo</h2></strong>
          <Form className='text-center w-full flex flex-col gap-5 max-w-[200px] '>
            <div className='flex items-center bg-white flex-col rounded-3xl gap-3 w-full p-5 shadow-xl'>
              <label className='cursor-pointer' htmlFor='file'><BsFillCloudUploadFill size={70} color='#66a7ad' /></label>
              <input type='file' name='file' id='file' className='w-full h-full' required onChange={(e) => Change(e.target.files)} accept='.xlsx' />
              {fileName ? <p className='text-sm text-gray-500'>{fileName}</p> : <label htmlFor='file' className='text-sm cursor-pointer text-gray-500'>Dale click para subir tu archivo</label>}
            </div>
            {fileData && <Button type='submit' id='btnSendFile'>Cargar archivo</Button>}

          </Form>
          {loading && <Loading />}
          {fileDataPython && <TableExcel />}
        </div>
      )}

    </Formik>
  )
}
