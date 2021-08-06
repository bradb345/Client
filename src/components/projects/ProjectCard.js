import React from 'react'
import { Link, useHistory } from 'react-router-dom'


import { faUser, faThumbsUp, faDesktop, faEdit, faRemoveFormat, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isAuthenticated, getCurrentUserId, isAuthor } from '../lib/auth'
import { likeProject, deleteSingleProject } from '../lib/api'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, CardActions, Button, Toolbar, AppBar, CssBaseline } from '@material-ui/core'
import { Typography } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({


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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  root: {
    flexGrow: 1,
  },
  visit: {
    flexGrow: 1,
  },

}))


function ProjectCard({ projectName, url, owner, handleUpdateProjects, projectId, likedByArray, username }) {

  const classes = useStyles()

  const [likeText, setLikeText] = React.useState(' Like')
  const history = useHistory()

  React.useEffect(() => {
    likedByArray.some(like => like.id === getCurrentUserId()) ? setLikeText('Unlike') : setLikeText('Like')
  }, [likedByArray])

  const handleLike = async (event) => {
    event.stopPropagation()
    console.log()
    if (!isAuthenticated()) {
      history.push('/auth')
    }
    if (likedByArray.includes(getCurrentUserId())) {
      setLikeText('Unlike')
    } else {
      setLikeText(' Like')
    }
    console.log(likedByArray)
    try {
      const res = await likeProject(projectId)
      handleUpdateProjects(res.data)

    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async () => {
    confirm('Are you sure you want to delete this project?')
    await deleteSingleProject(projectId)
    location.reload()
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>

          <iframe
            src={`${url}`}
            width="450px"
            height="300px"
            title="Project Name"
            scrolling="no"
          />

          <CardContent CardContent className={classes.cardContent}>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0}>

              <Toolbar>
                <Typography variant="h7" color="primary" noWrap className={classes.visit} ><FontAwesomeIcon icon={faDesktop} style={{ color: '#3f50b5' }} /> Project Name: {projectName}</Typography>
                <span>
                  <FontAwesomeIcon style={{ color: '#3f50b5' }} icon={faLink} /><a style={{ textDecoration: 'none', color: '#3f50b5' }} href={`${url}`} target="_blank" rel="noopener noreferrer"> Visit Site</a>
                </span>
              </Toolbar>

              <Link to={`/profile/${owner}`} style={{ textDecoration: 'none', paddingLeft: 25 }} >
                <FontAwesomeIcon style={{ color: '#3f50b5' }} icon={faUser} /> User: {username}
              </Link>



            </AppBar>






            <CardActions>
              <Button onClick={handleLike} color="primary" ><FontAwesomeIcon icon={faThumbsUp} /> {likeText} {likedByArray && likedByArray.length}</Button>


              {isAuthor(owner) && (

                <>
                  <Link to={`/projects/${projectId}/edit/`} style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                  </Link>


                  <Button size="small" color="secondary" onClick={handleDelete} > <FontAwesomeIcon icon={faRemoveFormat} /> Delete </Button>
                </>

              )}
            </CardActions>
          </CardContent>



        </Card>
      </Grid>
    </>
  )
}

export default ProjectCard