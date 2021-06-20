import React from 'react'
import { Link } from 'react-router-dom'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SearchBar({ setSearchTerm }) {
  

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  }


  return (
    <>

      <div className="search-container">
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} color="white"/>
        </div>
        <input
          type="search" 
          className="search" 
          placeholder="This is a search bar"
          onChange={handleInput}/>
        <nav className="search-navbar">
          <ul className="search-item-container">
            <li><a href="#">Favorited</a></li>
            <Link to="/users">
              <li><a>People</a></li>
            </Link>
            <li><a href="#">Inspire Me</a></li>
          </ul>
        </nav>
      </div>
    </>
  
  )
}


export default SearchBar