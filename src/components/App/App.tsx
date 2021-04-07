import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Registration from '../Registration/Registration'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/registration" component={Registration} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
