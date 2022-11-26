import React from 'react'
import { useState } from 'react'

const SignupPage = () => {
  // State variables 
  const [fName, setFname] = useState('')
  const [lName, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Component methods
  const handleLogin = async(e) => { 
    // Prevent page refresh 
    e.preventDefault()
    // Validate the user login... 
    const response = await fetch('/api/register_user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fName,
          lName,
          email,
          password
        })
      })
      if (response.status === 201) {
        console.log('sucessfull added user after fetch')
      }
      else { 
        console.log(response.statusText)        
      }            
  }
  

  return (
    <div className='signupContainer'>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>

        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname" placeholder='Enter first name' onChange={(e) => setFname(e.target.value)} />

        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname" placeholder='Enter last name' onChange={(e) => setLname(e.target.value)} />

        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
        
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />    
        
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default SignupPage