import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import HomeCards from '../components/HomeCards'
import HomePresentation from '../components/HomePresentation'
import Modal from '../components/Modal'
import Login from '../components/Login'
import useUser from '../hooks/useUser'
import { useModalStore } from '../stores/useModalStore'
import { useNavbarStore } from '../stores/useNavbarStore'
import Register from '../components/Register'

export default function HomePage () {
  const { hiddenTrue } = useNavbarStore(reduce => reduce)
  const { isLogged } = useUser()
  const { isOpenLoggin, closeLoggin, isOpenRegister, closeRegister } = useModalStore(store => store, shallow)
  useEffect(() => {
    hiddenTrue()
  }, [])
  return (
    <div>
      {(!isLogged) && <Modal isOpen={isOpenLoggin} close={closeLoggin}><Login /></Modal>}
      {(!isLogged) && <Modal isOpen={isOpenRegister} close={closeRegister}><Register /></Modal>}
      <HomePresentation />
      <HomeCards />
    </div>
  )
}
