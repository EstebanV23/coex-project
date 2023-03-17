const URL = 'http://localhost:5000/auth/signin'

export default function loginService (email, password) {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Error en el login')
      }
    })
    .then(data => {
      console.log(data)
    })
}
