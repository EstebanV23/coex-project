import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import RestartPassword from './components/RestartPassword'
import EmailForgotPassword from './components/EmailForgotPassword'
import Home from './components/Home'
import { useNavbarStore } from './stores/useNavbarStore'
import { shallow } from 'zustand/shallow'
import Register from './components/Register'
import SelectUnit from './components/Select'

function App () {
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  return (
    <>
      <Navbar />
      <div className='bg-primary-blue-300' onClick={hiddenTrue}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/forgot-password' element={<EmailForgotPassword />} />
          <Route path='/new-password/' element={<RestartPassword />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/pruebas' element={<SelectUnit />} />
        </Routes>
      </div>
    </>
  )
}

export default App
