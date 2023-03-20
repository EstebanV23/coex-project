import Swal from 'sweetalert2'
export default function sweetAlert (title, text, icon = 'success') {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'Continuar'
  })
}
