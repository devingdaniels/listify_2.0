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
    try {
      // Try to login
    const response = await fetch('api/login_user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    })
    // Resolve promise
    const data = await response.json()
    // Check for successful verification
      if (data.status === 'User login success') {
        console.log(data)
      }
      else if (data.status === 'Passwords do not match') {
        console.log(data)
      }
      else if (data.status === 'User not found') { 
        console.log(data)
      }
    } catch (error) {
      console.log('Something went wrong in Login handle function')
    }
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
      <button onClick={()=> navigate('/signupPage')}>Sign Up</button>
    </div>
  )
}

export default LoginPage
