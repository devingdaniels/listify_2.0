import { useNavigate } from 'react-router-dom'
// Redux and Auth
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
// Icons
import { BiLogOutCircle  } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'

// Notifications
import { toast } from 'react-toastify'

const Header = () => {
  // Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // Get user from the state
  const { user, isSuccess, message } = useSelector((state) => state.auth)

  const onLogout = () => {
    // Remove the user from local storage (JWT is key concept)
     dispatch(logout())
    // Reset the global state
    // Redirect to login page
    
    if (!localStorage.getItem('user')) { 
      toast.success('Logout successful')
    }    
    
    dispatch(reset())

    navigate('/')
  }

  return (
    <>
      <header>
        <div>
         <BsCheck2Circle className='react-icon'/>
         <h1>ListiFy</h1>
        </div>
        <div className='login-button-container'>
          <p>Hey, {user && user.name.split(' ')[0]}!</p>
          <div onClick={onLogout} className='navTab'><p>Logout</p><BiLogOutCircle/></div>          
        </div>
      </header>
    </>
  )
}

export default Header