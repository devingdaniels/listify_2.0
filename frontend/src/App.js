// Styling 
import './App.css';
// App dependencies 
import React from 'react';
import { Routes, Route } from 'react-router-dom'

// For notifications
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Pages
import LoginPage from './pages/Login'
import Register from './pages/Register';
import DashBoard from './pages/DashBoard'

function App() {
  return (
    <>
      <Routes>        
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        closeOnClick
        draggable
        pauseOnHover
      />
      {/* <Footer /> */}
    </>
  );
}

export default App;