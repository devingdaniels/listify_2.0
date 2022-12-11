import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

// Auth
import {register, reset } from '../features/auth/authSlice'

// Spinner
import Spinner from '../components/Spinner'
import { VscAccount } from 'react-icons/vsc'

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


  const goToLogin = () => { navigate('/') }

  if (isLoading) { 
    return <Spinner/>
  }

  return (
    <>
      <section className='form-section'>
        <div>
          <VscAccount />
          <h2>Register</h2>
        </div>
        <h5>Sign Up</h5>
      <form className='getUserDetailsForm' onSubmit={onSubmit}>        
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder='First name'
          required
          onChange={onChange}
          />                  
          <input
            type="text"
            name="lname" 
            id="lname"
            placeholder='Last name'
            required
            onChange={onChange}
          />         
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Email'
            required
            onChange={onChange}
          />        
          <input
            type="password"
            name='password'
            id='password'
            placeholder='Password'
            required
            onChange={onChange}
          />        
          <input
            type="password"
            name='password2'
            id='password2'
            placeholder='Confirm'
            required
            onChange={onChange}
          />        
        <button className='loginRegister' type='submit'>Create Account</button>
        </form>
        <button className='loginRegister' onClick={ goToLogin }>Login</button>
        </section>
    </>
  )
}

export default Register