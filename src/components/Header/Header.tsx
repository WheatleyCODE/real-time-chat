import React, { useContext } from 'react'
import logo from '../../img/logo.png'
import Button from '../UI/Button/Button'
import { NavLink } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../..'
import './Header.scss'

const Header = () => {
  const { auth } = useContext(Context)
  const [ user ] = useAuthState(auth)
  const button = user ? 
    (
      <NavLink to="/">
          <Button onClick={() => auth.signOut()} text="Выйти" />
      </NavLink>
    )
    :
    (
      <NavLink to="/registration">
          <Button text="Авторизация" />
      </NavLink>
    )

  return(
    <div className="Header">
      <div className="Header__container">
        <NavLink to='/chat'>
          <div className="Header__block">
            <img className="Header__logo" src={logo} alt="logo" />
            <h2>Chat</h2>
          </div>
        </NavLink>
        { button }
      </div>
    </div>
  )
}

export default Header
