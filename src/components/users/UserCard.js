import React from 'react'
import { getSingleUser } from '../lib/api'
import { Link } from 'react-router-dom'
import { isAuthor } from '../lib/auth'

import { faEnvelope, faPlusCircle, faCameraRetro, faCodeBranch, faBriefcase, faDesktop, faDove, faPlus, faSchool, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardMedia, Grid, Button, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

function UserCard({ id, profileImage, username  }) {

  // const { id } = useParams()
  const classes = useStyles()



  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getSingleUser(id)
        setUser(response.data)


      } catch (error) {
        console.log(error)
      }

    }

    getData()
  }, [id])



  return (
    <>
      <Grid item xs={12} sm={6} md={4} style={{ paddingTop: 64 }}>
        <Card>
          <CardMedia className={classes.cardMedia} image={user && user.profileImage || profileImage} />

          <Container className="user-title">
            <Typography variant="h6" color="primaryText" >{user && user.username || username}</Typography>
            <Typography variant="h6" color="primaryText">{user && user.jobTitle}</Typography>

            <div className="user-site link">
              {/* <a href={user && user.personalsite}>{user && user.personalsite}</a> */}
            </div>



            <Button size="small" color="primary"><FontAwesomeIcon icon={faPlusCircle} /> Follow</Button>
            <Button size="small" color="primary"><FontAwesomeIcon icon={faEnvelope} /> Hire Me</Button>
            <Link to="/projects/new">

              {isAuthor(user && user.id) ?
                <Button size="small" color="primary"><FontAwesomeIcon icon={faPlus} /> Add Project</Button>
                :
                <div />
              }
            </Link>
            <Link to={`/auth/profile/${id}/edit/`}>
              {isAuthor(user && user.id) ?
                <Button size="small" color="primary" ><FontAwesomeIcon icon={faEdit} /> Edit Profile
                </Button>
                :
                <div />
              }
            </Link>

            <br />
            <div className="user-site-link">
              {user && user.gacohort ? <Typography variant="h7" color="primary"><FontAwesomeIcon icon={faSchool} /> Cohort  <a href={`http://${user && user.gacohort}`} target="_blank" rel="noopener noreferrer"> </a></Typography> : <div />}
              {user && user.github  ? <Typography variant="h6" color="primary"><FontAwesomeIcon icon={faCodeBranch} /> Github<a href={`http://${user && user.github}`} target="_blank" rel="noopener noreferrer"></a></Typography> : <div />}
              {user && user.linkedin ? <Typography variant="h7" color="primary"><FontAwesomeIcon icon={faBriefcase} /> LinkedIn  <a href={`http://${user && user.linkedin}`} target="_blank" rel="noopener noreferrer"> </a></Typography> : <div />}
              {user && user.personalsite ? <Typography variant="h7" color="primary"><FontAwesomeIcon icon={faDesktop} /> My Site  <a href={`http://${user && user.personalsite}`} target="_blank" rel="noopener noreferrer"> </a></Typography> : <div />}
              {user && user.twitter ? <Typography variant="h7" color="primary"><FontAwesomeIcon icon={faDove} /> Twitter  <a href={`http://${user && user.twitter}`} target="_blank" rel="noopener noreferrer"></a></Typography> : <div />}
              {user && user.instagram ? <Typography variant="h7" color="primary"><FontAwesomeIcon icon={faCameraRetro} /> Instagram <a href={`http://${user && user.instagram}`} target="_blank" rel="noopener noreferrer"> </a></Typography> : <div />}

              
            </div>
          </Container>
        </Card>
      </Grid>
    </>
  )
}

export default UserCard