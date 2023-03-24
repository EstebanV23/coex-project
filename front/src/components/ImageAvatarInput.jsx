import Avatar from 'react-avatar-edit'
import { shallow } from 'zustand/shallow'
import { useModalStore } from '../stores/useModalStore'
import MyAvatar from './Avatar'
import Modal from './Modal'

export default function ImageAvatarInput () {
  const { openAvatarEdit, isOpenAvatarEdit, closeAvatarEdit } = useModalStore(store => store, shallow)
  return (
    <>
      <MyAvatar sizeProp={100} className='cursor-pointer m-auto mb-5' onClick={() => openAvatarEdit()} />

      <Modal isOpen={isOpenAvatarEdit} close={closeAvatarEdit}>
        <Avatar
          height={200}
          width={200}
          onCrop={(preview) => console.log({ preview })}
          onClose={() => console.log('closed')}
          onBeforeFileLoad={(elem) => console.log({ elem })}
          shadingOpacity={0.8}
        />
      </Modal>
    </>
  )
}
