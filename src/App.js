import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/common/NavBar.js'
import ProjectIndex from './components/projects/ProjectIndex'
import AuthPage from './components/auth/AuthPage.js'



function App() {

  const [isLoginForm, setIsLoginForm] = React.useState(true)

  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Router>
      <Switch>
        
        <Route exact path="/" component={ProjectIndex}>
          <ProjectIndex searchTerm={searchTerm} />
        </Route>
        
        <Route path="/auth" component={AuthPage}>
          <AuthPage isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
        </Route>
        <>
          <NavBar setIsLoginForm={setIsLoginForm} setSearchTerm={setSearchTerm} />
        </>
      </Switch>
    </Router>
  )
}

export default App
