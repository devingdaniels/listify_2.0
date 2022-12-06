import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


function DashBoard() {
  // Variable for state of route from navigate in loginPage  
  const { state } = useLocation();

  const handleLogout = () => { 
    console.log('logout user')
  }

  useEffect(() => { 
    console.log(state)
  })

  return (
    <div>
      <p>Hello, {state.name}. You have Successfully logged in with {state.email}</p>      
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DashBoard
