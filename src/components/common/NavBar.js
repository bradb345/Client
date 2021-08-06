import React from 'react'
import SearchBar from './SearchBar.js'
import { useHistory, Link } from 'react-router-dom'
import { getCurrentUserId, isAuthenticated, removeToken } from '../lib/auth'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'



import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1, 1.5),
  },
}))

function NavBar({ setSearchTerm, setIsLoginForm }) {


  const classes = useStyles()
  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleLoginButton = () => {

    history.push('/auth')
    setIsLoginForm(true)
  }

  const handleSignInButton = () => {

    history.push('/auth')
    setIsLoginForm(false)
  }

  const handleLogout = () => {
    removeToken()
    history.push('/')
    location.reload()
  }

  const currentUserId = getCurrentUserId()
  // console.log(currentUserId)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} >
        <Toolbar  >


          <Typography variant="h6" color="primary" noWrap className={classes.title}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FontAwesomeIcon icon={faHome} /> Project Expo
            </Link>
          </Typography>


          {isLoggedIn && <Link to={`/profile/${currentUserId}`} style={{ textDecoration: 'none' }} ><Button variant="contained"
            color="primary" style={{ borderRadius: 50 }} >
            Profile
          </Button></Link>}
          {!isLoggedIn ?
            <>

              <Button type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleLoginButton}
                style={{ borderRadius: 50 }}>Login</Button>


              <Button variant="contained"
                color="primary" onClick={handleSignInButton} style={{ borderRadius: 50 }}>SignUp</Button>
              {/* <li className="toggle"><span className=""></span></li> */}
            </>
            :
            <Button variant="contained"
              color="primary" onClick={handleLogout} style={{ borderRadius: 50 }} className={classes.button}>Logout</Button>
          }
        </Toolbar>
        <SearchBar setSearchTerm={setSearchTerm} />
      </AppBar>

    </div >
  )
}

export default NavBar