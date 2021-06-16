import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/common/NavBar.js'
import UserCardFeed from './components/users/Feed.js'
import AuthPage from './components/auth/AuthPage.js'

function App() {

  const [isLoginForm, setIsLoginForm] = React.useState(true)

  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthPage}>
          <AuthPage isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm}/>
        </Route> 
        <>
          <NavBar setIsLoginForm={setIsLoginForm}/>
          <Route path="/" component={UserCardFeed} >
            <UserCardFeed/>
          </Route>
        </>
      </Switch>
    </Router>
  )
}

export default App
