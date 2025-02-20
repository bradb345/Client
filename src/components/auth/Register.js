import React from 'react'
import { useForm } from '../hooks/useForm'
import { useHistory } from 'react-router'
import { registerUser, loginUser } from '../lib/api'
import { setToken } from '../lib/auth'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function Register({ setIsLoginForm }) {

  const classes = useStyles()
  const history = useHistory()
  const { formdata, formErrors, setFormErrors, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await registerUser(formdata)
      const res = await loginUser(formdata)
      setToken(res.data.token)
      history.push('/')
    } catch (err) {
      setFormErrors(err.response.data)
      // console.log(err.response.data.errors)
    }
  }

  const handleClick = () => {
    setIsLoginForm(true)
  }

  // console.log(formErrors)
  return (



    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="textSecondary">
          Sign Up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={handleChange}
              />
              {formErrors.username && (
                <small >Username is required</small>
              )}
            </Grid>



            <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
              {formErrors.email && (
                <small >Email is required</small>
              )}
            </Grid>




            <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              {formErrors.password && (
                <small >Password is required</small>
              )}
            </Grid>



            <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="passwordConformation"
                label="Password Conformation"
                type="passwordConformation"
                id="passwordConformation"
                autoComplete="current-password"
                onChange={handleChange}
              />
              {formErrors.passwordConformation && (
                <small >passwords dont match</small>
              )}
            </Grid>




          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register Me!
          </Button>

          <p>Already a user?<a style={{ color: 'blue' }} onClick={handleClick}> Sign In</a></p>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>




  )
}

export default Register