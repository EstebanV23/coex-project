import { useState } from 'react'
import Avatar from 'react-avatar-edit'
import { shallow } from 'zustand/shallow'
import { useModalStore } from '../stores/useModalStore'
import MyAvatar from './Avatar'
import Modal from './Modal'

export default function ImageAvatarInput () {
  const [showModal, setShowModal] = useState(false)
  const { open, isOpen } = useModalStore(store => store, shallow)
  return (
    <>
      <MyAvatar sizeProp={100} className='cursor-pointer m-auto mb-5' onClick={() => open()} />
      {isOpen &&
        <Modal>
          <Avatar
            height={200}
            width={200}
            onCrop={(preview) => console.log({ preview })}
            onClose={() => console.log('closed')}
            onBeforeFileLoad={(elem) => console.log({ elem })}
            shadingOpacity={0.8}
          />
        </Modal>}
    </>
  )
}