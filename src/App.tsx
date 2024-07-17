import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';
import Login from './components/authComponent/Login';
import Register from './components/authComponent/Register';
import VerifyEmail from './components/authComponent/VerifyEmail';
import ResetPassword from './components/authComponent/ResetPassword';
import SchoolAdmin from './components/userComponent/SchoolAdmin';
import TeachersComponent from './components/userComponent/TeachersComponent';
import StudentsComponent from './components/userComponent/StudentsComponent';

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
        <NavigationBar title='School Admin Portal' />
        <SchoolAdmin />
        <br /><br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <hr />
        <NavigationBar title='School Teacher Portal' />
        <TeachersComponent />
        <br /><br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <hr />
        <NavigationBar title='School Students Portal' />
        <StudentsComponent />

      </Router>

    </>
  )
}

export default App
