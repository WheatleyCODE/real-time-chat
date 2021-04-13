import React from 'react'
import './Header.scss'
import logo from '../../img/logo.png'
import Button from '../UI/Button/Button'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return(
    <div className="Header">
      <div className="Header__container">
        <NavLink to='/'>
          <div className="Header__block">
            <img className="Header__logo" src={logo} alt="logo" />
            <h2>Chat</h2>
          </div>
        </NavLink>
        <NavLink to="/registration">
          <Button text="Авторизация" />
        </NavLink>
      </div>
    </div>
  )
}

export default Header
