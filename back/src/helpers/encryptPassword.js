import bycrypt from 'bcrypt'

async function encryptPassword (password) {
  return await bycrypt.hash(password, 10)
}

export default encryptPassword
