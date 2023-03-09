import bycrypt from 'bcrypt'

function encryptPassword (password) {
  return bycrypt.hash(password, 10)
}

export default encryptPassword
