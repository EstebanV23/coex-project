import { useState } from 'react'
import Avatar from 'react-avatar-edit'
import MyAvatar from './Avatar'

export default function ImageAvatarInput () {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <MyAvatar sizeProp={100} className='cursor-pointer m-auto mb-5' onClick={() => setShowModal(true)} />
      <dialog open={showModal}>
        <p onClick={() => setShowModal(false)}>Cerrar</p>
        <Avatar
          height={200}
          width={200}
          onCrop={(preview) => console.log({ preview })}
          onClose={() => console.log('closed')}
          onBeforeFileLoad={(elem) => console.log({ elem })}
          shadingOpacity={0.8}
        />
      </dialog>
    </>
  )
}
