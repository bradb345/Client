import React from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SearchBar({ setSearchTerm }) {
  const [projects, setProjects] = React.useState(null)

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
            <li><a href="#">Projects</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Inspire Me</a></li>
          </ul>
        </nav>
      </div>
    </>
  
  )
}


export default SearchBar