import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useNavbarStore } from './stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import InfoProfile from './components/InfoProfile'
import EditProfile from './components/EditProfile'
import Footer from './components/Footer'
import { useUserStore } from './stores/useUserStore'
import Protected from './components/Protected'
import ChangePassword from './components/ChangePassword'
import { useEffect, useState } from 'react'
import EmailForgotPage from './pages/EmailForgotPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import VerifyPage from './pages/VerifyPage'
import ValoracionUnica from './components/ValoracionUnica'
import HomePage from './pages/HomePage'
import { useModalStore } from './stores/useModalStore'
import Unidades from './components/Unidades'
import useUser from './hooks/useUser'
import Login from './components/Login'
import Register from './components/Register'
import Modal from './components/Modal'
import tokenValidateService from './services/tokenValidateService'
import sweetAlert from './constants/sweetAlert'
import ProfilePage from './pages/ProfilePage'
import FileUpPage from './pages/FileUpPage'
import NotFound404 from './pages/NotFound404'
import Loading from './components/Loading'

function App () {
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { setUser, restarUser } = useUserStore(store => store, shallow)
  const { isLogged } = useUser()
  const { isOpenLoggin, closeLoggin, isOpenRegister, closeRegister, openLoggin } = useModalStore(store => store, shallow)
  const navigate = useNavigate()
  const location = useLocation()
  const [lastLocation, setLastLocation] = useState(null)
  const [loading, setLoaing] = useState(true)

  useEffect(() => {
    const newLocation = location
    setLastLocation(newLocation)
    localStorage.setItem('location', JSON.stringify(lastLocation))
  }, [location])

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'))
      setUser(user)
      tokenValidateService(user.token)
        .then(data => {
          if (data.error) {
            localStorage.removeItem('user')
            restarUser()
            openLoggin()
            if (data.error.includes('delete account')) sweetAlert('Cuenta eliminada', 'Su cuenta ha sido eliminada ya que no se ha verificado en el tiempo correspondiente', 'error')
            else sweetAlert('Sesión expirada', 'Su sesión ha expirado, por favor vuelva a iniciar sesión', 'info')
            return
          }
          if (localStorage.getItem('location')) {
            navigate(JSON.parse(localStorage.getItem('location'))?.pathname)
          }
        })
        .finally(() => {
          setLoaing(false)
        })
    } else setLoaing(false)
  }, [])

  if (loading) return <Loading />

  return (
    <>
      <Modal isOpen={isOpenLoggin && !isLogged} className='max-w-md' close={closeLoggin}><Login /></Modal>
      <Modal isOpen={isOpenRegister && !isLogged} close={closeRegister}><Register /></Modal>
      <Navbar />
      <div className='bg-primary-blue-300 flex flex-col justify-between body' onClick={hiddenTrue}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/forgot-password' element={<Protected restrictLogged><EmailForgotPage /></Protected>} />
          <Route path='/new-password/' element={<ResetPasswordPage />} />
          <Route path='/profile' element={<ProfilePage />}>
            <Route index element={<Protected><InfoProfile /></Protected>} />
            <Route path='edit' element={<Protected><EditProfile /></Protected>} />
            <Route path='change-password' element={<Protected><ChangePassword /></Protected>} />
          </Route>
          <Route path='/verify' element={<VerifyPage />} />
          <Route path='/file-up' element={<Protected verified><FileUpPage /></Protected>} />
          <Route path='/valoration' element={<Protected><ValoracionUnica /></Protected>} />
          <Route path='/unidades' element={<Protected><Unidades /></Protected>} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
        <div className='pb-1' />
        <Footer />
      </div>
    </>
  )
}

export default App
