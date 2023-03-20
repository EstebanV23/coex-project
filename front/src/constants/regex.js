export const regex = {
  name: /^[a-zA-Z]+$/,
  email: /^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}$/,
  dni: /^\d{10}$/,
  password: /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/,
  phone: /^(\+\d{12}|\d{10})$/
}
