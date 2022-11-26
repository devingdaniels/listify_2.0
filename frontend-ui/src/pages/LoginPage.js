import React from 'react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function LoginPage() {
  // State variables 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Page navigator
    const navigate = useNavigate();

  // Component methods
  const handleLogin = async (e) => { 
    // Prevent page refresh 
    e.preventDefault()

    // Validate the user login
    
    console.log(password)

    




  }


  const handleSignUpNavigation = () => {
    navigate('/signupPage')
  }

  return (
    <div className='loginContainer'>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" placeholder='Enter email' onChange={(e)=> setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />      
        <button type='submit'>Login</button>        
      </form>
      <button onClick={handleSignUpNavigation}>Sign Up</button>
    </div>
  )
}

export default LoginPage
