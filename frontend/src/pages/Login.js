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
import { FiLogIn } from 'react-icons/fi'

const Login = () => {  
  // State 
  const [formData, setFormData] = useState({
    email: '',
    password: '',    
  })
  
  // Destructured state
  const { email, password } = formData

  // Constants
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  // Methods
  const onChange = (e) => { 
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => { 
    // Prevent page reload
    e.preventDefault()
    // Save data
    const userData = {
      email,
      password
    }
    // Invoke redux and backend methods
    dispatch(login(userData))
  }

  useEffect(() => {
    // Display errors
    if (isError) { 
      toast.error(message)
    }
    // Navigate to dashboard and notify user for successful login
    if ( isSuccess && user) {
      toast.success(message)
      navigate('/dashboard')
    }
    // Reset the redux state on component unmount
    return () => {
      dispatch(reset())
    }

  }, [user, isError, isSuccess, message, navigate, dispatch])

  // Show spinner anytime network actions are happening
  if (isLoading) { 
    return <Spinner/>
  }

  return (
    <>
      <section className='login-form-section'>
        <div className='login-form-heading-container'>
          <FiLogIn/> 
          <h2>Login</h2>
        </div>
        <h5>Welcome Back</h5>
        <form onSubmit={onSubmit}>  
          <input
            type="email"
            name="email"
            value={ email }
            id="email"
            placeholder='Email'
            required
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            required
            onChange={onChange}
          />
          <div className='login-form-button-container'>
            <button className='login-and-register-button' type='button' onClick={() => navigate('/register')}>Register</button>
            <button className='login-and-register-button' type='submit'>Login</button>            
          </div>
          </form>        
        </section>
    </>
  )
}

export default Login
