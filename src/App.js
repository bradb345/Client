import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/common/NavBar.js'
import ProjectIndex from './components/projects/ProjectIndex'
import AuthPage from './components/auth/AuthPage.js'
import UserCard from './components/users/UserCard.js'


function App() {

  const [isLoginForm, setIsLoginForm] = React.useState(true)

  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthPage}>
          <AuthPage isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
        </Route>

        <>
          <NavBar setIsLoginForm={setIsLoginForm} setSearchTerm={setSearchTerm} />
          <Route exact path="/" component={ProjectIndex}>
            <ProjectIndex searchTerm={searchTerm} />
          </Route>
          <Route path="/userprofile" component={UserCard}>
            <UserCard/>
          </Route>
        </>
      </Switch>
    </Router>
  )
}

export default App
