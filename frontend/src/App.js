// Styling 
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
// App dependencies 
import React from 'react';
import { Routes, Route, Switch  } from 'react-router-dom'

// For notifications
import { ToastContainer } from 'react-toastify'

// Pages
import LoginPage from './pages/Login'
import Register from './pages/Register';
import DashBoard from './pages/DashBoard'

// Component
import Project from './components/Project'

function App() {
  return (
    <>
      <Routes>        
        <Route exact path='/' element={<LoginPage/>}/>
        <Route path='register' element={<Register/>}/>
        <Route  path='dashboard/' element={<DashBoard/>} >
          <Route path=':id'  element={<Project/>} />
        </Route> 
      </Routes>
      <ToastContainer position='top-right' autoClose={1500} closeOnClick draggable pauseOnHover />
    </>
  );
}

export default App;