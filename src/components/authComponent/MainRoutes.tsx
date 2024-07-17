// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage'
import Login from './Login'
import Register from './Register'
import VerifyEmail from './VerifyEmail'
import ResetPassword from './ResetPassword'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>

    </div>
  )
}

export default MainRoutes
