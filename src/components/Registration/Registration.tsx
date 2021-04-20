import React, { useContext } from 'react'
import { Context } from '../..'
import Button from '../UI/Button/Button'
import firebase from 'firebase'
import './Registration.scss'

const Registration = () => {

  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return(
    <div className="Registration">
      <div className="Registration__block">
        <h1>Авторизация</h1>
        <Button onClick={login} size="large" text="Войти с помощью Google" />
      </div>
    </div>
  )
}

export default Registration
