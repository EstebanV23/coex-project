const URL = 'http://localhost:5000/auth/signin'

export default async function loginService ({ email, password }) {
  console.log({ email, password })
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  console.log(res)
  if (!res.ok) throw new Error()
  const data = await res.json()
  const { data: user } = data
  return user
}
