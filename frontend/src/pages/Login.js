// Dependencies
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Components
import Header from '../components/Header'
// Icons
import { BsPersonCircle} from 'react-icons/bs'



const Login = () => {  
  // State variables 
  const [formData, setFormData] = useState({
    email: '',
    password: '',    
  })
  
  const navigate = useNavigate()

  const onChange = (e) => { 
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = () => { 

  }

  return (
    <>
      <Header icon={<BsPersonCircle />} text={'Register'} navigate={'/register'}/>      
      <div className='getUserDetailsForm'>
      <h2>Login</h2>        
      <form onSubmit={onSubmit}>          
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Enter email'
          required
          onChange={onChange}
          />          
        <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password" 
            id="password"
            placeholder='Enter password'
            required
            onChange={onChange}
          />              
        <button type='submit'>Login</button>
        </form>      
      </div>
    </>
  )
}

export default Login
