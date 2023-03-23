import { Formik } from 'formik'
import { useState } from 'react'
import ViwerExcel from './ViwerExcel'
import LoadingComponents from './LoadingComponents'
import { BsFillCloudUploadFill } from 'react-icons/bs';


export default function File () {
  const [fileData, setFileData] = useState(null)
  function Change (e) {
    setFileData(e)
    document.querySelector('#nameFile').innerHTML=document.querySelector('#file').files[0].name
  }
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
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
        <div className='h-full my-10 text-black flex flex-col  items-center'>
          <strong> <h2 className='text-center text-white text-4xl mb-10'>Subir Archivo</h2></strong>
          <form onSubmit={handleSubmit} className='mb-10 text-center w-fit md:flex md:gap-20 bg-white p-10 rounded-3xl'>
            <div  className='flex items-center flex-col m-2'> 
              <label className='cursor-pointer' for='file'><BsFillCloudUploadFill size={70} color='#66a7ad' /></label>
              <input type='file' className='mb-5' name='file' id='file' required onChange={() => Change(event.target.files) } accept='.xlsx' />
              <p className='mt-5'id='nameFile'></p>
            </div>
            <button type='submit' className='w-fit px-6 bg-[#66a7ad] hover:bg-[#82B6BB] text-white h-10 rounded-md   hover:bg-[#3A676B mt-10'>Cargar archivo</button>
          </form>

          {loading && <LoadingComponents size={100} />}
          {data && <ViwerExcel json={data} />}

        </div>
      )}

    </Formik>
  )
}
