// Styling 
import './App.css';
// App dependencies 
import React from 'react';
import { Routes, Route } from 'react-router-dom'

// For notifications
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


// Components
import Header from './components/Header'
import Footer from './components/Footer'


// Pages
import Landing from './pages/Landing'
import LoginPage from './pages/Login'
import Register from './pages/Register';
import DashBoard from './pages/DashBoard'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<LoginPage/>}/>
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