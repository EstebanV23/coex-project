import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function RestartPassword () {
  const [password, setPassword] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const key = searchParams.get('key')
  const navigate = useNavigate()
  function resetPassword (event, password) {
    event.preventDefault()
    fetch(`http://localhost:5000/auth/forgot-password/${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        navigate('/')
      })
  }
  return (
    <form
      className='flex flex-col border-2 w-1/3 m-auto justify-center gap-3 items-center p-10'
      onSubmit={(e) => resetPassword(e, password)}
    >
      <label htmlFor='email'>Nueva contraseña</label>
      <input
        type='text'
        autoComplete='off'
        className='border-2 border-gray-500 rounded'
        required
        id='email'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' className='px-12 py-6 rounded-md bg-amber-300'>
        Send
      </button>
    </form>
  )
}
