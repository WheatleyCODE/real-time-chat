import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
import { routes } from '../../utils/consts'
import './Landing.scss'

const Landing = () => {
  return(
    <div className="Landing">
      <div className="Landing__block">
        <div className="Landing__title">
          <NavLink to={routes.MAIN_PAGE_ROUTE}>
            <img src={logo} alt="logo" />
            <h1>Real time chat</h1>
          </NavLink>
        </div>
      </div>
      <div className="Landing__block-blue">
        <div className="Landing__circles">
          <div className="circle">
            <div className="circle__color"></div>
          </div>
          <div className="circle">
            <div className="circle__color"></div>
          </div>
          <div className="circle">
            <div className="circle__color"></div>
          </div>
        </div>
        <div className="title">
          <div className="title__container">
            <span>Авторизируйтесь</span>
            <NavLink to={routes.REGISTRATION_ROUTE}>
              <button className="google">С помощью Google</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="Landing__block-orange">
        <div className="title FB">
          <div className="title__block">
            <div>
              <span className="title__span">Общайтесь в облаке FireBase</span>
            </div>
            <NavLink to={routes.REGISTRATION_ROUTE}>
              <button className="start">НАЧАТЬ</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
