import Swal from 'sweetalert2'

export default async function sendDataContact () {
  const { value: email } = await Swal.fire({
    title: 'Contacto',
    input: 'email',
    inputLabel: 'Escribe tu Email',
    inputPlaceholder: 'myemail@example.com'
  })

  if (email) {
    Swal.fire(`Tú email ha sido enviado ${email}`)
    // aqui va el fetch
  }
}
