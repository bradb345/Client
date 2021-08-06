import React from 'react'
import { Link } from 'react-router-dom'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1, 1.5),
  },
  title: {
    flexGrow: 1,
    margin: theme.spacing(1, 1.5),
  },
  button: {
    margin: theme.spacing(1, 1.5),
  },
}))

function SearchBar({ setSearchTerm }) {


  const classes = useStyles()

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  }


  return (
    <div className={classes.root} >


      <Toolbar>
        <FontAwesomeIcon icon={faSearch} style={{ fontSize: 25, color: '#757ce8' }} />

        <input
          type="search"
          className="search"
          placeholder="This is a search bar"
          onChange={handleInput}
          style={{ borderRadius: 50, height: 36, borderWidth: 1, width: 'full width' }} elevation={2} />


        <Button variant="outlined"
          color="primary" style={{ borderRadius: 50 }} className={classes.button}>Favorited
        </Button>

        <Link to="/users" style={{ textDecoration: 'none' }}>
          <Button variant="outlined"
            color="primary" style={{ borderRadius: 50 }}>People
          </Button>
        </Link>


        <Button variant="outlined"
          className={classes.button}
          color="primary" style={{ borderRadius: 50 }}>Inspire Me
        </Button>

      </Toolbar>

    </div>

  )
}


export default SearchBar