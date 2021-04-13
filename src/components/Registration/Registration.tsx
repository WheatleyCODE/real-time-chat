import React from 'react'
import Button from '../UI/Button/Button'
import './Registration.scss'

const Registration = () => {
  return(
    <div className="Registration">
      <div className="Registration__block">
        <h1>Авторизация</h1>
        <Button size="large" text="Войти с помощью Google" />
      </div>
    </div>
  )
}

export default Registration
