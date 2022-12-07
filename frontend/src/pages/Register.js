import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

// Auth
import {register, reset } from '../features/auth/authSlice'

// Spinner
import Spinner from '../components/Spinner'

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

  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


  const onChange = (e) => { 
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => { 
    // Prevent page reload
    e.preventDefault()
    // Ensure passwords match
    if (password !== password2) {
      toast.error('Passwords do not match')
    }
    // Register user
    else { 
      const userData = {
        fname,
        lname,
        email,
        password
      }
      // Dispatch 
    dispatch(register(userData))
    }
  }

  useEffect(() => {
    // First check for errors
    if (isError) { 
      toast.error(message)
    }

    if (isSuccess || user) { 
      navigate('/dashboard')
    }

    // Reset the state
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])


  if (isLoading) { 
    return <Spinner/>
  }

  return (
    <>      
      <h2>Register</h2>        
      <form className='getUserDetailsForm' onSubmit={onSubmit}>          
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
    </>
  )
}

export default Register