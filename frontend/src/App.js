// Styling 
import './App.css';
// App dependencies 
import React from 'react';
import { Routes, Route } from 'react-router-dom'


// Components
import Header from './components/Header'
import Footer from './components/Footer'


// Pages
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import DashBoard from './pages/DashBoard'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signupPage' element={<SignupPage/>}/>
        <Route path='/listiFy' element={<DashBoard/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;