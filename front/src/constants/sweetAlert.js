import Swal from 'sweetalert2'
export default async function sweetAlert (title, text, icon = 'success', confirmButtonText = 'Continuar', showCancelButton = false, confirmButtonColor, cancelButtonColor) {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    showCancelButton,
    confirmButtonColor,
    cancelButtonColor
  })
}
