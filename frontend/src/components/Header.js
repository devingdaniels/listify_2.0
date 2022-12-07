// React 
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
// Redux and Auth
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
// Icons
import { BsCheck2Circle } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { BiLogOutCircle  } from 'react-icons/bi'

const Header = (props) => {
// Hooks
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // Get user from the state
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    // Remove the user from local storage (JWT is key concept)
    dispatch(logout())
    // Reset the global state
    dispatch(reset())
    // Redirect to login page
    navigate('/')
  }

  const goToLogin = () => { navigate('./login') }
  const goToRegister = () => { navigate('/register') }
  

  if (user) { 
    return (
      <header>     
      <div>
        <BsCheck2Circle size={ 40 }/>
        <h1>ListiFy</h1>
      </div>
      <ul>
        <li>
            <button onClick={onLogout}>
              <div className='navTab'>
                <BiLogOutCircle /><span>Logout</span> 
              </div>
            </button>
          </li>
      </ul>      
      </header>
    )    
  }


  if (location.pathname === '/') {    
    return (
      <header>
        <div>
          <BsCheck2Circle size={40} />
          <h1>ListiFy</h1>
        </div>
        <ul>
          <li>
            <button onClick={ goToLogin }>
              <div className='navTab'>
                <VscAccount /> <span>Login</span>
              </div>
            </button>
          </li>
          <li>
        <button onClick={goToRegister}>
          <div className='navTab'>
            <VscAccount /> <span>Register</span>
          </div>
        </button>
      </li>
        </ul>
      </header>
    )
  }

  if (location.pathname === '/register') {    
    return (
      <header>
        <div>
          <BsCheck2Circle size={40} />
          <h1>ListiFy</h1>
        </div>
        <ul>
          <li>
            <button onClick={goToLogin}>
              <div className='navTab'>
                <VscAccount /> <span>Login</span>
              </div>
            </button>
          </li>
        </ul>
      </header>
    )
  } else {     
    return (      
      <header>     
      <div>
        <BsCheck2Circle size={ 40 }/>
        <h1>ListiFy</h1>
      </div>
      <ul>
        <li>
        <button onClick={goToRegister}>
          <div className='navTab'>
            <VscAccount /> <span>Register</span>
          </div>
        </button>
      </li>
      </ul>      
      </header>
    )
  }
}

export default Header
