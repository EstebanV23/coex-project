import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import RestartPassword from './components/RestartPassword'
import EmailForgotPassword from './components/EmailForgotPassword'
import Home from './components/Home'
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
import File from './components/File'
import ValoracionUnica from './components/ValoracionUnica'

function App () {
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { setUser } = useUserStore(store => store, shallow)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className='bg-primary-blue-300' onClick={hiddenTrue}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/forgot-password' element={<EmailForgotPassword />} />
          <Route path='/new-password/' element={<RestartPassword />} />
          <Route path='/login' element={<Protected restrictLogged><LoginPage /></Protected>} />
          <Route path='/profile' element={<Profile />}>
            <Route index element={<Protected><InfoProfile /></Protected>} />
            <Route path='edit' element={<Protected><EditProfile /></Protected>} />
            <Route path='change-password' element={<Protected><ChangePassword /></Protected>} />
          </Route>
          <Route path='/register' element={<Protected restrictLogged><RegisterPage /></Protected>} />
          <Route path='/archivo' element={<File />} />
          <Route path='/valoracion' element={<ValoracionUnica />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
