export const regex = {
  name: {
    exp: /^(?!\s)+[a-zA-Z ]+[a-zA-Z]$/,
    msg: '*Los nombres solo permiten letras'
  },
  email: {
    exp: /^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}$/,
    msg: '*El email debe tener un dóminio válido Ej: ejemplo@dominio.com'
  },
  password: {
    exp: /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/,
    msg: '*La contraseña debe ser de 8 caracteres, con mayúsculas, minúsculas y números'
  },
  phone: {
    exp: /^(\+\d{12}|\d{10})$/,
    msg: '*El teléfono debe contener 10 digitos'
  },
  peso: {
    exp: /^[0-9]+([.])?([0-9]+)?$/,
    msg: 'El peso debe ser un dato númerico'
  },
  talla: {
    exp: /^[0-9]+([.])?([0-9]+)?$/,
    msg: 'La talla debe ser un dato númerico'
  }
}
