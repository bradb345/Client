import React from 'react'
import Register from './Register'
import Login from './Login'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  
  layout: {
    width: 'auto',
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

function AuthPage({ setIsLoginForm, isLoginForm }) {

  const classes = useStyles()


  return (


    <main className={classes.layout} >
      <Paper className={classes.paper}>
        {isLoginForm ? <Login setIsLoginForm={setIsLoginForm} /> : <Register setIsLoginForm={setIsLoginForm} />}
      </Paper>
    </main>








  )
}

export default AuthPage