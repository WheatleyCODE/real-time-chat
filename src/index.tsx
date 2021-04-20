import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import './index.scss'

firebase.initializeApp({
  apiKey: "AIzaSyCPOcHbSwAziZi7cKHkw8PljevIhKrcEfg",
  authDomain: "chat-qb.firebaseapp.com",
  projectId: "chat-qb",
  storageBucket: "chat-qb.appspot.com",
  messagingSenderId: "316693939370",
  appId: "1:316693939370:web:e02db1db377c7d9860bcd3",
  measurementId: "G-ZJMSD0XPTV"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext({
  firebase,
  auth,
  firestore,
})

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Context.Provider value={{
        firebase,
        auth,
        firestore,
      }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
