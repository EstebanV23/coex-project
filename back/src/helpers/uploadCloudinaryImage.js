import configEnvironment from '../config/configEnvironment.js'

import { v2 } from 'cloudinary'
const cloudinary = v2
// Configuration
cloudinary.config({
  cloud_name: configEnvironment.cloudName,
  api_key: configEnvironment.cloudApiKey,
  api_secret: configEnvironment.cloudApiSecret
})

async function uploadCloudinaryImage (url, id) {
  return await cloudinary.uploader.upload(url, { public_id: id })
    .then((data) => data.url)
    .catch((err) => err)
}

export default uploadCloudinaryImage
