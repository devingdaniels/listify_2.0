import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


function DashBoard() {
  // Variable for state of route from navigate in loginPage  
  const { state } = useLocation();


  useEffect(() => { 
    
  })

  return (
    <div>
      <p>DashBoard</p>      
    </div>
  )
}

export default DashBoard
