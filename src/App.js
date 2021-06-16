import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/common/NavBar.js'
import ProjectIndex from './components/projects/ProjectIndex'
import AuthPage from './components/auth/AuthPage.js'
import Main from './Main.js'


function App() {
  
  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Router>
      <Switch>
        <Route path="/" component={ProjectIndex}>
          <ProjectIndex searchTerm={searchTerm}/>
        </Route>
        <Route path="/auth" component={AuthPage} />
        <Route path="/main" component={Main} />
        <NavBar setSearchTerm={setSearchTerm}/>
      </Switch>
    </Router>
  )
}

export default App
