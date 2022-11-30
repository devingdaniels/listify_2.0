// Dependencies
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Components
import Header from '../components/Header'
// Icons
import { BsPersonCircle} from 'react-icons/bs'

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
        console.log(data.status)
        navigate('/listiFy', {state: {name: data.user.name, email: data.user.email}})
      }
      else if (data.status === 'Passwords do not match') {
        console.log(data)
      }
      else if (data.status === 'User not found') { 
        console.log(data)
      }
    } catch (error) {
      console.log('Something went wrong in handleLogin function')
    }
}

  return (
<>
      <Header icon={<BsPersonCircle />} text={'Register'} navigate={ '/signupPage' } />
    <div className='loginContainer'>
      <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)} />
          
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' placeholder='Enter password' required onChange={(e) => setPassword(e.target.value)} />
          
          <button type='submit'>Login</button>
          
      </form>
      </div>
      </>
  )
}

export default LoginPage
