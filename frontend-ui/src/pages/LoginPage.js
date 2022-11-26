import React from 'react'
import { useState } from 'react'

function LoginPage() {
  // State variables 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Component methods
  const handleLogin = (e) => { 
    // Prevent page refresh 
    e.preventDefault()

    // Validate the user login
    console.log(email)
    console.log(password)

  }

  return (
    <div className='loginContainer'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} />
        <label htmlFor="password"></label>
        <input type="password" name='password' id='password' onChange={(e) => setPassword(e.target.value)} />      
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
