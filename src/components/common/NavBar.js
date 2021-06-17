import React from 'react'
import SearchBar from './SearchBar.js'
import { Link, useHistory } from 'react-router-dom'
import { getCurrentUserId, isAuthenticated, removeToken } from '../lib/auth'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar({ setSearchTerm, setIsLoginForm }) {


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
  console.log(currentUserId)

  return (
    <>
      <nav>
        <ul className="menu">
          <Link to="/">
            <li className="home"><a href="#"><FontAwesomeIcon icon={faHome} /> Project Expo</a></li>
          </Link>


          {isLoggedIn && <Link to={`/profile/${currentUserId}`} className="button">
            <li className="item button"><a href="#">Profile</a></li>
          </Link>}
          {!isLoggedIn ?
            <>

              <li onClick={handleLoginButton} className="item button"><a href="#">Login</a></li>


              <li onClick={handleSignInButton} className="item button secondary"><a href="#">SignUp</a></li>
              <li className="toggle"><span className="bars"></span></li>
            </>
            :
            <li onClick={handleLogout} className="item button"><a href="#">Logout</a></li>
          }

        </ul>
        <SearchBar setSearchTerm={setSearchTerm} />
      </nav>
    </>
  )
}

export default NavBar