import { Formik } from 'formik'
import { useState } from 'react'
export default function ValoracionUnica () {
  const [valoracion, setValoracion] = useState(null)
  return (
    <Formik
      initialValues={{
        peso: '',
        talla: '',
        genero: ''
      }}
      onSubmit={(data) => {
        const { peso, talla, genero } = data
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            peso,
            talla,
            genero
          })
        }
        fetch('https://mianthroapi.onrender.com/unico', options)
          .then(response => response.json())
          .then(response => {
            setValoracion(response.resultado)
          })
      }}
    >
      {({ errors, values, handleSubmit, handleChange, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='peso' name='peso' value={values.peso} onChange={handleChange} onBlur={handleBlur} />
          <input type='text' placeholder='talla' name='talla' value={values.talla} onChange={handleChange} onBlur={handleBlur} />
          <select id='' name='genero' value={values.genero} onChange={handleChange} onBlur={handleBlur}>
            <option name='nino' id='nino'>nino</option>
            <option name='nina' id='nina'>nina</option>
          </select>
          <button type='submit'>valoracion</button>
          {valoracion && <h1>{valoracion}</h1>}
        </form>

      )}

    </Formik>

  )
}
