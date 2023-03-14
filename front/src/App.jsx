import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import RestartPassword from './components/RestartPassword'
import EmailForgotPassword from './components/EmailForgotPassword'
import Home from './components/Home'
import Input from './components/Input'
import { IconEmail } from './components/Icons'
import SvgComponent from './components/Logo'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forgot-password' element={<EmailForgotPassword />} />
        <Route path='/new-password/' element={<RestartPassword />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Input icon={<IconEmail />} type='email' placeholder='Ingresa tu email' />
      <SvgComponent
        fill='red' width={900}
        height='100px'
      />
    </>
  )
}

export default App
