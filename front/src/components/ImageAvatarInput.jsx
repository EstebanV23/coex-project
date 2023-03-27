import { useState } from 'react'
import Avatar from 'react-avatar-edit'
import { shallow } from 'zustand/shallow'
import { useModalStore } from '../stores/useModalStore'
import MyAvatar from './Avatar'
import Modal from './Modal'
import Button from './Button'
import updateAvatarService from '../services/updateAvatarService'
import sweetAlert from '../constants/sweetAlert'
import { useUserStore } from '../stores/useUserStore'
import Loading from './Loading'

export default function ImageAvatarInput () {
  const { openAvatarEdit, isOpenAvatarEdit, closeAvatarEdit } = useModalStore(store => store, shallow)
  const { token, updateAvatar } = useUserStore(store => store, shallow)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)

  const update = async () => {
    setLoading(true)
    const avatar = await updateAvatarService(preview, token)
    setLoading(false)
    if (avatar.error) {
      sweetAlert('Error al actualizar tu avatar', 'Ha ocurrido un error al subir tu imagen', 'error')
      return
    }
    sweetAlert('Se ha actualizado tu avatar', 'Su avatar ha sido corregido correctamente')
    updateAvatar(avatar.data)
    closeAvatarEdit()
  }

  return (
    <>
      {loading && <Loading />}
      <MyAvatar sizeProp={80} className='cursor-pointer m-auto mb-5 border-2' onClick={() => openAvatarEdit()} />

      <Modal isOpen={isOpenAvatarEdit} close={closeAvatarEdit}>
        <div className='flex flex-col gap-4'>
          <Avatar
            height={300}
            label='arrastra tu imagen o haz click aquí'
            labelStyle={{ width: '100%', textAlign: 'center', fontSize: '1.5rem', cursor: 'pointer', height: '300px', display: 'block', wordBreak: 'break-all' }}
            width='100%'
            onCrop={(preview) => setPreview(preview)}
            shadingOpacity={0.8}
          />
          <Button type='submit' onClick={() => update()}>Actualizar</Button>
        </div>
      </Modal>
    </>
  )
}
