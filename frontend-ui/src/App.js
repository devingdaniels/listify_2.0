import React, { useState } from 'react';
import './App.css';


// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'


function App() {
  return (
    <>
      <Header />
      <Main/>
      <Footer />
    </>
  );
}

export default App;



  // const handleClick = async (e) => {
    
  //   e.preventDefault()

  //   try {
  //     const response = await fetch('/test', {
  //     method: 'POST',
  //     body: JSON.stringify({text: text}),
  //     headers: { 'Content-Type': 'application/json', }
  //     })
  //     setText('')
  //     if (response.status === 201) { 
  //       const data = await response.json()
  //       console.log(data)
  //     }            
  //   } catch (error) { 
      
  //   }
  // } 