import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useNavbarStore } from './stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import Profile from './components/Profile'
import InfoProfile from './components/InfoProfile'
import EditProfile from './components/EditProfile'
import Footer from './components/Footer'
import { useUserStore } from './stores/useUserStore'
import Protected from './components/Protected'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ChangePassword from './components/ChangePassword'
import { useEffect } from 'react'
import EmailForgotPage from './pages/EmailForgotPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import VerifyPage from './pages/VerifyPage'
import File from './components/File'
import ValoracionUnica from './components/ValoracionUnica'
import HomePage from './pages/HomePage'
import { useModalStore } from './stores/useModalStore'
import Unidades from './components/Unidades'

function App () {
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { setUser } = useUserStore(store => store, shallow)
  const { close } = useModalStore(store => store, shallow)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
      close()
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className='bg-primary-blue-300 min-h-screen flex flex-col justify-between' onClick={hiddenTrue}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/forgot-password' element={<Protected restrictLogged><EmailForgotPage /></Protected>} />
          <Route path='/new-password/' element={<ResetPasswordPage />} />
          <Route path='/profile' element={<Profile />}>
            <Route index element={<Protected><InfoProfile /></Protected>} />
            <Route path='edit' element={<Protected><EditProfile /></Protected>} />
            <Route path='change-password' element={<Protected><ChangePassword /></Protected>} />
          </Route>
          <Route path='/register' element={<Protected restrictLogged><RegisterPage /></Protected>} />
          <Route path='/verify' element={<VerifyPage />} />
          <Route path='/file-up' element={<Protected verified><File /></Protected>} />
          <Route path='/valoration' element={<Protected><ValoracionUnica /></Protected>} />
          <Route path='/unidades' element={<Protected><Unidades /></Protected>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
