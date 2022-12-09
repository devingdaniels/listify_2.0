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

    if (isSuccess) { 
      toast.success(message)
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
      <section className='form-section'>
        <div>
          <FiLogIn/> 
          <h2>Login</h2>          
        </div>
        <h5>Login and start ListiFy-ing</h5>
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
        <button className='loginRegister' type='submit'>Login</button>
        </form>
        </section>
    </>
  )
}

export default Login
