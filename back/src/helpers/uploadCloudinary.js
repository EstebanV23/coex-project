import configEnvironment from '../config/configEnvironment.js'

import { v2 } from 'cloudinary'
const cloudinary = v2
// Configuration
cloudinary.config({
  cloud_name: configEnvironment.cloudName,
  api_key: configEnvironment.cloudApiKey,
  api_secret: configEnvironment.cloudApiSecret
})

async function uploadCloudinary (url, id) {
  const response = await cloudinary.uploader.upload(url, { public_id: id })
    .then((data) => data.secure_url)
    .catch((err) => err)
  return response
}

export default uploadCloudinary
