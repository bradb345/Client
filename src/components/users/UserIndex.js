import React from 'react'
import UserCard from '../users/UserCard.js'
import { getAllUsers } from '../lib/api'

import Error from '../common/Error.js'

import Loader from 'react-loader-spinner'

import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({


  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  root: {
    flexGrow: 1,
  },


}))

function UserIndex({ searchTerm }) {
  const [users, setUsers] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !users && !isError

  const classes = useStyles()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllUsers()
        setUsers(response.data)
        console.log(response.data)
      } catch (error) {
        setIsError(true)
        console.log(error)
      }
    }
    getData()
  }, [searchTerm])

  const filterUsers = () => {
    return (
      users.filter(user => {
        return (
          (user.username.toLowerCase().includes(searchTerm))
        )
      }))
  }

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        {isError && <Error />}
        {isLoading && <Loader
          type="TailSpin"
          color="#F70C0C"
          height={100}
          width={100} //3 secs
        />}


        <Grid container spacing={2}>
          { users &&
        filterUsers().map((user) => (

          <UserCard
            key={user.id}
            userId={user.id}
            profileImage={user.profileImage}
            username={user.username}
            gacohort={user.gacohort}
            github={user.github}
            linkedin={user.linkedin}
            personalsite={user.personalsite}
            twitter={user.twitter}
            instagram={user.instagram}
            // jobTitle={user.jobTitle}
          />

        ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default UserIndex