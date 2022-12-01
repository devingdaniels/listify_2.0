import React from 'react'
import { BsCheck2Circle} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const Header = (props) => {
  const navigate = useNavigate()

  return (
    <header>
      <div>
        <BsCheck2Circle size={ 40 }/>
        <h1>ListiFy</h1>
      </div>
      <div onClick={() => navigate(props.navigate)}>{props.icon}<span>{ props.text}</span></div>
    </header>
  )
}

export default Header