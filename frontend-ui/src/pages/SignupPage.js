import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate()
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
    const response = await fetch('api/register_user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fName,
          lName,
          email,
          password
        })
      })
    // Resolve promise
      const data = await response.json()
    // Determine registration status
    if (data.status === 'User added successfully') {
      console.log(data)
      // Navigate back to login
      navigate('/')                
    }
    else if (data.status === 'User already exists.') {
      console.log(data)
      // Indicate to user that email is already in existance

    }
    else { 
      console.log(data)
      // alert user there was a server error. Advise please try again 
    }
  }
  
  return (
    <div className='signupContainer'>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>

        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname" placeholder='Enter first name' required onChange={(e) => setFname(e.target.value)} />

        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname" placeholder='Enter last name' required onChange={(e) => setLname(e.target.value)} />

        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)} />
        
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' placeholder='Enter password' required onChange={(e) => setPassword(e.target.value)} />    
        
        <button type='submit'>Login</button>
      </form>
      <button onClick={()=>navigate('/')}>Sign in</button>
    </div>
  )
}

export default SignupPage