import { Formik } from 'formik'
import { useState } from 'react'
export default function File () {
  const [fileData, setFileData] = useState(null)
  function Change (e) {
    setFileData(e)
  }
  return (
    <Formik
      initialValues={{
        file: ''
      }}
      onSubmit={() => {
        const f = new FormData()
        f.append('file', fileData[0])
        console.log(f)
        const options = {
          method: 'POST',
          body: f
        }

        fetch('https://mianthroapi.onrender.com/multi/mitoken', options)
          .then(response => response.json())
          .then(response => console.log(response))
      }}
    >
      {({ errors, values, handleSubmit, handleChange, handleBlur }) => (
        <div className='h-fit'>
          <form onSubmit={handleSubmit}>
            <strong> <h1 className='text-center text-white text-5xl'>Subir archivo</h1></strong>
            <input type='file' name='file' id='file' required onChange={() => Change(event.target.files)} />
            <button type='submit' className='w-1/3 px-6 bg-[#66a7ad] text-white h-10 rounded-md   hover:bg-[#3A676B'>cargar archivo</button>
          </form>

        </div>
      )}

    </Formik>
  )
}