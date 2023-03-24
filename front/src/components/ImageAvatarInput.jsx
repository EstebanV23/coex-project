import { useState } from 'react'
import Avatar from 'react-avatar-edit'
import { shallow } from 'zustand/shallow'
import { useModalStore } from '../stores/useModalStore'
import MyAvatar from './Avatar'
import Modal from './Modal'
import Button from './Button'

export default function ImageAvatarInput () {
  const { openAvatarEdit, isOpenAvatarEdit, closeAvatarEdit } = useModalStore(store => store, shallow)
  const [preview, setPreview] = useState(null)
  const updateAvatar = () => {
    console.log(preview)
  }
  return (
    <>
      <MyAvatar sizeProp={100} className='cursor-pointer m-auto mb-5' onClick={() => openAvatarEdit()} />

      <Modal isOpen={isOpenAvatarEdit} close={closeAvatarEdit}>
        <Avatar
          height={300}
          label='arrastra tu imagen o haz click aquí'
          labelStyle={{ width: '100%', textAlign: 'center', fontSize: '1.5rem', cursor: 'pointer', height: '300px', display: 'block' }}
          width='100%'
          onCrop={(preview) => setPreview(preview)}
          onBeforeFileLoad={(elem) => console.log({ elem })}
          shadingOpacity={0.8}
        />
        <Button type='submit' onClick={() => updateAvatar()}>Actualizar</Button>
      </Modal>
    </>
  )
}
