import * as XLSX from 'xlsx'
export default function DownloadExcel ({json}) {
  function fileExcel (data) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };
    return (
        <button className='w-fit px-6 bg-[#66a7ad] hover:bg-[#82B6BB] text-white h-10 rounded-md   hover:bg-[#3A676B mt-10' onClick={()=> fileExcel(json)}>        
           Descargar Archivo
         </button>
       );
}