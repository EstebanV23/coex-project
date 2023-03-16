import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import RestartPassword from './components/RestartPassword'
import EmailForgotPassword from './components/EmailForgotPassword'
import Home from './components/Home'
import Register from './components/Register'

function App () {
  return (
    <>
      <Navbar />
      <div className='bg-primary-blue-300'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/forgot-password' element={<EmailForgotPassword />} />
          <Route path='/new-password/' element={<RestartPassword />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
