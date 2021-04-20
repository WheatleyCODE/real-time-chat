import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Context } from '../..'
import { privateRoutes, publickRoutes } from '../../routes/routes'
import { routes } from '../../utils/consts'
import { useAuthState } from 'react-firebase-hooks/auth'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Loader from '../UI/Loader/Loader'
import './App.scss'

function App() {
  const { auth } = useContext(Context)
  const [ user, loading ] = useAuthState(auth)
  const route = user ?
    (
      <Switch>
        {privateRoutes.map(({path, Component}) => (
          <Route key={path} exact path={path} component={Component} />
        )) }
        <Redirect to={routes.CHAT_ROUTE} />
      </Switch>
    ) 
    :
    (
      <Switch>
        {publickRoutes.map(({path, Component}) => (
          <Route key={path} exact path={path} component={Component} />
        )) }
        <Redirect to={routes.MAIN_PAGE_ROUTE} />
      </Switch>
    )

  if (loading) return <Loader />  
  return (
    <div className="App">
      <Header />
      { route }
      { user ? null : <Footer />}
    </div>
  )
}

export default App
