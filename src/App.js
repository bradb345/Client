import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthPage from './components/auth/AuthPage.js'
import NavBar from './components/common/NavBar.js'
import UserCardFeed from './components/users/Feed.js'

function App() {
  
  return (
    <>
      <AuthPage/>
      <NavBar/>
      <UserCardFeed/>
    </>
  )
}

export default App
