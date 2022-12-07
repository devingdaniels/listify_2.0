import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function DashBoard() {
  const navigate = useNavigate()
  
  // Save the current logged in user
  const { user } = useSelector((state)=> state.auth)
  


  useEffect(() => {
    if (!user) { 
      navigate('/')
    }
    
  },[user])

  return (
    <div>
      <p>DashBoard</p>      
    </div>
  )
}

export default DashBoard
