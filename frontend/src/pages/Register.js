import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiLogin } from 'react-icons/ci'

import Header from '../components/Header'


import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

// Auth
import {register, reset } from '../features/auth/authSlice'

const Register = () => {  
  // State variables 
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    password2: ''
  })
  // Destructure state
  const { fname, lname, email, password, password2 } = formData

  //
  const navigate = useNavigate()

  // const disbatch = useDispatch()
  // const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


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
      <Header icon={<CiLogin />} text={'Login'} navigate={'/'} />      
      <div className='getUserDetailsForm'>
      <h2>Register</h2>        
      <form onSubmit={onSubmit}>          
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder='Enter first name'
          required
          onChange={onChange}
          />          
        <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname" 
            id="lname"
            placeholder='Enter last name'
            required
            onChange={onChange}
          /> 
        <label htmlFor="email">Email Address</label>
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
            name='password'
            id='password'
            placeholder='Enter password'
            required
            onChange={onChange}
          />
        <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name='password2'
            id='password2'
            placeholder='Confirm password'
            required
            onChange={onChange}
          />        
        <button type='submit'>Create Account</button>
        </form>      
      </div>
    </>
  )
}

export default Register





  // // Component methods
  // const handleLogin = async(e) => { 
  //   // Prevent page refresh 
  //   e.preventDefault()
  //   // Validate the user login... 
  //   const response = await fetch('api/register_user', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         fName,
  //         lName,
  //         email,
  //         password
  //       })
  //     })
  //   // Resolve promise
  //     const data = await response.json()
  //   // Determine registration status
  //   if (data.status === 'User added successfully') {
  //     console.log(data)
  //     // Navigate back to login
  //     navigate('/')                
  //   }
  //   else if (data.status === 'User already exists.') {
  //     console.log(data)
  //     // Indicate to user that email is already in existance

  //   }
  //   else { 
  //     console.log(data)
  //     // alert user there was a server error. Advise please try again 
  //   }
  // }