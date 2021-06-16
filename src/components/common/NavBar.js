import React from 'react'
import SearchBar from './SearchBar.js'
import { Link, useHistory } from 'react-router-dom'
import { getCurrentUserId, isAuthenticated, removeToken } from '../lib/auth'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar({  setSearchTerm, setIsLoginForm }) {


  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleClick = () => {

    history.push('/auth')
    setIsLoginForm(false)
    
  }

  const handleLogout = () => {
    removeToken()
    history.push('/')
    location.reload()
  }

  return (
    <>
      <nav>
        <ul className="menu">
          <li className="home"><a href="#"><FontAwesomeIcon icon={faHome} /> Project Expo</a></li>

          {isLoggedIn && <Link to={`/profile/${getCurrentUserId()}`} className="button">
            <li className="item button"><a href="#">Profile</a></li>
          </Link>}
          {!isLoggedIn ?
            <>
              <Link to="/auth">
                <li className="item button"><a href="#">Login</a></li>
              </Link>

              <li onClick={handleClick} className="item button secondary"><a href="#">SignUp</a></li>
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