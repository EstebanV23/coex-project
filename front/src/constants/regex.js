export const regex = {
  name: {
    exp: /^(?!\s)+[a-zA-Z ]+[a-zA-Z]$/,
    msg: '*Los nombres solo permiten letras y no pueden empezar o terminar con espacios'
  },
  email: {
    exp: /^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}$/,
    msg: '*El email debe tener un dóminio válido Ej: ejemplo@dominio.com'
  },
  password: {
    exp: /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/,
    msg: '*La contraseña debe ser de 8 caracteres, con al menos una letra mayúscula, una letra minúscula y un número'
  },
  phone: {
    exp: /^(\+\d{12}|\d{10})$/,
    msg: '*El teléfono debe contener 10 digitos'
  },
  peso: {
    exp: /^(?=.*[0-9])$/,
    msg: 'Debe ser un dato númerico'
  }
}
