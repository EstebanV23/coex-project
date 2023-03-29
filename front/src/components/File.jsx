import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import getValorationService from '../services/getValorationService'
import deleteDocumentsService from '../services/deleteDocumentsService'
import sweetAlert from '../constants/sweetAlert'
import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { MdModeEdit } from 'react-icons/md'
import { useUserStore } from '../stores/useUserStore'
import Button from './Button'
import Loading from './Loading'
import TableExcel from './TableExcel'
import { useFileStore } from '../stores/useFileStore'
import { useModalStore } from '../stores/useModalStore'
import { useErrorHeightStore } from '../stores/useErrorHeightStore'

export default function File ({ title = 'Cargar Archivo' }) {
  const { fileData, fileName, setFileData, fileDataPython, setFileDataPython, resetValuesFile } = useFileStore(store => store, shallow)

  function Change (file) {
    setFileData(file)
  }

  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const [loading, setLoading] = useState(true)
  const { isOpenTrimesterModal, isOpenEditModal } = useModalStore(store => store, shallow)
  const { resetValuesIncorrects } = useErrorHeightStore(store => store, shallow)

  useEffect(() => {
    resetValuesFile()
    hiddenTrue()
    setLoading(false)
  }, [isOpenTrimesterModal, isOpenEditModal])

  return (
    <Formik
      initialValues={{
        file: ''
      }}
      onSubmit={() => {
        resetValuesIncorrects()
        setLoading(true)
        getValorationService(token, fileData)
          .then(response => {
            setLoading(false)
            if (response.error) {
              sweetAlert('Error de archivo', response.error, 'error')
              return
            }
            deleteDocumentsService(token)
            setFileDataPython(response)
          })
      }}
    >
      {() => (
        <div className='h-full my-4 text-black flex flex-col items-center w-full overflow-hidden'>
          <strong> <h2 className='text-center text-primary-blue-800 text-4xl mb-10'>{title}</h2></strong>
          <Form className='text-center w-full flex flex-col gap-5 max-w-[200px] mb-5'>
            <label className='flex items-center bg-white flex-col rounded-3xl gap-3 w-full p-5 shadow-lg hover:scale-105 cursor-pointer' htmlFor='file'>
              <BsFillCloudUploadFill size={70} color='#66a7ad' />
              <input type='file' name='file' id='file' className='w-full h-full' required onChange={(e) => Change(e.target.files)} accept='.xlsx' />
              {fileName ? <p className='text-sm text-gray-500'>{fileName}</p> : <p htmlFor='file' className='text-sm cursor-pointer text-gray-500'>Dale click para subir tu archivo</p>}
            </label>
            {fileData && <Button type='submit' id='btnSendFile'>Cargar archivo</Button>}

          </Form>
          {loading
            ? <Loading />
            : fileDataPython &&
              <div className='max-w-xl w-full transform overflow-hidden rounded-2xl bg-white p-5'>
                <TableExcel />
              </div>}
        </div>
      )}

    </Formik>
  )
}
