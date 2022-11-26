// Styling 
import './App.css';
// App dependencies 
import React from 'react';
import { Routes, Route } from 'react-router-dom'


// Components
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signupPage' element={<SignupPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;