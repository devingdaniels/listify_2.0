// React
import { useState,  useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Auth
import { login, reset } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
// Notifications
import { toast } from 'react-toastify'
// Spinner
import Spinner from '../components/Spinner'


const Login = () => {  
  // State variables 
  const [formData, setFormData] = useState({
    email: '',
    password: '',    
  })
  
  // Destructure state
  const { email, password } = formData

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

  const onSubmit = (e) => { 
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  return (
    <>
      <h2>Login</h2>        
      <form className='getUserDetailsForm'onSubmit={onSubmit}>          
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
    </>
  )
}

export default Login
