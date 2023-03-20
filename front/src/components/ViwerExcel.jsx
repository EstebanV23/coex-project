import React from 'react'
/// aqui importo esta libreria con sus estilos
import { HotTable, HotColumn } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.css'

// ejecutar para obtener todas las funciones de handsontable
registerAllModules()

export default function ViwerExcel () {
  /// / este es el json de prueba mientras dse traen el json de el conponente file
  const obJson = [{ nombre: 'ANTONELLA  SOFIA', peso: 5.2, talla: 57.5, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'DERWIN  DANIEL', peso: 7.2, talla: 64.7, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'IAN  SEBASTIAN', peso: 7.5, talla: 65.5, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'ANA ISABELLA', peso: 6.5, talla: 63.2, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'CHRISTOPHER  DAVID', peso: 9.3, talla: 68.0, sexo: 'M', valoracion: 'Riesgo de Sobrepeso' }, { nombre: 'MARIA  MILAGROS', peso: 5.0, talla: 61.0, sexo: 'F', valoracion: 'Riesgo de desnutrici\u00f3n' }, { nombre: 'ABBY  JULIANA', peso: 7.2, talla: 65.0, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'JENNIFER  SOFIA', peso: 8.7, talla: 69.3, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'DANNA  LUCIA', peso: 8.5, talla: 73.0, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'EMMANUEL  ', peso: 9.7, talla: 73.5, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'ALEX  MATIAS', peso: 6.6, talla: 67.0, sexo: 'M', valoracion: 'Riesgo de desnutrici\u00f3n' }, { nombre: 'MIA  DAYERLYN', peso: 8.8, talla: 68.5, sexo: 'F', valoracion: 'Riesgo de Sobrepeso' }, { nombre: 'DANNA MILAGROS', peso: 9.9, talla: 69.4, sexo: 'F', valoracion: 'Sobrepeso' }, { nombre: 'LUCIANA  VALENTINA', peso: 8.3, talla: 69.9, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'PAULETTE  ISABELLA', peso: 10.1, talla: 71.0, sexo: 'F', valoracion: 'Sobrepeso' }, { nombre: 'OLIVER ', peso: 9.9, talla: 72.0, sexo: 'M', valoracion: 'Riesgo de Sobrepeso' }, { nombre: 'LIAM  DAVID', peso: 8.0, talla: 67.0, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'DAVID', peso: 9.9, talla: 71.0, sexo: 'M', valoracion: 'Riesgo de Sobrepeso' }, { nombre: 'ADHARA SOFIA', peso: 6.3, talla: 61.3, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'EMMANUEL', peso: 9.6, talla: 71.5, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'ADRIAN  DAVID', peso: 15.6, talla: 80.0, sexo: 'M', valoracion: 'Obesidad' }, { nombre: 'JUAN DE DIOS ', peso: 7.8, talla: 69.5, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'JULIETA ALEJANDRA', peso: 8.6, talla: 70.0, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'EMMANUEL', peso: 9.3, talla: 75.5, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'EMILY SOFIA', peso: 8.9, talla: 72.0, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'MATIAS', peso: 9.8, talla: 72.0, sexo: 'F', valoracion: 'Riesgo de Sobrepeso' }, { nombre: 'LUCIANA', peso: 9.8, talla: 75.0, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: ' SAMUEL  DAVID', peso: 10.4, talla: 75.5, sexo: 'M', valoracion: 'Riesgo de Sobrepeso' }, { nombre: 'ALEXA DE LOS ANGELES', peso: 8.4, talla: 69.5, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'ANDRES JOAQUIN', peso: 11.8, talla: 78.5, sexo: 'M', valoracion: 'Riesgo de Sobrepeso' }, { nombre: 'THIAGO', peso: 11.4, talla: 81.3, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'THIAGO  ANDRES', peso: 9.9, talla: 72.0, sexo: 'M', valoracion: 'Riesgo de Sobrepeso' }, { nombre: 'ISAAC MATIAS', peso: 10.7, talla: 80.0, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'LIAM  DAVID', peso: 9.1, talla: 79.0, sexo: 'M', valoracion: 'Riesgo de desnutrici\u00f3n' }, { nombre: 'LAURENT  MARIANA', peso: 9.9, talla: 78.7, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'LIAM  DAVID', peso: 10.8, talla: 81.0, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'FATIMA ALELHI', peso: 8.7, talla: 75.8, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'SALVADOR', peso: 9.4, talla: 78.0, sexo: 'M', valoracion: 'Peso adecuado para la talla' }, { nombre: 'SALOME', peso: 10.5, talla: 78.5, sexo: 'F', valoracion: 'Peso adecuado para la talla' }, { nombre: 'ANGEL EMILIANO', peso: 11.6, talla: 84.5, sexo: 'M', valoracion: 'Peso adecuado para la talla' }]
  /// estos datos a continuacion son de ejemplo

  const [usuarios, setUsuarios] = React.useState([])

  const hotTableComponent = React.useRef(null)
  // podemos hacer un fetch y traer el json
  React.useEffect(() => {
    function getData () {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsuarios(data))
    }

    getData()
  }, [])
  // aqui se puede descargar se necesitara para la funcionalidad 3
  const descargarArchivo = () => {
    const pluginDescarga =
      hotTableComponent.current.hotInstance.getPlugin('exportFile')

    pluginDescarga.downloadFile('xlsx', {
      /// / datos sobre el excel a descargar. no sirve en ese formato creo (xlsx)..
      filename: 'dataMiAnthro',
      fileExtension: 'xlsx',
      mimeType: 'text/xlsx',
      columnHeaders: true
    })
  }
  /// aqui ya retorna la tabla
  /// /NOTA: se debe tener cuidado con los nombre de las propedades.... busca en documentacion..XD tambien mirar a ver si dejamos lo de la licencia asi.
  /// // https://handsontable.com/docs/javascript-data-grid/license-key/ esta es la documentacion para lo de la licencia
  return (
    <div className='flex flex-col items-center my-10 justify-center w-full'>

      {usuarios && (
        <HotTable
          ref={hotTableComponent}
          data={obJson}
          licenseKey='non-commercial-and-evaluation'
          colHeaders
          rowHeaders
          columnSorting
          mergeCells
          readOnly={false}
        >
          <HotColumn data='nombre' title='Nombre' readOnly />
          <HotColumn data='peso' title='Peso' readOnly />
          <HotColumn data='talla' title='Talla' readOnly />
          <HotColumn data='sexo' title='Genero' readOnly />
          <HotColumn data='valoracion' title='Valoracion' readOnly />
        </HotTable>
      )}
      <button onClick={() => descargarArchivo()}>Descargar Archivo</button>
    </div>
  )
}
