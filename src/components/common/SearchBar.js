import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function SearchBar() {

  
  return (
    <div className="search-container">
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} color="white"/>
      </div>
      <input
        type="search" 
        className="search" 
        placeholder="This is a search bar"/>
      <nav className="search-navbar">
        <ul className="search-item-container">
          <li><a href="#">Projects</a></li>
          <li><a href="#">People</a></li>
          <li><a href="#">Inspire Me</a></li>
        </ul>
      </nav>
    </div>
  
  )
}


export default SearchBar