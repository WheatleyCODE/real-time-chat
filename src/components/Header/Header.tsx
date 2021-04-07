import React from 'react'
import './Header.scss'
import logo from '../../img/logo.png'
import Button from '../UI/Button/Button'

const Header = () => {
  return(
    <div className="Header">
      <div className="Header__container">
        <img className="Header__logo" src={logo} alt="logo" />
        <Button text="Авторизация" />
      </div>
      <div className="Header__sub-header" />
    </div>
  )
}

export default Header
