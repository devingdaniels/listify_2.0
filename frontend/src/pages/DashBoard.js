import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


// Components
import ProjectForm from '../components/ProjectForm'

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
    <>
      <section>
        <h2>Welcome {user && user.name}</h2>
        <ProjectForm/>
    </section>
    
    </>
  )
}

export default DashBoard
