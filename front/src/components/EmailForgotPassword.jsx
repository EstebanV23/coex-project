import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EmailForgotPassword () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const sendForm = (event, email) => {
    console.log('Entro')
    event.preventDefault()
    console.log(email)
    fetch('http://localhost:5000/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        data.error ? alert('Error') : navigate('/')
      })
  }
  console.log({ email })
  return (
    <form
      className='flex flex-col border-2 w-1/3 m-auto justify-center gap-3 items-center p-10'
      onSubmit={(e) => sendForm(e, email)}
    >
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        className='border-2 border-gray-500 rounded'
        required
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit' className='px-12 py-6 rounded-md bg-amber-300'>
        Send
      </button>
    </form>
  )
}
