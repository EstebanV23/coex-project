import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import RestartPassword from './components/RestartPassword'
import EmailForgotPassword from './components/EmailForgotPassword'
import Home from './components/Home'
import Footer from './components/Footer'

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
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
