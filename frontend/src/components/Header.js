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
  const { user } = useSelector((state) => state.auth)
  // Methods
  const onLogout = () => {
    // Remove the user from local storage (JWT is key concept)
     dispatch(logout())    
    // Notify user of successful logout
    if (!localStorage.getItem('user')) { 
      toast.success('Logout successful')
    }    
    // Reset Redux state
    dispatch(reset())
    // Redirect to login page
    navigate('/')
  }

  return (    
      <header className='header'>
        <div>
         <BsCheck2Circle size={33}/>
         <h1>ListiFy</h1>
        </div>
        <div className='header-logout-container'>
          <h3>Hey, {user && user.name.split(' ')[0]}!</h3>
          <button onClick={onLogout} className='header-logout-button'><p>Logout</p><BiLogOutCircle/></button>          
        </div>
      </header>    
  )
}

export default Header