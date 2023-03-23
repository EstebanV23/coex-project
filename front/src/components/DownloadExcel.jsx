import { exportToExcel } from 'react-json-to-excel';
export default function DownloadExcel ({json}) {
    return (
        <button className='w-fit px-6 bg-[#66a7ad] hover:bg-[#82B6BB] text-white h-10 rounded-md   hover:bg-[#3A676B mt-10' onClick={() => exportToExcel(json, 'downloadfilename')}>        
           Descargar Archivo
         </button>
       );
}